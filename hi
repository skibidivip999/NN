if not game:IsLoaded() then
	game.Loaded:Wait()
end

pcall(function()
	game:GetService("StarterGui"):SetCore("SendNotification", { Title = "Night Hub", Text = "Script Loaded Successfully!", Duration = 5 })
end)

local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local CollectionService = game:GetService("CollectionService")
local Lighting = game:GetService("Lighting")
game:GetService("HttpService")
local TweenService = game:GetService("TweenService")
local v2 = workspace
local localPlayer = Players.LocalPlayer
local genv = type(getgenv) == "function" and getgenv() or _G

if genv.NightSAE and genv.NightSAE.Unload then
	pcall(genv.NightSAE.Unload)
	task.wait(0.05)
end

local tbl = { Name = "Night Hub", Game = "Steal An Egg", Build = "2.0" }
local tbl2 = nil
local flag = true
local tbl3 = {}
local saeGen = (genv.__SAE_GEN or 0) + 1
genv.__SAE_GEN = saeGen

local function fn2()
	return flag and genv.__SAE_GEN == saeGen
end

local function fn3(arg)
	tbl3[#tbl3 + 1] = arg
	return arg
end

local tbl4 = { "", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc" }

local function fn4(arg)
	local n = tonumber(arg) or 0
	local str = n < 0 and "-" or ""
	local n2 = math.abs(n)
	local n3 = 1

	while n2 >= 1000 and n3 < #tbl4 do
		n2 /= 1000
		n3 += 1
	end

	if n3 == 1 then
		return str .. string.format("%d", n2)
	end
	return str .. string.format("%.2f%s", n2, tbl4[n3])
end

local function fn5(arg)
	local n = math.max(0, math.floor(tonumber(arg) or 0))
	if n >= 3600 then
		return string.format("%dh %02dm", n // 3600, n % 3600 // 60)
	end
	return string.format("%dm %02ds", n // 60, n % 60)
end

local function fn6(arg, arg2)
	local str = tostring(arg or "")
	if arg2 <= #str then
		return str:sub(1, arg2)
	end
	return str .. string.rep(" ", arg2 - #str)
end

local function fn7()
	local character = localPlayer.Character
	if not character then
		return nil
	end
	local findFirstChildOfClass = character.FindFirstChildOfClass
	return character, character:FindFirstChild("HumanoidRootPart"), findFirstChildOfClass(character, "Humanoid")
end

local function fn8(arg)
	return Vector3.new(arg.X, 0, arg.Z)
end

local function fn9(arg, arg2)
	return fn8(arg - arg2).Magnitude
end

local function fn10(arg)
	local n = 0

	for k in pairs(arg) do
		n += 1
	end

	return n
end

local function fn11(arg, arg2)
	local now = os.clock()

	while os.clock() - now < arg do
		if not fn2() then
			return nil
		end
		local v3 = arg2()
		if v3 then
			return v3
		end
		task.wait(0.05)
	end
end

local function fn12(arg, arg2, ...)
	local v3 = table.pack(...)
	local flag2 = false
	local v4 = nil
	local str = nil

	task.spawn(function()
		local ok, result, result2 = pcall(arg2, table.unpack(v3, 1, v3.n))

		if ok then
			v4 = result
			str = result2
		else
			str = tostring(result)
		end

		flag2 = true
	end)

	local now = os.clock()

	while not flag2 and os.clock() - now < arg do
		task.wait(0.05)
	end

	if not flag2 then
		return nil, "timed out"
	end
	return v4, str
end

local tbl5 = {}

local function fn13(arg, arg2)
	local v3 = ReplicatedStorage

	for match in arg:gmatch("[^%.]+") do
		v3 = v3:FindFirstChild(match) or v3:WaitForChild(match, 6)

		if not v3 then
			if not arg2 then
				tbl5[#tbl5 + 1] = "RS." .. arg
			end

			return nil
		end
	end

	local ok, result = pcall(require, v3)

	if not ok then
		if not arg2 then
			tbl5[#tbl5 + 1] = "RS." .. arg .. " (" .. tostring(result):sub(1, 60) .. ")"
		end

		return nil
	end

	return result
end

local Remotes = fn13("Shared.Remotes")
local Save = fn13("Shared.Save")
local EggState = fn13("Client.EggState")
local PlotState = fn13("Client.PlotState")
local AssetRoster = fn13("Client.AssetRoster")
local Areas = fn13("Data.Areas")
local Guards = fn13("Data.Guards")
local Assets = fn13("Data.Assets")
local Rarity = fn13("Data.Rarity")
local Bases = fn13("Data.Bases")
local Trails = fn13("Data.Trails")
local Treadmills = fn13("Data.Treadmills")
local Gears = fn13("Data.Gears")
local AssetEarnings = fn13("Shared.Util.AssetEarnings")
local AssetItems = fn13("Shared.Util.AssetItems")
local AssetLottery = fn13("Shared.Util.AssetLottery")
local FuseKernel = fn13("Shared.Util.FuseKernel")
local AreaEggCycle = fn13("Shared.Util.AreaEggCycle")
local AreaEggSlotIdentity = fn13("Shared.Util.AreaEggSlotIdentity")
local TreadmillUtil = fn13("Shared.Util.TreadmillUtil")
local SafeZoneBarriers = fn13("Shared.Util.SafeZoneBarriers")
local RiftZoneLadder = fn13("Shared.Modules.RiftZoneLadder")
local Ragdoll = fn13("Shared.Modules.Ragdoll", true)
local AssetSizeClassification = fn13("Client.Util.AssetSizeClassification", true)
local Sakura = fn13("Data.Sakura", true)
local MonsterParasite = fn13("Data.MonsterParasite", true)
local BossEvent = fn13("Data.BossEvent", true)

if #tbl5 > 0 then
	warn("[Night Hub] this game update moved these module paths, the script stopped:")

	for _, v3 in ipairs(tbl5) do
		warn("   " .. v3)
	end

	return
end

local v3 = Remotes

local function fn14(arg, ...)
	if not arg then
		return nil, "remote missing"
	end
	local v4 = pcall
	local invokeServer = arg.InvokeServer
	local v5 = table.pack(...)
	v5.n = 3 + v5.n - 1
	table.move(v5, 1, v5.n, 3, v5)
	v5[1] = invokeServer
	v5[2] = arg
	local v6, v7, v8 = v4(table.unpack(v5, 1, v5.n))
	if not v6 then
		return nil, tostring(v7)
	end
	return v7, v8
end

local function fn15(arg, ...)
	if not arg then
		return false
	end
	local v4 = pcall
	local fireServer = arg.FireServer
	local v5 = table.pack(...)
	v5.n = 3 + v5.n - 1
	table.move(v5, 1, v5.n, 3, v5)
	v5[1] = fireServer
	v5[2] = arg
	return (v4(table.unpack(v5, 1, v5.n)))
end

local function fn16(arg, ...)
	local v4 = fn14
	local v5 = table.pack(...)
	v5.n = 2 + v5.n - 1
	table.move(v5, 1, v5.n, 2, v5)
	v5[1] = arg
	local v6, v7 = v4(table.unpack(v5, 1, v5.n))
	if type(v6) == "table" then
		return v6
	end

	if v6 == true and type(v7) == "table" then
		return v7
	end
	return nil, tostring(v7 or v6 or "no reply")
end

local tbl6

tbl6 = {
	save = function()local I,g=pcall( Save .Get);if I and type(g)=="table"then return g;end;return nil;end,
	field = function(I)if I then pcall( EggState .SyncFieldEggs);end;I= EggState .ReadFieldEggs();if type(I)=="table"and type(I.Records)=="table"then return I.Records;end;return{};end,
	owned = function()local I,g=pcall( EggState .ReadOwnerEggs, localPlayer .UserId);if I and type(g)=="table"then return g;end;return{};end,
	carry = function(I,g)return  EggState .CarryFieldEgg(I,g);end,
	drop = function()return(pcall( EggState .DropFieldEgg,"Manual"));end,
	plant = function(I,g)return  EggState .PlantEgg(I,g);end,
	wearEgg = function(I)return  EggState .WearEggTool(I);end,
	doffEgg = function(I)return  EggState .DoffEggTool(I);end,
	hatch = function(I)if not  EggState .BeginHatch(I)then return false;end;return  EggState .FinishHatch(I);end,
	ripe = function(I)local g,B=pcall( EggState .IsReadyToHatch,I);return g and B==true;end,
	plot = function()local I,g=pcall( PlotState .ResolvePlot);if I and type(g)=="table"and g.PetArea and g.CenterPoint then return g;end;return nil;end,
	pen = function()local I,g=pcall( AssetRoster .ReadOwnerPen, localPlayer .UserId);if I and type(g)=="table"then return g;end;return{};end,
	penCap = function()local I,g=pcall( AssetRoster .ReadWearLimit);if I and(tonumber(g))then return g;end;g= tbl6 .save();I= Bases .BASES and  Bases .BASES[g and g.BaseUpgradeLevel or 0];return I and I.MaxAssets or 7;end,
	wear = function(I)return(pcall( AssetRoster .WearAsset,I));end,
	doff = function(I)return(pcall( AssetRoster .DoffAsset,I));end,
	speedPower = function()local I= tbl6 .save();return tonumber(I and I.SpeedPower)or 0;end,
	walkSpeed = function(...) end,
	ladder = function()local I,g=pcall( RiftZoneLadder .Get);if I and type(g)=="table"then return g;end;return{};end,
	guardOf = function(I)local g= Areas .Directory[I];return g and  Guards .Directory[g.GuardId]or nil;end,
	asset = function(I)return  Assets .Directory and  Assets .Directory[I]or nil;end,
	rarityOf = function(I)local g= tbl6 .asset(I);I=g and g.Rarity;return I and I.DisplayName or"?",I and I.Color or(Color3.new(1,1,1)),I and(tonumber(I.RarityNumber))or 0;end,
	rate = function(I)local g,B=pcall( AssetEarnings .MutationOnlyRatePerSecond,{Category=I.AssetCategory,Scale=I.AssetScale,Mutations=I.Mutations or{}});if g and(tonumber(B))then return B;end;g= tbl6 .asset(I.AssetCategory);return(g and(tonumber(g.EarningRate))or 0)*(tonumber(I.AssetScale)or 1);end,
	sizeTag = function(I)if not  AssetSizeClassification or not  AssetSizeClassification .Ladder then return nil;end;local g;for B,o in ipairs( AssetSizeClassification .Ladder())do B=tonumber(o.MinimumScale);g=if B and(I or 0)>=B and(not g or B>g[1])then{B,o}else g;end;return g and g[2]or nil;end,
	depth = function(I)local g,B=pcall( SafeZoneBarriers .Depth,I);if g and(tonumber(B))then return B;end;return nil;end,
	inField = function(...) end,
	isWhiteWallUp = function()local I= tbl6 .areasFolder();local S=I and(I:FindFirstChild("WallStartCollision"));if not S then return false;end;return S.CanCollide==true;end,
	areasFolder = function()local I= v2 :FindFirstChild("__OBJECTS")or( v2 :FindFirstChild("World"));return I and(I:FindFirstChild("Areas"));end,
	guardAreas = function()local I= tbl6 .areasFolder();return I and(I:FindFirstChild("GuardAreas"));end,
	guardRig = function(I)local g= tbl6 .guardAreas();local S=g and(g:FindFirstChild(I));I=S and(S:FindFirstChild("Guard"));return I and(I:FindFirstChild("HumanoidRootPart")),I,S;end,
	safeSpot = function(...) end,
	fieldModel = function(I)local g= v2 :FindFirstChild("AreaEggSlotsClient");return g and(g:FindFirstChild(I))or nil;end,
	eggTools = function()local I={};local g=ipairs;local B={ localPlayer .Character, localPlayer :FindFirstChildOfClass("Backpack")};for S,S in g(B)do if S then for g,B in ipairs(S:GetChildren())do if B:IsA("Tool")and B:GetAttribute("ItemType")=="AssetEgg"then g=B:GetAttribute("UID");if type(g)=="string"and g~=""then I[g]=B;end;end;end;end;end;return I;end,
	gearTools = function(I)local g={};local B=ipairs;local o={ localPlayer .Character, localPlayer :FindFirstChildOfClass("Backpack")};for S,S in B(o)do if S then for B,B in ipairs(S:GetChildren())do if B:IsA("Tool")and B:GetAttribute("ItemType")=="Gear"then if not I or(I(B))then g[#g+1]=B;end;end;end;end;end;return g;end,
	holdTool = function(...) end,
}

local tbl7 = { swaps = 0, note = "not armed" }

local function fn17(parent)
	local humanoid = parent:FindFirstChildOfClass("Humanoid")
	if not humanoid then
		return false
	end

	if humanoid:GetAttribute("_x") then
		return false
	end
	local clone = humanoid:Clone()
	humanoid.Name = "OLD_HUMANOID"
	humanoid.Parent = nil
	clone.Parent = parent
	clone:SetAttribute("_x", true)
	tbl7.swaps = tbl7.swaps + 1
	tbl7.note = ("swapped the Humanoid %d times, every anticheat listener on the old one is dead"):format(tbl7.swaps)
	return true
end

tbl7.apply = function()
	if not tbl2.bypass then
		return false
	end
	local character = localPlayer.Character
	if not character then
		return false
	end
	return (pcall(fn17, character))
end

tbl7.arm = function()
	if tbl7.loop then
		return
	end
	tbl7.loop = true

	task.spawn(function()
		while fn2() do
			if tbl2.bypass then
				pcall(tbl7.apply)
			end

			task.wait(0.05)
		end

		tbl7.loop = false
	end)

	fn3(localPlayer.CharacterAdded:Connect(function()
		task.wait(0.05)

		if tbl2.bypass then
			pcall(tbl7.apply)
		end
	end))
end

tbl7.armed = function()
	local character = localPlayer.Character
	character = character and character:FindFirstChildOfClass("Humanoid")
	return character ~= nil and character:GetAttribute("_x") == true
end

tbl7.text = function()
	local concat = table.concat
	local tbl8 = {}
	local str = ("bypass: %s"):format(tbl7.armed() and "running" or "not attached")
	local note = tbl7.note
	tbl8[1] = str
	tbl8[2] = note
	tbl8[3] = "The Humanoid is replaced with a clone, so every anticheat listener bound to the old one dies."
	tbl8[4] = "In exchange the game stops writing your WalkSpeed, so the script reads speed straight from SpeedPower."
	return concat(tbl8, "\n")
end

local tbl8 = {
	hops = 0,
	tweens = 0,
	lerps = 0,
	blocked = 0,
	rollbacks = 0,
	weaves = 0,
	lockUntil = 0,
	halted = false,
	active = nil,
	note = "-",
}

local tbl9 = {
	tweenCap = 700,
	flyCap = 1200,
	blink = 250,
	ride = 4,
	drop = 320,
	ceil = 110,
	lift = 20,
	reach = 90,
	margin = 8,
}

local raycastParams = RaycastParams.new()
raycastParams.FilterType = Enum.RaycastFilterType.Exclude
raycastParams.IgnoreWater = true

local function fn18()
	local filterDescendantsInstances = { localPlayer.Character }

	for _, v4 in ipairs({ "AreaEggSlotsClient", "PlacedEggRenders", "ClientRenderedAssets", "__DEBRIS" }) do
		local v5 = v2:FindFirstChild(v4)

		if v5 then
			filterDescendantsInstances[#filterDescendantsInstances + 1] = v5
		end
	end

	for _, player in ipairs(Players:GetPlayers()) do
		if player ~= localPlayer and player.Character then
			filterDescendantsInstances[#filterDescendantsInstances + 1] = player.Character
		end
	end

	raycastParams.FilterDescendantsInstances = filterDescendantsInstances
end

local function capY(arg)
	if arg.Y <= tbl9.ceil then
		return arg
	end
	return Vector3.new(arg.X, tbl9.ceil, arg.Z)
end

tbl8.capY = capY
tbl8.ceil = tbl9.ceil
tbl8.ground = function(...) end
tbl8.cancel = function() tbl8 .halted=true;if  tbl8 .active then pcall(function() tbl8 .active:Cancel();end); tbl8 .active=nil;end;end
tbl8.cap = function(...) end
tbl8.pace = function(...) end
tbl8.near = function(...) end
tbl8.halt = function(...) end
tbl8.upright = function(...) end
tbl8.downed = function(...) end
tbl8.guards = function(I)local g= v3 .GuardPatrol.EnabledShifted;if not(g and type(firesignal)=="function")then return false;end; tbl8 .quiet=I~=true;return(pcall(firesignal,g.OnClientEvent,I==true,1/0));end
tbl8.stuck = function(...) end
tbl8.unstick = function(...) end

local function fn19(arg, arg2)
	local v4 = capY(arg)
	local v5 = fn8(v4 - arg2)
	if v5.Magnitude < 0.001 then
		return CFrame.new(v4)
	end
	return CFrame.lookAt(v4, v4 + v5.Unit * 10)
end

tbl8.guardNear = function(...) end
tbl8.sideRoom = function(...) end

local function fn20(arg, arg2, arg3)
	local n = math.max(1, math.ceil((arg2 - arg).Magnitude / math.clamp(arg3 * 0.6, 150, 450)))
	local tbl10 = {}

	for i = 1, n do
		tbl10[i] = tbl8.ground(arg:Lerp(arg2, i / n))
	end

	return tbl10
end

local function fn21(arg, arg2, arg3)
	local v4 = fn20(arg, arg2, arg3)
	local v5 = fn8(arg2 - arg)
	if v5.Magnitude < 0.001 then
		return v4
	end
	local unit = v5.Unit
	local weaveSign = tbl8.weaveSign == -1 and -1 or 1
	local tbl10 = {}

	for i, v6 in ipairs(v4) do
		if i == #v4 then
			tbl10[i] = v6
		else
			local v7, v8, v9 = tbl8.sideRoom(v6, unit)
			local v10 = tbl8.guardNear(v6, 140)

			if v10 then
				local v11 = fn8(v6 - v10)

				if v11.Magnitude > 0.001 then
					weaveSign = v11.Unit:Dot(v7) >= 0 and 1 or -1
				end
			end

			tbl10[i] = tbl8.ground(v6 + v7 * weaveSign * math.max(0, math.min((weaveSign > 0 and v8 or v9) - tbl9.margin, 60)))
			weaveSign = -weaveSign
			tbl8.weaves = tbl8.weaves + 1
		end
	end

	tbl8.weaveSign = weaveSign
	return tbl10
end

local function fn22(parent)
	local bodyVelocity = Instance.new("BodyVelocity")
	bodyVelocity.Name = "NightDriveV"
	bodyVelocity.MaxForce = Vector3.one * 10000000
	bodyVelocity.P = 12500
	bodyVelocity.Velocity = Vector3.zero
	bodyVelocity.Parent = parent
	local bodyGyro = Instance.new("BodyGyro")
	bodyGyro.Name = "NightDriveG"
	bodyGyro.MaxTorque = Vector3.new(0, 9e9, 0)
	bodyGyro.P = 3000
	bodyGyro.D = 500
	bodyGyro.CFrame = parent.CFrame
	bodyGyro.Parent = parent
	return bodyVelocity, bodyGyro
end

tbl8.fly = function(...) end

local function fn23(arg, arg2, arg3)
	local v4, v5 = fn7()
	if not v5 then
		return false
	end
	local v6 = capY(arg)

	if tbl9.ceil < v5.Position.Y then
		v5.CFrame = v5.CFrame - Vector3.new(0, v5.Position.Y - tbl9.ceil, 0)
	end

	local position = v5.Position
	local magnitude = (v6 - position).Magnitude
	if magnitude < 0.05 then
		return true
	end
	local tween = TweenService:Create(v5, TweenInfo.new(magnitude / arg2, Enum.EasingStyle.Linear), { CFrame = fn19(v6, position) })
	tbl8.active = tween
	tween:Play()
	tbl8.tweens = tbl8.tweens + 1
	local now = os.clock()
	local n = magnitude / arg2 + 2

	while tween.PlaybackState == Enum.PlaybackState.Playing do
		if not fn2() or tbl8.halted or arg3 and arg3() then
			pcall(function()
				tween:Cancel()
			end)

			tbl8.active = nil
			return false
		end

		local v7
		v7, v7 = fn7()

		if not v7 or v7.Anchored then
			pcall(function()
				tween:Cancel()
			end)

			tbl8.active = nil
			return false
		end

		if n < os.clock() - now then
			pcall(function()
				tween:Cancel()
			end)

			break
		end

		RunService.Heartbeat:Wait()
	end

	tbl8.active = nil
	return true
end

tbl8.travel = function(...) end
tbl8.hop = function(...) end
tbl8.reach = function(I,g,B,o)if  tbl8 .near(I,g)then return true;end;if  tbl8 .hop(I,g,o)then return true;end;return  tbl8 .travel(I,g,B);end
tbl8.home = function(...) end
tbl8.leaveBase = function(...) end

tbl8.text = function()
	local v4, v5 = fn7()
	local concat = table.concat
	local tbl10 = {}
	local cap = tbl8.cap
	local str = ("mode: %s  |  speed %d studs/s  (cap %d)"):format(tostring(tbl2.moveMode), tbl8.pace(), cap())
	local str2 = ("fly %d | tween %d | blink %d | weave %d"):format(tbl8.lerps, tbl8.tweens, tbl8.hops, tbl8.weaves)
	local str3 = ("blocked %d | rolled back %d"):format(tbl8.blocked, tbl8.rollbacks)
	local str4 = ("height %s, riding %d studs over the ground"):format(v5 and ("%.0f"):format(v5.Position.Y) or "?", tbl9.ride)
	local str5 = tbl8.note ~= "-" and "\n" .. tbl8.note or nil
	tbl10[1] = str
	tbl10[2] = str2
	tbl10[3] = str3
	tbl10[4] = str4
	tbl10[5] = "Fly is a BodyVelocity push, the only thing the server accepts above walk speed."
	tbl10[6] = "It hugs the ground the whole way, it never climbs to a cruise height."
	tbl10[7] = str5
	return concat(tbl10, "\n")
end

local tbl10 = {
	"Common",
	"Uncommon",
	"Rare",
	"Epic",
	"Legendary",
	"Mythic",
	"Cosmic",
	"Secret",
	"Eternal",
	"Divine",
}

local function fn24()
	local tbl11 = {}
	local tbl12 = {}
	local v4 = pairs
	local rarities = Rarity.Rarities or {}

	for _, rarity in v4(rarities) do
		if type(rarity) == "table" then
			local str = tostring(rarity.DisplayName or "")

			if str ~= "" and not tbl11[str] then
				tbl11[str] = true
				local n = #tbl12 + 1
				local tbl13 = {}
				local n2 = tonumber(rarity.RarityNumber) or 0
				tbl13[1] = str
				tbl13[2] = n2
				tbl12[n] = tbl13
			end
		end
	end

	table.sort(tbl12, function(arg, arg2)
		if arg[2] ~= arg2[2] then
			return arg[2] > arg2[2]
		end
		return arg[1] < arg2[1]
	end)

	local tbl13 = {}

	for _, v5 in ipairs(tbl12) do
		tbl13[#tbl13 + 1] = v5[1]
	end

	return tbl13
end

local tbl11 = { picked = nil, seen = 0, Ranks = fn24() }
local rankNum = {}
local v4 = pairs
local rarities = Rarity.Rarities or {}

for _, rarity in v4(rarities) do
	if type(rarity) == "table" then
		local str = tostring(rarity.DisplayName or "")

		if str ~= "" and rankNum[str] == nil then
			rankNum[str] = tonumber(rarity.RarityNumber) or 0
		end
	end
end

tbl11.RankNum = rankNum
tbl11.Ladder = {}

for _, v5 in ipairs(tbl10) do
	if rankNum[v5] then
		tbl11.Ladder[#tbl11.Ladder + 1] = v5
	end
end

tbl11.where = function(S)local I=S.BoundsCFrame or S.BottomCFrame;return I and I.Position or nil;end
tbl11.stand = function(I)local g= tbl11 .where(I);if not g then return nil;end;return  tbl8 .capY(g+Vector3.new(0,3,0));end
tbl11.name = function(I)local g= tbl6 .asset(I.AssetCategory);return g and g.DisplayName or I.AssetCategory or"?";end
tbl11.label = function(I)local g= tbl6 .sizeTag(I.AssetScale);local B= tbl11 .name(I);B=if g then(g.Prefix or g.DisplayName or"").." "..B else B;return if I.HasParasite then B.." [ky sinh]"else B;end
tbl11.girth = function(S)local I=S.BoundsSize;if typeof(I)=="Vector3"then local g=math.abs(I.X*I.Y*I.Z);if g>0 then return g^0.3333333333333333;end;end;return tonumber(S.AssetScale)or 1;end
tbl11.loose = function()local I={};for g,g in pairs( tbl6 .field())do if type(g)=="table"and g.State=="Slot"then I[#I+1]=g;end;end; tbl11 .seen=#I;return I;end
tbl11.forget = function() tbl11 .heldAt=0; tbl11 .heldRec=nil;end
tbl11.carrying = function()local I= localPlayer :FindFirstChildOfClass("PlayerGui");local S=I and(I:FindFirstChild("DropHeldEgg"));return S~=nil and S.Enabled==true;end
tbl11.held = function()if not  tbl11 .carrying()then  tbl11 .forget();return nil;end;if os.clock()-( tbl11 .heldAt or 0)<0.2 then return  tbl11 .heldRec;end;local I=nil;for g,g in pairs( tbl6 .field())do if type(g)=="table"and g.State=="Carried"and g.CarrierUserId== localPlayer .UserId then I=g;break;end;end; tbl11 .heldAt=os.clock(); tbl11 .heldRec=I;return I;end
tbl11.byUid = function(I,g)if not I then return nil;end;for B,B in pairs( tbl6 .field(g))do if type(B)=="table"and B.Uid==I then return B;end;end;end
tbl11.bag = function()local I={};for g,B in pairs( tbl6 .owned())do if type(B)=="table"and not B.Placement then local o=tostring(B.AssetCategory or"?");local C,G,G= tbl6 .rarityOf(o);I[#I+1]={uid=B.Uid or g,cat=o,rar=C,num=G,scale=tonumber(B.AssetScale)or 1,muts=B.Mutations or{},rate= tbl6 .rate(B),parasite=B.HasParasite==true};end;end;table.sort(I,function(S,g)if S.rate~=g.rate then return S.rate>g.rate;end;return S.cat<g.cat;end);return I;end
tbl11.growing = function()local I={};local g=0;for B,o in pairs( tbl6 .owned())do if type(o)=="table"and o.Placement then local C=o.Uid or B;if  tbl6 .ripe(C)then I[#I+1]=C;else g+=1;end;end;end;return I,g;end
tbl11.allowed = function(I,g)if g.skip and g.skip[I.Uid]then return false;end;if g.area and g.area~=""and I.AreaId~=g.area then return false;end;if g.ranks and(next(g.ranks))then local B= tbl6 .rarityOf(I.AssetCategory);if not g.ranks[B]then return false;end;end;if g.floor and g.floor>0 and  tbl6 .rate(I)<g.floor then return false;end;if g.parasiteOnly and not I.HasParasite then return false;end;return true;end
tbl11.reachable = function(I,g)local B= tbl11 .needFor(I.AreaId);return B==nil or B<=g;end
tbl11.needFor = function(...) end
tbl11.score = function(...) end
tbl11.pick = function(...) end
tbl11.top = function(...) end

local tbl12 = {
	note = "not started",
	grabbed = 0,
	banked = 0,
	placed = 0,
	lost = 0,
	misses = 0,
	target = nil,
	cold = {},
}

local function fn25()
	return not (fn2() and tbl2.farm)
end

local function fn26(note)
	tbl12.note = note
	tbl2.status = note
end

tbl12.claim = function(I)local g= AreaEggSlotIdentity .LooksLikeFirstAreaUid;local B,o= tbl6 .carry(I.Uid,if g(I.Uid)then( AreaEggSlotIdentity .SlotKey(I.AreaId,I.NestId))else nil); tbl11 .forget();return B,o;end
tbl12.mine = function(I)local g= tbl11 .held();return g~=nil and(I==nil or g.Uid==I);end
tbl12.approach = function(I,g)local B= tbl11 .stand(I);if not B then return false;end;if not  tbl8 .reach(B,5,g,true)then if not  tbl8 .hop(B,5,true)then return false;end;end;return true;end

local function fn27(arg)
	return arg:find("knock") or arg:find("limp") or arg:find("ragdoll") or arg:find("stun")
end

tbl12.grab = function(...) end
tbl12.chase = function(...) end
tbl12.listen = function(...) end

local function fn28(arg, arg2)
	if arg2 < (tbl12.redeemAt or 0) then
		return true
	end
	local v5 = tbl11.byUid(arg.uid)
	if v5 and v5.State == "Claimed" then
		return true
	end
	local count = arg.count
	return fn10(tbl6.owned()) > count
end

tbl12.regrab = function(...) end
local n = 25
tbl12.chill = function(I,g)if I then  tbl12 .cold[I]=os.clock()+(g or  n );end;end
tbl12.skips = function()local I=os.clock();local g=nil;for B,o in pairs( tbl12 .cold)do if o>I then g=g or{};g[B]=true;else  tbl12 .cold[B]=nil;end;end;return g;end
tbl12.free = function(I)local g= tbl11 .byUid(I,true);if not g then return false;end;if g.State=="Claimed"then return false;end;if g.State=="Carried"then return g.CarrierUserId== localPlayer .UserId;end;return true;end
tbl12.park = function(I)local g=I and( tbl11 .stand(I));if g and not  tbl8 .near(g,14)then  tbl8 .hop(g,5,true);end; tbl8 .upright(); tbl8 .halt();end
tbl12.stay = function(...) end
tbl12.standby = function(...) end
tbl12.deliver = function(...) end
tbl12.zone = function(...) end
tbl12.cfg = function(...) end
tbl12.step = function(...) end
local str = "Forest"
local tbl13

tbl13 = {
	hits = 0,
	wins = 0,
	fails = 0,
	note = "idle",
	GUARD_SPOT = Vector3.new(592, 71, -319),
	SAFE_SPOT = Vector3.new(538, 71, -364),
	reach = 300,
	knockLeft = function()local I= localPlayer :GetAttribute("RagdollEndTime");if type(I)~="number"then return 0;end;return I- v2 :GetServerTimeNow();end,
	knocked = function(...) end,
	strike = function(...) end,
	warp = function(...) end,
	standWhile = function(...) end,
	waitKnockEnd = function(...) end,
	bait = function(...) end,
	reachBait = function(...) end,
	drop = function(...) end,
	takeBait = function(...) end,
	grabFar = function(...) end,
	run = function(...) end,
	text = function()
		local Forest = tbl6.guardRig("Forest")
		local n2 = 0

		for _, v5 in ipairs(tbl11.loose()) do
			if v5.AreaId == str then
				n2 += 1
			end
		end

		local concat = table.concat
		local tbl14 = {}
		local str2 = ("Forest guard: %s"):format(Forest and "found" or "missing, instant steal cannot launch")
		local str3 = ("bait eggs in Forest: %d"):format(n2)
		local str4 = ("launches %d | landed %d | failed %d"):format(tbl13.hits, tbl13.wins, tbl13.fails)
		local str5 = ("knock right now: %.1fs"):format(math.max(0, tbl13.knockLeft()))
		local str6 = ("Targets closer than %d studs skip the bait and warp straight in."):format(300)
		local note = tbl13.note
		tbl14[1] = str2
		tbl14[2] = str3
		tbl14[3] = str4
		tbl14[4] = str5
		tbl14[5] = ""
		tbl14[6] = "The Forest guard is the only one the client simulates, so its hit is one message"
		tbl14[7] = "your own machine sends. Firing it while holding a bait egg puts you in the knock"
		tbl14[8] = "state, and the server accepts a long teleport for as long as that state lasts."
		tbl14[9] = str6
		tbl14[10] = note
		return concat(tbl14, "\n")
	end,
}

Hop = { lastHop = 0, note = "-", hopCount = 0 }

Hop.shouldHop = function()
	if not tbl2.autoHop then
		return false
	end
	local hopValue = tbl2.hopValue or 1000000

	for _, v5 in ipairs(tbl11.loose()) do
		if hopValue < tbl6.rate(v5) then
			return false
		end
	end

	return true
end

Hop.doHop = function()
	local n2 = tonumber(tbl2.hopWait) or 5
	local lastHop = Hop.lastHop
	if os.clock() - lastHop < n2 then
		return
	end
	Hop.lastHop = os.clock()
	Hop.hopCount = Hop.hopCount + 1
	Hop.note = ("No egg > %s, waiting %.1fs then hopping #%d"):format(fn4(tbl2.hopValue or 1000000), n2, Hop.hopCount)
	tbl2.status = Hop.note

	pcall(function()
		post("hop", Hop.text())
	end)

	task.wait(n2)

	task.spawn(function()
		local TeleportService = game:GetService("TeleportService")

		if not pcall(function()
			TeleportService:Teleport(game.PlaceId, Players.LocalPlayer)
		end) then
			pcall(function()
				local HttpService = game:GetService("HttpService")
				local str2 = ("https://games.roblox.com/v1/games/%d/servers/Public?sortOrder=Asc&limit=100"):format(game.PlaceId)
				local response = game:HttpGet(str2)
				local data = HttpService:JSONDecode(response)

				if data and data.data then
					for _, v5 in ipairs(data.data) do
						if v5.id ~= game.JobId and v5.playing < v5.maxPlayers then
							TeleportService:TeleportToPlaceInstance(game.PlaceId, v5.id, Players.LocalPlayer)
							break
						end
					end
				end
			end)
		end
	end)

	task.wait(1)
end

Hop.text = function()
	local hopValue = tbl2.hopValue or 1000000
	local v5 = nil
	local v6 = nil
	local flag2 = nil

	for _, v7 in ipairs(tbl11.loose()) do
		local v8 = tbl6.rate(v7)

		if not v5 or v8 > v5 then
			v6 = tbl11.name(v7)
			v5 = v8
		end

		if hopValue < v8 then
			flag2 = true
		end
	end

	local concat = table.concat
	local tbl14 = {}
	local str2 = ("auto hop: %s | threshold %s"):format(tbl2.autoHop and "ON" or "OFF", fn4(hopValue))

	if flag2 then
		flag2 = ("Found egg > threshold: %s %.2f %s/s - will farm"):format(v6 or "?", v5 or 0, fn4(v5 or 0))
	end

	if not flag2 then
		flag2 = ("No egg > threshold (max %s %s/s) - will hop"):format(v6 or "none", fn4(v5 or 0))
	end

	local v7 = table.pack(("hops: %d | last: %s"):format(Hop.hopCount, Hop.note))
	tbl14[1] = str2
	tbl14[2] = flag2

	do
		local values = table.pack(table.unpack(v7, 1, v7.n))
		table.move(values, 1, values.n, 3, tbl14)
	end

	return concat(tbl14, "\n")
end

local tbl14 = {
	rows = function()return  tbl11 .bag();end,
	count = function()return# tbl11 .bag();end,
	cap = function()return 115;end,
	full = function(...) end,
	wanted = function(...) end,
	text = function()
		local v5 = tbl11.bag()
		if #v5 == 0 then
			return "egg bag is empty"
		end
		local tbl14 = {}
		local tbl15 = {}

		for _, v6 in ipairs(v5) do
			local tbl16 = tbl14[v6.rar]

			if not tbl16 then
				tbl16 = { n = 0, num = v6.num, worth = 0 }
				tbl14[v6.rar] = tbl16
				tbl15[#tbl15 + 1] = v6.rar
			end

			tbl16.n = tbl16.n + 1
			tbl16.worth = tbl16.worth + v6.rate
		end

		table.sort(tbl15, function(arg, arg2)
			if tbl14[arg].num ~= tbl14[arg2].num then
				return tbl14[arg].num > tbl14[arg2].num
			end
			return arg < arg2
		end)

		local v6, v7, v8 = ipairs(v5)
		local n2 = 0

		for _, v9 in v6, v7, v8 do
			n2 += v9.rate
		end

		local tbl16 = {}
		local str2 = ("hatching all %d eggs would add %s/s"):format(#v5, fn4(n2))
		local format = ("pen %d/%d").format
		local v9 = fn10(tbl6.pen())
		local penCap = tbl6.penCap
		tbl16[1] = str2

		do
			local values = table.pack(format("pen %d/%d", v9, penCap()))
			table.move(values, 1, values.n, 2, tbl16)
		end

		for _, v10 in ipairs(tbl15) do
			local v11 = tbl14[v10]
			tbl16[#tbl16 + 1] = ("%s x%d  ->  %s/s%s"):format(fn6(v10, 12), v11.n, fn4(v11.worth), (tbl2.placeAll or not next(tbl2.placeRanks) or tbl2.placeRanks[v10]) and "" or "   skipped")
		end

		return table.concat(tbl16, "\n")
	end,
}

local function fn29(arg, arg2)
	local raycastParams2 = RaycastParams.new()
	raycastParams2.FilterType = Enum.RaycastFilterType.Include
	raycastParams2.FilterDescendantsInstances = { arg }
	raycastParams2.IgnoreWater = true
	local tbl15 = {}
	local placedEggRenders = v2:FindFirstChild("PlacedEggRenders")

	if placedEggRenders then
		local str2 = tostring(localPlayer.UserId) .. "_"

		for _, child in ipairs(placedEggRenders:GetChildren()) do
			if child:IsA("Model") and child.Name:sub(1, #str2) == str2 then
				local ok, result = pcall(function()
					return child:GetPivot()
				end)

				if ok then
					tbl15[#tbl15 + 1] = result.Position
				end
			end
		end
	end

	local function fn30(arg3, arg4)
		for _, v5 in ipairs(tbl15) do
			if math.abs(arg3.X - v5.X) < arg4 and math.abs(arg3.Z - v5.Z) < arg4 then
				return false
			end
		end

		return true
	end

	local n2 = arg.Size.X * 0.44
	local n3 = arg.Size.Z * 0.44

	for _, v5 in ipairs({ 4.2, 3.4, 2.6 }) do
		local v6 = nil
		local position = nil

		for i = 1, 80 do
			local position2 = (arg.CFrame * CFrame.new((math.random() * 2 - 1) * n2, 0, (math.random() * 2 - 1) * n3)).Position

			if fn30(position2, v5) then
				local hit = v2:Raycast(position2 + Vector3.new(0, 30, 0), Vector3.new(0, -140, 0), raycastParams2)

				if hit and hit.Instance == arg and fn30(hit.Position, v5) then
					if not arg2 then
						return hit.Position
					end
					local magnitude = (hit.Position - arg2).Magnitude

					if not v6 or magnitude < v6 then
						position = hit.Position
						v6 = magnitude
					end
				end
			end
		end

		if position then
			return position
		end
	end
end

local tbl15 = {
	placed = 0,
	fails = 0,
	hatched = 0,
	note = "-",
	busy = false,
	hatching = false,
	onPad = function(...) end,
	goPad = function(...) end,
	one = function(...) end,
	dump = function(...) end,
	hatch = function(...) end,
}

local tbl16

tbl16 = {
	claim = "-",
	upgrade = "-",
	sell = "-",
	fuse = "-",
	shrine = "-",
	cash = function()local I= tbl6 .save();return tonumber(I and I.Money)or 0;end,
	baseStep = function()local I= tbl6 .save();if not I then return nil;end;local g=tonumber(I.BaseUpgradeLevel)or 0;local B= Bases .BASES or  Bases .Directory or{};return{level=g,now=B[g],next=B[g+1],cash=tonumber(I.Money)or 0};end,
	raiseBase = function(...) end,
	collectAway = function(...) end,
	harvest = function(...) end,
	autoSell = function(...) end,
	pets = function()local I={};local g= tbl6 .save();if not(g and type(g.Inventory)=="table")then return I;end;local B={};for o,o in pairs(g.EquippedAssets or{})do B[o]=true;end;for o,C in pairs(g.Inventory)do local g,G=pcall( AssetItems .Decode,C);if g and type(G)=="table"and G.Category then local g=0;pcall(function()g=tonumber( AssetItems .SalePrice(G))or 0;end);local C=0;pcall(function()C=tonumber( AssetEarnings .CatalogRatePerSecond(G))or 0;end);I[#I+1]={uid=o,item=G,cat=tostring(G.Category),name=tostring(G.DisplayName or G.Category),scale=tonumber(G.Scale)or 1,worth=g,rate=C,worn=B[o]==true,fav=G.IsFavorite==true,fusing=G.InFuse==true};end;end;table.sort(I,function(S,g)if S.rate~=g.rate then return S.rate>g.rate;end;return S.worth>g.worth;end);return I;end,
	penText = function()
		local v5 = tbl6.pen()
		local n2 = 0

		for _, v6 in pairs(v5) do
			n2 += tonumber(v6.MoneyPerSecond) or 0
		end

		local v6 = tbl16.pets()
		local v7 = tbl6.penCap()
		local n3 = 0

		for i = 1, math.min(v7, #v6) do
			n3 += v6[i].rate
		end

		local tbl17 = { ("pen %d/%d trong %d thu, dang kiem %s/s"):format(fn10(v5), v7, #v6, fn4(n2)) }

		if n2 * 1.01 < n3 then
			tbl17[#tbl17 + 1] = ("the best layout makes %s/s, you are losing %s/s"):format(fn4(n3), fn4(n3 - n2))
		else
			tbl17[#tbl17 + 1] = "the pen is already at its best layout"
		end

		for i = 1, math.min(6, #v6) do
			local v8 = v6[i]
			tbl17[#tbl17 + 1] = ("%s %s %s/s%s"):format(fn6(i .. ".", 4), fn6(v8.name, 20), fn4(v8.rate), v8.worn and "  [in pen]" or "")
		end

		return table.concat(tbl17, "\n")
	end,
	wearBest = function(...) end,
	sellAll = function(...) end,
	sellWorst = function(...) end,
	sellEggs = function(...) end,
	eggText = function()
		local v5 = tbl11.bag()
		if #v5 == 0 then
			return "no eggs in your bag"
		end
		local n2 = 0

		for _, v6 in ipairs(v5) do
			n2 += v6.rate
		end

		local tbl17 = { ("all %d eggs together are worth %s/s once hatched"):format(#v5, fn4(n2)) }

		for i = 1, math.min(8, #v5) do
			local v6 = v5[i]
			local str2 = #v6.muts > 0 and " " .. table.concat(v6.muts, "+") or ""
			local n3 = #tbl17 + 1
			local scale = v6.scale
			tbl17[n3] = ("%s %s co %.2f%s -> %s/s"):format(fn6(i .. ".", 4), fn6(v6.cat, 20), scale, str2, fn4(v6.rate))
		end

		if #v5 > 8 then
			tbl17[#tbl17 + 1] = ("... and %d more eggs"):format(#v5 - 8)
		end

		return table.concat(tbl17, "\n")
	end,
}

local tbl17 = { runs = 0, fails = 0, note = "not run yet", base = 0 }

local function fn30(arg)
	if arg.fav or arg.fusing or arg.worn then
		return false
	end
	local fuseKeepMutated = tbl2.fuseKeepMutated

	if fuseKeepMutated then
		fuseKeepMutated = #(arg.item.Mutations or {}) > 0
	end

	if fuseKeepMutated then
		return false
	end
	local v5 = tbl6.asset(arg.cat)
	return v5 ~= nil and v5.CannotFuse ~= true
end

tbl17.groups = function()
	local v5 = tbl16.pets()
	local v6 = tbl6.penCap()
	local tbl18 = {}

	for _, v7 in ipairs(v5) do
		tbl18[#tbl18 + 1] = v7.rate
	end

	table.sort(tbl18, function(arg, arg2)
		return arg > arg2
	end)

	tbl17.base = 0

	for i = 1, math.min(v6, #tbl18) do
		tbl17.base = tbl17.base + tbl18[i]
	end

	local tbl19 = {}

	for _, v7 in ipairs(v5) do
		if fn30(v7) then
			local tbl20 = tbl19[v7.cat]

			if not tbl20 then
				tbl20 = { cat = v7.cat, pets = {} }
				tbl19[v7.cat] = tbl20
			end

			tbl20.pets[#tbl20.pets + 1] = v7
		end
	end

	local tbl20 = {}

	for _, v7 in pairs(tbl19) do
		if #v7.pets >= 3 then
			local flag2 = tbl2.fuseOrder == "To truoc"

			table.sort(v7.pets, function(arg, arg2)
				if arg.scale == arg2.scale then
					return arg.uid < arg2.uid
				end

				if flag2 then
					return arg.scale > arg2.scale
				end
				return arg.scale < arg2.scale
			end)

			v7.sets = #v7.pets // 3
			v7.mean = (v7.pets[1].scale + v7.pets[2].scale + v7.pets[3].scale) / 3
			local ok, result = pcall(FuseKernel.PriceFor, { v7.pets[1].item, v7.pets[2].item, v7.pets[3].item })
			v7.price = ok and tonumber(result) or 0
			v7.floor = tbl18[math.min(v6, #tbl18)] or 0
			v7.lift = v7.pets[1].rate + v7.pets[2].rate + v7.pets[3].rate
			tbl20[#tbl20 + 1] = v7
		end
	end

	table.sort(tbl20, function(arg, arg2)
		if arg.sets ~= arg2.sets then
			return arg.sets > arg2.sets
		end
		return arg.price < arg2.price
	end)

	return tbl20
end

tbl17.tidy = function()
	local v5 = tbl6.save()
	if not v5 then
		return false
	end

	if v5.FusionEggReward and v5.FusionEggReward ~= false then
		fn14(v3.Fusery.FinishReveal)
		task.wait(0.05)
		v5 = tbl6.save() or v5
	end

	local v6 = ipairs
	local fusionSlots = v5.FusionSlots or {}
	local n2 = 0

	for _, fusionSlot in v6(fusionSlots) do
		if fn14(v3.Fusery.EjectPet, fusionSlot) == true then
			n2 += 1
		end

		task.wait(0.05)
	end

	return true, n2
end

tbl17.once = function()
	if tbl17.busy then
		return false, "already fusing"
	end
	tbl17.busy = true

	local ok, result = pcall(function()
		local v5 = tbl6.save()
		if not v5 then
			return "save data not loaded yet"
		end
		local flag2 = v5.FusionLocked == true or v5.FusionEggReward and v5.FusionEggReward ~= false

		if not flag2 then
			flag2 = #(v5.FusionSlots or {}) > 0
		end

		if flag2 then
			tbl17.tidy()
			task.wait(0.05)
		end

		if tbl14.full() then
			return "tui trung day, no bot truoc da"
		end
		local v6 = tbl17.groups()
		if #v6 == 0 then
			return "no category has three fusable pets"
		end
		local v7 = tbl16.cash()
		local v8 = nil

		for _, v9 in ipairs(v6) do
			if v9.price <= v7 then
				v8 = v9
				break
			else
				v8 = nil
			end
		end

		if not v8 then
			return ("the cheapest fuse costs %s, you have %s"):format(fn4(v6[1].price), fn4(v7))
		end
		local tbl18 = {}

		for _, v9 in ipairs({ v8.pets[1], v8.pets[2], v8.pets[3] }) do
			local v10, v11 = fn14(v3.Fusery.LoadPet, v9.uid)

			if v10 == true then
				tbl18[#tbl18 + 1] = v9.uid
				task.wait(0.05)
				continue
			end

			for _, v12 in ipairs(tbl18) do
				fn14(v3.Fusery.EjectPet, v12)
				task.wait(0.05)
			end

			tbl17.fails = tbl17.fails + 1
			return ("loading %s failed: %s"):format(v8.cat, tostring(v11 or "rejected"))
		end

		local v9 = tbl16.cash()
		local v10, v11, v12 = fn14(v3.Fusery.BeginFuse)

		if v10 ~= true then
			for _, v13 in ipairs(tbl18) do
				fn14(v3.Fusery.EjectPet, v13)
				task.wait(0.05)
			end

			tbl17.fails = tbl17.fails + 1
			return ("the machine refused to start: %s"):format(tostring(v11))
		end

		task.wait(0.05)
		local v13, v14 = fn14(v3.Fusery.FinishReveal)
		if v13 ~= true then
			tbl17.fails = tbl17.fails + 1
			return ("it ran but no egg dropped: %s"):format(tostring(v14))
		end
		tbl17.runs = tbl17.runs + 1
		local n2 = type(v12) == "table" and tonumber(v12.AssetScale) or 0
		local n3 = v8.mean > 0 and n2 / v8.mean or 0
		local format = ("fused 3x %s -> egg size %.2f (inputs averaged %.2f, x%.2f), cost %s").format
		local cat = v8.cat
		local mean = v8.mean
		local v15 = table.pack(fn4(math.max(0, v9 - tbl16.cash())))
		v15.n = 6 + v15.n - 1
		table.move(v15, 1, v15.n, 6, v15)
		v15[1] = "fused 3x %s -> egg size %.2f (inputs averaged %.2f, x%.2f), cost %s"
		v15[2] = cat
		v15[3] = n2
		v15[4] = mean
		v15[5] = n3
		return format(table.unpack(v15, 1, v15.n))
	end)

	tbl17.busy = false
	tbl17.note = ok and tostring(result) or "error: " .. tostring(result)
	return ok and not tbl17.note:find("failed"), tbl17.note
end

tbl17.text = function()
	local v5 = tbl17.groups()
	local v6 = tbl16.cash()
	local tbl18 = {}
	local str2 = "money %s | feed order: %s | %s"
	local format = str2.format
	local v7 = fn4(v6)
	local str3 = tostring(tbl2.fuseOrder)
	local str4 = tbl2.fuseKeepMutated and "skipping mutated pets" or "mutated pets allowed"

	do
		local values = table.pack(format(str2, v7, str3, str4))
		table.move(values, 1, values.n, 1, tbl18)
	end

	if #v5 == 0 then
		tbl18[#tbl18 + 1] = "no category has three fusable pets right now"
	else
		local n2 = 0

		for _, v8 in ipairs(v5) do
			n2 += v8.sets
		end

		tbl18[#tbl18 + 1] = ("%d loai ready, %d luot ghep. Chuong dang dang %s/s"):format(#v5, n2, fn4(tbl17.base))

		for i = 1, math.min(6, #v5) do
			local v8 = v5[i]
			tbl18[#tbl18 + 1] = ("%s %s x%d -> %d fuses, %s each, average size %.2f%s"):format(fn6(i .. ".", 4), fn6(v8.cat, 18), #v8.pets, v8.sets, fn4(v8.price), v8.mean, v8.price > v6 and "   (too expensive)" or "")
		end
	end

	tbl18[#tbl18 + 1] = ("fused %d | failed %d | %s"):format(tbl17.runs, tbl17.fails, tbl17.note)
	return table.concat(tbl18, "\n")
end

local tbl18

tbl18 = {
	note = "-",
	state = function()
		local v5, v6 = fn14(v3.ShrineFusion.AskState)
		if v5 == true and type(v6) == "table" then
			return v6
		end

		if type(v5) == "table" then
			return v5
		end
		return nil
	end,
	text = function()
		local v5 = tbl18.state()
		if not v5 then
			return "shrine state not loaded"
		end
		local tbl19 = {}
		local str2 = ("shrine: %s"):format(v5.Enabled and (v5.Ready and "ready" or "chua ready") or "closed")
		local v6 = tostring
		local message = v5.Message or ""
		local v7 = table.pack(v6(message))
		tbl19[1] = str2

		do
			local values = table.pack(table.unpack(v7, 1, v7.n))
			table.move(values, 1, values.n, 2, tbl19)
		end

		local v8 = pairs
		local recipes = v5.Recipes or {}

		for k, recipe in v8(recipes) do
			tbl19[#tbl19 + 1] = ("%s: %s + %s -> %s   [%s]"):format(fn6(k, 9), fn6(tostring(recipe.Light), 14), fn6(tostring(recipe.Dark), 16), tostring(recipe.Fused), tostring(v5[k] or "?"))
		end

		tbl19[#tbl19 + 1] = "needs two players, one offering a Light pet and one a Dark pet"
		return table.concat(tbl19, "\n")
	end,
	submit = function(arg)
		local v5, v6 = fn14(v3.ShrineFusion.AskSubmit, { Uid = arg })
		tbl18.note = v5 == true and "pet placed on the shrine" or "shrine refused: " .. tostring(v6)
		return v5 == true
	end,
}

local tbl19

tbl19 = {
	note = "-",
	gainAt = 0,
	gains = 0,
	upgrades = 0,
	tier = function(I)if not I then local g= tbl6 .save();I=tonumber(g and g.TreadmillUpgradeLevel)or 1;end;local g,B=pcall( Treadmills .GetByUpgradeLevel,I);return I,g and B or nil;end,
	perSecond = function()local I= tbl6 .save();if not I then return 0;end;local g,g= tbl19 .tier();local B,o=pcall( TreadmillUtil .ResolveSpeedPowerPerSecond,I,g and g.SpeedMultiplier or 1);return B and(tonumber(o))or 0;end,
	belt = function()local I= tbl6 .plot();local S=I and I.PlotFolder and(I.PlotFolder:FindFirstChild("TreadmillBottom"));return S and(S:IsA("BasePart"))and S or nil;end,
	riding = function(...) end,
	ticking = function()return os.clock()- tbl19 .gainAt<4;end,
	listen = function(...) end,
	mount = function(...) end,
	dismount = function(...) end,
	freeSelf = function(...) end,
	ghostOn = function(...) end,
	ghostOff = function()if  tbl19 .anchorBond then pcall(function() tbl19 .anchorBond:Disconnect();end); tbl19 .anchorBond=nil;end;end,
	raise = function(...) end,
	text = function()
		local v5, v6 = tbl19.tier()
		local v7, str2 = tbl19.tier(v5 + 1)
		local str3 = tbl2.ghost and (tbl19.ticking() and "ghost: earning speed anywhere" or "ghost: slipped off the belt, remounting") or tbl19.riding() and "standing on the treadmill" or "not on the treadmill"
		local tbl20 = {}
		local walkSpeed = tbl6.walkSpeed
		local str4 = ("SpeedPower %s  ->  WalkSpeed %.1f"):format(fn4(tbl6.speedPower()), walkSpeed())
		local str5 = ("treadmill lv%d %s x%s  |  +%s/s  |  %s"):format(v5, tostring(v6 and (v6.DisplayName or v6._id)), tostring(v6 and v6.SpeedMultiplier), fn4(tbl19.perSecond()), str3)
		str2 = str2 and ("lv%d costs %s"):format(v5 + 1, fn4(str2.Price)) or "maxed out"
		local note = tbl19.note ~= "-" and tbl19.note or nil
		tbl20[1] = str4
		tbl20[2] = str5
		tbl20[3] = str2
		tbl20[4] = note
		return table.concat(tbl20, "\n")
	end,
	step = function(...) end,
}

local tbl20

tbl20 = {
	note = "-",
	bought = 0,
	pick = function()
		local directory = Trails.Directory or Trails
		local v5 = tbl6.save()
		if not (directory and v5) then
			return nil
		end
		local trailInventory = type(v5.TrailInventory) == "table" and v5.TrailInventory or {}
		local equippedTrail = v5.EquippedTrail
		local n2 = tonumber(v5.Money) or 0

		local function fn31(arg)
			arg = arg and directory[arg]

			if arg then
				arg = math.max(tonumber(arg.SpeedMultiplier) or 1, 1)
			end

			return arg or 1
		end

		local n3 = equippedTrail and trailInventory[equippedTrail] and fn31(equippedTrail) or 1
		local v6 = nil
		local v7 = nil
		local v8 = nil
		local v9 = n3
		local v10 = equippedTrail

		for k, v11 in pairs(directory) do
			if type(v11) == "table" then
				local n4 = math.max(tonumber(v11.SpeedMultiplier) or 1, 1)

				if trailInventory[k] == true then
					if v9 < n4 then
						v9 = n4
						v10 = k
					end
				else
					local num = tonumber(v11.Price)

					if num and num <= n2 and n4 > v9 and (not v6 or n4 > v6) then
						v6 = n4
						v7 = k
						v8 = num
					end
				end
			end
		end

		return {
			worn = equippedTrail,
			wornMult = n3,
			bestOwn = v10,
			bestOwnMult = v9,
			buy = v7,
			buyMult = v6,
			buyCost = v8,
			cash = n2,
		}
	end,
	wearBest = function()
		local v5 = tbl20.pick()
		if not (v5 and v5.bestOwn) or v5.bestOwn == v5.worn then
			return false
		end

		if fn14(v3.Trailwear.AskChoose, v5.bestOwn) ~= false then
			tbl20.note = ("wearing %s, x%s"):format(v5.bestOwn, tostring(v5.bestOwnMult))
			return true
		end
		return false
	end,
	buyBest = function()
		local v5 = tbl20.pick()
		if not v5 then
			tbl20.note = "trail catalogue not loaded"
			return false
		end

		if not v5.buy then
			local v6 = tostring
			local wornMult = v5.wornMult
			tbl20.note = ("nothing to claim de mua, dang deo %s x%s"):format(tostring(v5.worn), v6(wornMult))
			tbl20.wearBest()
			return false
		end

		local v6, v7 = fn14(v3.Trailwear.AskPurchase, v5.buy)
		if v6 ~= true then
			tbl20.note = ("buying %s failed: %s"):format(v5.buy, tostring(v7 or v6))
			return false
		end
		tbl20.bought = tbl20.bought + 1
		local buyCost = v5.buyCost
		tbl20.note = ("bought %s x%s for %s"):format(v5.buy, tostring(v5.buyMult), fn4(buyCost))
		task.wait(0.05)
		tbl20.wearBest()
		return true
	end,
	text = function()
		local v5 = tbl20.pick()
		if not v5 then
			return "trail data not loaded"
		end
		local tbl21 = {}
		local str2 = "worn: %s  ->  x%s treadmill gain"
		local format = str2.format
		local v6 = tostring
		local worn = v5.worn or "none"

		do
			local values = table.pack(format(str2, v6(worn), tostring(v5.wornMult)))
			table.move(values, 1, values.n, 1, tbl21)
		end

		if v5.bestOwn ~= v5.worn then
			local n2 = #tbl21 + 1
			local v7 = tostring
			local bestOwnMult = v5.bestOwnMult
			tbl21[n2]
