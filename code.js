require('dotenv').config();
const express = require('express');
const session = require('express-session');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const app = express();
const KEYS_FILE = path.join(__dirname, 'keys.json');

if (!fs.existsSync(KEYS_FILE)) {
  fs.writeFileSync(KEYS_FILE, JSON.stringify({}));
}

function readDB() {
  return JSON.parse(fs.readFileSync(KEYS_FILE, 'utf-8'));
}

function writeDB(data) {
  fs.writeFileSync(KEYS_FILE, JSON.stringify(data, null, 2));
}

function todayUTC() {
  return new Date().toISOString().slice(0, 10);
}

function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let random = "";
  for (let i = 0; i < 10; i++) {
    random += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return "NN_" + random;
}

app.use(express.static('public'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));

app.get('/login', (req, res) => {
  const params = new URLSearchParams({
    client_id: process.env.DISCORD_CLIENT_ID,
    redirect_uri: process.env.DISCORD_REDIRECT_URI,
    response_type: 'code',
    scope: 'identify'
  });
  res.redirect(`https://discord.com/api/oauth2/authorize?${params}`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.redirect('/?error=no_code');

  try {
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.DISCORD_REDIRECT_URI
      })
    });
    const tokenData = await tokenRes.json();

    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    });
    const user = await userRes.json();

    req.session.user = {
      id: user.id,
      username: user.username,
      avatar: user.avatar
    };

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/?error=auth_failed');
  }
});

app.get('/api/me', (req, res) => {
  res.json({ user: req.session.user || null });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

app.post('/api/generate-key', (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ error: 'Chưa đăng nhập.' });
  }

  const db = readDB();
  const today = todayUTC();
  const record = db[user.id];

  if (record && record.lastClaimDate === today) {
    return res.status(429).json({
      error: 'Bạn đã nhận key hôm nay rồi. Quay lại vào ngày mai nhé.',
      key: record.key
    });
  }

  const newKey = generateKey();
  db[user.id] = {
    username: user.username,
    key: newKey,
    lastClaimDate: today
  };
  writeDB(db);

  res.json({ key: newKey });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
