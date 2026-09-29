local function fn()
	if not game:IsLoaded() then
		game.Loaded:Wait()
	end

	local function fn2()
		local TweenService = game:GetService("TweenService")
		local n = 0
		local str = "Noctelis/key.txt"

		local tbl = {
			interfaceName = "Night Hub",
			titleText = "Night Hub",
			hintText = "Enter your key to continue",
			keyInputLabelText = "License key",
			submitButtonText = "Submit Key",
			getKeyButtonText = "GET KEY",
			getKeyUrl = "https://103.69.96.168/key?ver=NightHub",
			loadingStageMessages = {
				"Authorising session",
				"Fetching components",
				"Building interface",
				"Restoring settings",
				"Finishing up",
			},
			maximumKeyLength = 44,
			savedKeyFilePath = "NightHub/key.txt",
			savedKeyCheckMessage = "Checking saved key",
			savedKeyCheckTimeoutSeconds = 15,
			validateLicenseKey = nil,
			onLicenseKeyAccepted = nil,
		}

		local function fn3(arg, arg2, arg3)
			return Color3.fromRGB(arg, arg2, arg3)
		end

		local v = fn3(24, 24, 26)
		local v2 = fn3(18, 18, 20)
		local v3 = fn3(237, 237, 235)
		local v4 = fn3(150, 150, 146)
		local v5 = fn3(143, 143, 139)
		local v6 = fn3(111, 140, 208)
		local v7 = fn3(214, 90, 74)
		local v8 = fn3(122, 190, 128)
		local v9 = fn3(128, 156, 220)
		local v10 = fn3(92, 117, 175)
		local v11 = fn3(58, 122, 68)
		local v12 = v6
		local v13 = fn3(255, 255, 255)
		local v14 = fn3(240, 246, 240)
		local n2 = 444
		local n3 = 354
		local n4 = 320
		local n5 = 88
		local n6 = 4
		local tweenInfo = TweenInfo.new(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
		local regular = Enum.FontWeight.Regular
		local bold = Enum.FontWeight.Bold

		local function fn4(arg)
			return Font.new("rbxasset://fonts/families/RobotoMono.json", arg or regular)
		end

		local function fn5(arg, arg2, parent)
			local instance = Instance.new(arg)

			for k, v15 in pairs(arg2) do
				instance[k] = v15
			end

			instance.Parent = parent
			return instance
		end

		local function fn6(arg, arg2, arg3)
			return fn5("UICorner", { Name = arg2, CornerRadius = UDim.new(0, arg) }, arg3)
		end

		local function fn7(arg, arg2)
			return fn5("UIStroke", {
				Name = arg,
				Color = fn3(255, 255, 255),
				Transparency = 0.65,
				Thickness = 1,
				ApplyStrokeMode = Enum.ApplyStrokeMode.Border,
				LineJoinMode = Enum.LineJoinMode.Round,
			}, arg2)
		end

		local function fn8(arg, arg2, arg3, arg4, arg5, arg6, arg7)
			return fn5("TextLabel", {
				Name = arg,
				Size = UDim2.new(0, arg6, 0, math.floor(arg3 * 1.2 + 0.5)),
				Position = arg5,
				BackgroundTransparency = 1,
				Text = arg2,
				TextColor3 = arg4,
				TextSize = arg3,
				FontFace = fn4(),
				TextXAlignment = Enum.TextXAlignment.Left,
			}, arg7)
		end

		local function fn9()
			local hui = gethui and gethui() or game:GetService("CoreGui")
			if syn and syn.protect_gui then
				return hui, syn.protect_gui
			end
			return hui, protect_gui
		end

		local function fn10(arg)
			return (arg:gsub("^%s+", ""):gsub("%s+$", ""))
		end

		local function fn11(arg)
			local v15 = setclipboard or toclipboard
			if type(v15) ~= "function" then
				return false
			end
			return pcall(v15, arg)
		end

		local function fn12(arg)
			local match = tbl.savedKeyFilePath:match("^(.*)[/]")

			if match and isfolder and makefolder and not isfolder(match) then
				pcall(makefolder, match)
			end

			pcall(writefile, tbl.savedKeyFilePath, arg)
		end

		tbl.deleteSavedLicenseKey = function()
			if isfile and isfile(tbl.savedKeyFilePath) then
				pcall(delfile, tbl.savedKeyFilePath)
			end

			if isfile and isfile("Noctelis/key.txt") then
				pcall(delfile, "Noctelis/key.txt")
			end
		end

		local function fn13()
			if not (isfile and readfile) then
				return
			end
			local savedKeyFilePath = isfile(tbl.savedKeyFilePath) and tbl.savedKeyFilePath or isfile("Noctelis/key.txt") and "Noctelis/key.txt"
			if not savedKeyFilePath then
				return
			end
			local ok, result = pcall(readfile, savedKeyFilePath)
			if not ok or type(result) ~= "string" then
				return
			end

			if savedKeyFilePath == str then
				fn12(result)
			end

			local v15 = fn10(result)
			local flag = v15 ~= "" and utf8.len(v15)
			if not flag or flag > tbl.maximumKeyLength then
				return
			end
			return v15
		end

		tbl.destroyInterface = function()
			n += 1
			local v15 = fn9():FindFirstChild(tbl.interfaceName)

			if v15 then
				v15:Destroy()
			end
		end

		tbl.showInterface = function(arg, arg2)
			tbl.destroyInterface()
			local v15 = n
			local v16 = fn13()
			local flag = arg ~= nil and type(arg) ~= "string"
			local flag2 = type(arg) == "string" and fn10(arg) or nil

			if flag2 == "" then
				flag2 = nil
			end

			local flag3 = not flag and (flag2 or v16) or nil
			local v17, v18 = fn9()

			local ScreenGui = fn5("ScreenGui", {
				Name = tbl.interfaceName,
				DisplayOrder = 10,
				IgnoreGuiInset = true,
				ResetOnSpawn = false,
				ZIndexBehavior = Enum.ZIndexBehavior.Sibling,
			}, v17)

			if v18 then
				pcall(v18, ScreenGui)
			end

			local Frame = fn5("Frame", {
				Name = "Scrim",
				Size = UDim2.fromScale(1, 1),
				BackgroundColor3 = fn3(0, 0, 0),
				BackgroundTransparency = 1,
				BorderSizePixel = 0,
				Active = true,
				ZIndex = 1,
			}, ScreenGui)

			local CanvasGroup = fn5("CanvasGroup", {
				Name = "Root",
				Size = UDim2.fromOffset(n2 + n6 * 4, n3 + n6 * 4),
				Position = UDim2.new(0.5, 0, 0.5, 0),
				AnchorPoint = Vector2.new(0.5, 0.5),
				BackgroundTransparency = 1,
				GroupTransparency = 1,
				ZIndex = 2,
			}, ScreenGui)

			for i = 4, 1, -1 do
				local n7 = i * 2

				local Frame2 = fn5("Frame", {
					Name = ("Aura%*"):format(i),
					Size = UDim2.new(1, n7 * 2 - n6 * 4 - 4, 1, n7 * 2 - n6 * 4 - 4),
					Position = UDim2.fromScale(0.5, 0.5),
					AnchorPoint = Vector2.new(0.5, 0.5),
					BackgroundColor3 = v6,
					BackgroundTransparency = 0.83,
					BorderSizePixel = 0,
				}, CanvasGroup)

				fn6(12 + n7, "AuraCorner", Frame2)
			end

			local Frame2 = fn5("Frame", {
				Name = "Panel",
				Size = UDim2.new(1, -n6 * 4 - 4, 1, -n6 * 4 - 4),
				Position = UDim2.fromScale(0.5, 0.5),
				AnchorPoint = Vector2.new(0.5, 0.5),
				BackgroundColor3 = v,
				BorderSizePixel = 0,
			}, CanvasGroup)

			fn6(12, "PanelCorner", Frame2)
			fn7("PanelStroke", Frame2)
			local CanvasGroup2 = fn5("CanvasGroup", { Name = "Body", Size = UDim2.fromScale(1, 1), BackgroundTransparency = 1 }, Frame2)
			fn8("Title", tbl.titleText, 20, v3, UDim2.new(0, 22, 0, 22), 340, CanvasGroup2).FontFace = fn4(bold)
			fn8("Hint", tbl.hintText, 13, v4, UDim2.new(0, 22, 0, 52), 340, CanvasGroup2)

			local TextButton = fn5("TextButton", {
				Name = "Close",
				Size = UDim2.new(0, 32, 0, 32),
				Position = UDim2.new(1, -12, 0, 18),
				AnchorPoint = Vector2.new(1, 0),
				BackgroundTransparency = 1,
				Text = "",
				FontFace = fn4(),
				AutoButtonColor = false,
			}, CanvasGroup2)

			local tbl2 = {}

			for i, v19 in ipairs({ 45, -45 }) do
				tbl2[i] = fn5("Frame", {
					Name = ("Bar%*"):format(i),
					Size = UDim2.new(0, 13, 0, 1),
					Position = UDim2.fromScale(0.5, 0.5),
					AnchorPoint = Vector2.new(0.5, 0.5),
					BackgroundColor3 = v5,
					Rotation = v19,
					BorderSizePixel = 0,
				}, TextButton)
			end

			fn5("Frame", {
				Name = "Divider",
				Size = UDim2.new(1, -44, 0, 1),
				Position = UDim2.new(0, 22, 0, 88),
				BackgroundColor3 = fn3(255, 255, 255),
				BackgroundTransparency = 0.86,
				BorderSizePixel = 0,
			}, CanvasGroup2)

			fn8("Label", tbl.keyInputLabelText, 13, v4, UDim2.new(0, 22, 0, 108), 220, CanvasGroup2)

			local Frame3 = fn5("Frame", {
				Name = "Field",
				Size = UDim2.new(1, -44, 0, 50),
				Position = UDim2.new(0, 22, 0, 130),
				BackgroundColor3 = v2,
				BorderSizePixel = 0,
			}, CanvasGroup2)

			fn6(8, "FieldCorner", Frame3)
			local FieldStroke = fn7("FieldStroke", Frame3)

			local TextBox = fn5("TextBox", {
				Name = "Box",
				Size = UDim2.new(1, -32, 1, 0),
				Position = UDim2.new(0, 16, 0, 0),
				BackgroundTransparency = 1,
				Text = "",
				PlaceholderText = "Paste your key here",
				PlaceholderColor3 = v5,
				TextColor3 = v3,
				TextSize = 16,
				FontFace = fn4(),
				TextXAlignment = Enum.TextXAlignment.Left,
				ClearTextOnFocus = false,
				MultiLine = false,
			}, Frame3)

			local Err = fn8("Err", "", 13, v7, UDim2.new(0, 22, 0, 192), 400, CanvasGroup2)

			local TextButton2 = fn5("TextButton", {
				Name = "Submit",
				Size = UDim2.new(1, -44, 0, 50),
				Position = UDim2.new(0, 22, 0, 218),
				BackgroundColor3 = v12,
				Text = "",
				FontFace = fn4(),
				AutoButtonColor = false,
				BorderSizePixel = 0,
			}, CanvasGroup2)

			fn6(8, "SubmitCorner", TextButton2)

			local TextLabel = fn5("TextLabel", {
				Name = "SubmitTitle",
				Size = UDim2.fromScale(1, 1),
				BackgroundTransparency = 1,
				Text = tbl.submitButtonText,
				TextColor3 = v13,
				TextSize = 18,
				FontFace = fn4(),
			}, TextButton2)

			local TextButton3 = fn5("TextButton", {
				Name = "GetKey",
				Size = UDim2.new(1, -44, 0, 50),
				Position = UDim2.new(0, 22, 0, 278),
				BackgroundColor3 = v12,
				Text = "",
				FontFace = fn4(),
				AutoButtonColor = false,
				BorderSizePixel = 0,
			}, CanvasGroup2)

			fn6(8, "GetKeyCorner", TextButton3)

			fn5("TextLabel", {
				Name = "GetKeyTitle",
				Size = UDim2.fromScale(1, 1),
				BackgroundTransparency = 1,
				Text = tbl.getKeyButtonText,
				TextColor3 = v13,
				TextSize = 18,
				FontFace = fn4(),
			}, TextButton3)

			local CanvasGroup3 = fn5("CanvasGroup", {
				Name = "Load",
				Size = UDim2.fromScale(1, 1),
				BackgroundTransparency = 1,
				GroupTransparency = 1,
				Visible = false,
			}, Frame2)

			local Step = fn8("Step", "", 14, v3, UDim2.new(0, 22, 0, 28), 190, CanvasGroup3)
			local Pct = fn8("Pct", "0%", 13, v4, UDim2.new(1, -22, 0, 29), 60, CanvasGroup3)
			Pct.AnchorPoint = Vector2.new(1, 0)
			Pct.TextXAlignment = Enum.TextXAlignment.Right

			local Frame4 = fn5("Frame", {
				Name = "Track",
				Size = UDim2.new(1, -44, 0, 2),
				Position = UDim2.new(0, 22, 0, 60),
				BackgroundColor3 = fn3(255, 255, 255),
				BackgroundTransparency = 0.88,
				BorderSizePixel = 0,
			}, CanvasGroup3)

			local Frame5 = fn5("Frame", { Name = "Fill", Size = UDim2.fromScale(0, 1), BackgroundColor3 = v6, BorderSizePixel = 0 }, Frame4)
			local tweenInfo2 = TweenInfo.new(0.18, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
			local tweenInfo3 = TweenInfo.new(0.12, Enum.EasingStyle.Quad, Enum.EasingDirection.In)
			local tweenInfo4 = TweenInfo.new(0.3, Enum.EasingStyle.Quint, Enum.EasingDirection.Out)

			if flag3 then
				CanvasGroup.Size = UDim2.fromOffset(n4 + n6 * 4, n5 + n6 * 4)
				CanvasGroup2.Visible = false
				CanvasGroup2.GroupTransparency = 1
				CanvasGroup3.Visible = true
				CanvasGroup3.GroupTransparency = 0
			end

			TweenService:Create(Frame, tweenInfo, { BackgroundTransparency = 0.45 }):Play()
			TweenService:Create(CanvasGroup, tweenInfo2, { GroupTransparency = 0 }):Play()

			local function fn14(arg3, arg4)
				TweenService:Create(arg3, tweenInfo, arg4):Play()
			end

			local flag4 = nil
			local flag5 = nil
			local text = nil

			local function fn15()
				return not flag5 and v15 == n and ScreenGui.Parent ~= nil
			end

			local function fn16()
				if not fn15() then
					return
				end
				flag5 = true
				n += 1

				if not tbl.accepted and type(tbl.onInterfaceClosed) == "function" then
					task.spawn(tbl.onInterfaceClosed)
				end

				TweenService:Create(Frame, tweenInfo3, { BackgroundTransparency = 1 }):Play()
				TweenService:Create(CanvasGroup, tweenInfo3, { GroupTransparency = 1 }):Play()
				task.delay(0.05, ScreenGui.Destroy, ScreenGui)
			end

			local function fn17(arg3, arg4)
				fn14(FieldStroke, { Color = arg3, Transparency = arg4, Thickness = arg4 < 0.3 and 2 or 1 })
			end

			local function fn18(text2)
				if not fn15() then
					return
				end
				local v19 = Err
				local v20 = v7
				local text3 = TextBox.Text
				Err.Text = text2
				v19.TextColor3 = v20
				text = text3
				fn17(v7, 0)
			end

			local function fn19()
				if Err.Text == "" or TextBox.Text == text then
					return
				end
				Err.Text = ""
				if TextBox:IsFocused() then
					return fn17(v6, 0)
				end
				fn17(fn3(255, 255, 255), 0.65)
			end

			local function fn20(text2)
				Step.TextTransparency = 1
				Step.Text = text2
				TweenService:Create(Step, tweenInfo2, { TextTransparency = 0 }):Play()
			end

			local function fn21(arg3, arg4, arg5)
				local now = os.clock()

				while true do
					if not fn15() then
						return
					else
						local n7 = math.min((os.clock() - now) / arg5, 1)
						local n8 = arg3 + (arg4 - arg3) * (1 - (1 - n7) ^ 2)
						Frame5.Size = UDim2.fromScale(n8, 1)
						Pct.Text = math.floor(n8 * 100) .. "%"
						if n7 >= 1 then
							break
						end
						task.wait(0.05)
					end
				end
			end

			local function fn22(arg3)
				local n7 = #tbl.loadingStageMessages
				local n8 = 1 - arg3

				for i, loadingStageMessage in ipairs(tbl.loadingStageMessages) do
					if not fn15() then
						return
					end
					fn20(loadingStageMessage)
					fn21(arg3 + n8 * (i - 1) / n7, arg3 + n8 * i / n7, 0.55)
				end
			end

			local function fn23(arg3, arg4)
				tbl.accepted = true
				task.wait(0.05)
				if not fn15() then
					return
				end
				fn16()
				local v19 = n
				task.wait(0.05)

				if v19 == n and tbl.onLicenseKeyAccepted then
					task.spawn(tbl.onLicenseKeyAccepted, arg3, arg4)
				end
			end

			local function fn24()
				CanvasGroup3.Visible = true
				TweenService:Create(CanvasGroup2, tweenInfo3, { GroupTransparency = 1 }):Play()
				TweenService:Create(CanvasGroup, tweenInfo4, { Size = UDim2.fromOffset(n4 + n6 * 4, n5 + n6 * 4) }):Play()
				task.wait(0.05)
				if not fn15() then
					return
				end
				CanvasGroup2.Visible = false
				task.wait(0.05)
				if not fn15() then
					return
				end
				TweenService:Create(CanvasGroup3, tweenInfo2, { GroupTransparency = 0 }):Play()
			end

			local function fn25(arg3, arg4, arg5)
				if not fn15() then
					return
				end

				if type(arg4) == "table" and arg4.shouldForgetSavedKey == true and fn13() == arg5 then
					tbl.deleteSavedLicenseKey()
				end

				CanvasGroup2.Visible = true
				TweenService:Create(CanvasGroup3, tweenInfo3, { GroupTransparency = 1 }):Play()
				TweenService:Create(CanvasGroup, tweenInfo4, { Size = UDim2.fromOffset(n2 + n6 * 4, n3 + n6 * 4) }):Play()
				task.wait(0.05)
				if not fn15() then
					return
				end
				CanvasGroup3.Visible = false
				TweenService:Create(CanvasGroup2, tweenInfo2, { GroupTransparency = 0 }):Play()
				fn18(arg3)
			end

			local function fn26(arg3, arg4)
				if type(arg3) == "table" and type(arg3.message) == "string" and arg3.message ~= "" then
					return arg3.message
				end
				return arg4
			end

			local function fn27(arg3)
				local flag6 = false
				local v19 = nil
				local v20 = nil
				local v21 = nil

				local thread = task.spawn(function()
					local ok, result, result2 = pcall(tbl.validateLicenseKey, arg3)
					v19 = ok
					v20 = result
					v21 = result2
					flag6 = true
				end)

				local now = os.clock()
				local n7 = math.clamp(tonumber(tbl.savedKeyCheckTimeoutSeconds) or 15, 1, 60)

				while not flag6 and fn15() and os.clock() - now < n7 do
					task.wait(0.05)
				end

				if not flag6 then
					pcall(task.cancel, thread)
					return false, false, { message = "Key check timed out, try again", shouldForgetSavedKey = false }
				end
				return v19, v20 == true, v21
			end

			local function fn28()
				if flag4 or not fn15() then
					return
				end
				local v19 = fn10(TextBox.Text)
				if v19 == "" then
					return fn18("Enter your key first")
				end

				if type(tbl.validateLicenseKey) ~= "function" then
					return fn18("No verifier attached")
				end
				local v20 = TextLabel
				flag4 = true
				v20.Text = "Checking..."
				fn14(TextButton2, { BackgroundColor3 = v10 })
				local v21, v22, v23 = fn27(v19)
				if not fn15() then
					return
				end
				flag4 = false

				if not v21 then
					TextLabel.Text = tbl.submitButtonText
					fn14(TextButton2, { BackgroundColor3 = v12 })
					return fn18(fn26(v23, "Check failed, try again"))
				end

				if not v22 then
					TextLabel.Text = tbl.submitButtonText
					fn14(TextButton2, { BackgroundColor3 = v12 })

					if type(v23) == "table" and v23.shouldForgetSavedKey == true and fn13() == v19 then
						tbl.deleteSavedLicenseKey()
					end

					return fn18(fn26(v23, "Key not valid, check it and retry"))
				end

				local v24 = TextLabel
				flag4 = true
				v24.Text = "Verified"
				TextBox:ReleaseFocus()
				fn14(TextButton2, { BackgroundColor3 = v11 })
				fn14(TextLabel, { TextColor3 = v14 })
				fn17(v8, 0)
				fn12(v19)
				task.wait(0.05)
				if not fn15() then
					return
				end
				fn24()
				fn22(0)
				fn23(v19, v23)
			end

			local function fn29(arg3)
				if type(tbl.validateLicenseKey) ~= "function" then
					return fn25("No verifier attached")
				end
				local n7 = #tbl.loadingStageMessages + 1
				fn20(flag2 and "Checking configured key" or tbl.savedKeyCheckMessage)
				fn21(0, 1 / n7, 0.5)
				if not fn15() then
					return
				end
				local v19, v20, v21 = fn27(arg3)
				if not fn15() then
					return
				end

				if not v19 then
					return fn25(fn26(v21, flag2 and "Configured key check failed" or "Saved key check failed"))
				end

				if not v20 then
					return fn25(fn26(v21, flag2 and "Configured key not valid" or "Saved key no longer valid"), v21, arg3)
				end

				if flag2 then
					if type(v21) ~= "table" or v21.valid ~= true then
						return fn25("Configured key is not valid")
					end
					fn12(arg3)
				end

				fn22(1 / n7)
				fn23(arg3, v21)
			end

			TextBox:GetPropertyChangedSignal("Text"):Connect(function()
				local v19 = utf8.len(TextBox.Text)
				if v19 and v19 > tbl.maximumKeyLength then
					TextBox.Text = TextBox.Text:sub(1, utf8.offset(TextBox.Text, tbl.maximumKeyLength + 1) - 1)
					return
				end
				fn19()
			end)

			TextBox.Focused:Connect(function()
				if Err.Text == "" then
					fn17(v6, 0)
				end
			end)

			TextBox.FocusLost:Connect(function(enterPressed)
				if Err.Text == "" then
					fn17(fn3(255, 255, 255), 0.65)
				end

				if enterPressed then
					fn28()
				end
			end)

			TextButton2.MouseEnter:Connect(function()
				if not flag4 then
					fn14(TextButton2, { BackgroundColor3 = v9 })
				end
			end)

			TextButton2.MouseLeave:Connect(function()
				if not flag4 then
					fn14(TextButton2, { BackgroundColor3 = v12 })
				end
			end)

			TextButton2.MouseButton1Down:Connect(function()
				if not flag4 then
					fn14(TextButton2, { BackgroundColor3 = v10 })
				end
			end)

			TextButton2.MouseButton1Click:Connect(fn28)

			TextButton3.MouseEnter:Connect(function()
				fn14(TextButton3, { BackgroundColor3 = v9 })
			end)

			TextButton3.MouseLeave:Connect(function()
				fn14(TextButton3, { BackgroundColor3 = v12 })
			end)

			TextButton3.MouseButton1Down:Connect(function()
				fn14(TextButton3, { BackgroundColor3 = v10 })
			end)

			TextButton3.MouseButton1Click:Connect(function()
				local v19 = fn11(tbl.getKeyUrl)
				Err.Text = v19 and "Get Key link copied" or tbl.getKeyUrl
				Err.TextColor3 = v19 and v8 or v4
				text = TextBox.Text
				fn14(TextButton3, { BackgroundColor3 = v9 })
			end)

			local text2 = "Click the cross again to close"
			local flag6 = false
			local flag7 = false

			local function fn30()
				local v19 = flag7 and v7 or flag6 and v3 or v5

				for _, v20 in ipairs(tbl2) do
					fn14(v20, { BackgroundColor3 = v19 })
				end
			end

			TextButton.MouseEnter:Connect(function()
				flag6 = true
				fn30()
			end)

			TextButton.MouseLeave:Connect(function()
				flag6 = false
				fn30()
			end)

			TextButton.MouseButton1Click:Connect(function()
				if flag7 then
					return fn16()
				end
				flag7 = true
				local v19 = Err
				local v20 = v4
				local text3 = TextBox.Text
				Err.Text = text2
				v19.TextColor3 = v20
				text = text3
				fn30()

				task.delay(0.05, function()
					if flag5 then
						return
					end
					flag7 = false

					if Err.Text == text2 then
						Err.Text = ""
					end

					fn30()
				end)
			end)

			if flag then
				fn18("Configured key must be a string")
			elseif flag3 then
				task.spawn(fn29, flag3)
			elseif type(arg2) == "string" and arg2 ~= "" then
				fn18(arg2)
			end

			return ScreenGui, TextBox
		end

		return tbl
	end

	local HttpService = game:GetService("HttpService")
	local genv = type(getgenv) == "function" and getgenv() or _G
	local v = request or http_request
	local request_

	if v then
		request_ = v
	else
		request_ = syn and syn.request
	end

	local hash = crypt and crypt.hash
	local hmac = crypt and crypt.hmac
	local str = "https://103.69.96.168"
	local v2 = fn2()

	local function fn3(arg, arg2, arg3)
		return false, { valid = false, code = arg, message = arg2, shouldForgetSavedKey = arg3 == true }
	end

	local function fn4(arg, arg2)
		return type(arg) == "string" and #arg == arg2 and not arg:find("[^a-f0-9]")
	end

	local function fn5(arg)
		return type(arg) == "number" and arg == arg and arg > 0 and arg < math.huge and arg % 1 == 0
	end

	local function fn6(arg, arg2)
		if type(arg) ~= "table" then
			return nil
		end
		local str2 = arg2:lower()

		for k, v3 in pairs(arg) do
			if type(k) == "string" and k:lower() == str2 and type(v3) == "string" then
				return v3
			end
		end
	end

	local function fn7(arg, arg2)
		local ok, result = pcall(request_, {
			Url = str .. "/auth",
			Method = "POST",
			Headers = { ["Content-Type"] = "application/json", Accept = "application/json, text/plain" },
			Body = HttpService:JSONEncode(arg),
			Timeout = 15,
		})

		if not ok or type(result) ~= "table" then
			return nil, "Cannot reach the license server"
		end
		local flag = type(result.Body) ~= "string" or #result.Body < 1

		if not flag then
			flag = #result.Body > (arg2 or 8192)
		end

		if flag then
			return nil, "Invalid response from the license server"
		end
		return result
	end

	local function validateLicenseKey(arg)
		local flag = type(arg) ~= "string"

		if not flag then
			flag = not (#arg == 32 and arg:match("^[A-Za-z0-9]+$") or #arg == 44 and arg:match("^NightHubPro%-[A-Za-z0-9]+$") or #arg == 21 and arg:match("^NightHub_[A-Za-z0-9]+$"))
		end

		if flag then
			return fn3("INVALID_KEY_FORMAT", "Enter a valid Night Hub key")
		end

		if type(request_) ~= "function" then
			return fn3("HTTP_UNAVAILABLE", "HTTP request is unavailable")
		end

		if type(gethwid) ~= "function" then
			return fn3("HWID_UNAVAILABLE", "Cannot read this device's hardware identifier")
		end

		if type(hash) ~= "function" or type(hmac) ~= "function" then
			return fn3("CRYPTO_UNAVAILABLE", "SHA-256 or HMAC is unavailable")
		end
		local ok, result = pcall(gethwid)
		if not ok or type(result) ~= "string" or #result < 1 or #result > 256 or result:find("%c") then
			return fn3("HWID_UNAVAILABLE", "Cannot read this device's hardware identifier")
		end
		local str2 = HttpService:GenerateGUID(false):gsub("%-", ""):lower()
		local v3, v4 = fn7({ step = "init", licenseKey = arg, hardwareIdentifier = result, clientNonce = str2 }, 8192)
		if not v3 then
			return fn3("VALIDATION_UNAVAILABLE", v4)
		end
		local ok2, result2 = pcall(HttpService.JSONDecode, HttpService, v3.Body)
		if not ok2 or type(result2) ~= "table" then
			return fn3("INVALID_SERVER_RESPONSE", "Invalid response from the license server")
		end

		if result2.valid == false then
			local message = type(result2.message) == "string" and result2.message or "Key rejected"
			return fn3(type(result2.code) == "string" and result2.code or "KEY_REJECTED", message, result2.shouldForgetSavedKey)
		end

		if result2.valid ~= true or not fn4(result2.sessionIdentifier, 32) or not fn4(result2.accessToken, 64) or not fn4(result2.challenge, 64) or result2.clientNonce ~= str2 or not fn5(result2.sessionExpiresAt) or not fn5(result2.serverTime) or result2.sessionExpiresAt <= result2.serverTime or result2.sessionExpiresAt - result2.serverTime > 120 then
			return fn3("INVALID_SERVER_RESPONSE", "Invalid response from the license server")
		end

		if result2.version ~= "Free" and result2.version ~= "NightHub" and result2.version ~= "Noctelis" then
			return fn3("INVALID_SERVER_RESPONSE", "Invalid response from the license server")
		end

		if result2.subscriptionTier ~= "Free" and result2.subscriptionTier ~= "Pro" then
			return fn3("INVALID_SERVER_RESPONSE", "Invalid response from the license server")
		end

		if result2.expiresAt ~= nil and (not fn5(result2.expiresAt) or result2.expiresAt <= result2.serverTime) then
			return fn3("KEY_EXPIRED", "This key has expired", true)
		end

		local v5, v6 = fn7({
			step = "start",
			sessionIdentifier = result2.sessionIdentifier,
			accessToken = result2.accessToken,
			challenge = result2.challenge,
			clientNonce = str2,
			hardwareIdentifier = result,
		}, 8388608)

		if not v5 then
			return fn3("VALIDATION_UNAVAILABLE", v6)
		end

		if v5.StatusCode ~= 200 then
			return fn3("AUTH_START_FAILED", "Protected authorization failed")
		end
		local ok3, result3 = pcall(hash, v5.Body, "sha256")
		if not ok3 or not fn4(result3, 64) then
			return fn3("CRYPTO_UNAVAILABLE", "Payload integrity check failed")
		end
		local v7 = fn6(v5.Headers, "x-night-hub-session")
		local v8 = fn6(v5.Headers, "x-night-hub-digest")
		local v9 = fn6(v5.Headers, "x-night-hub-watermark")
		local v10 = fn6(v5.Headers, "x-night-hub-proof")
		if not fn4(v7, 32) or not fn4(v9, 32) or v8 ~= result3 or type(v10) ~= "string" then
			return fn3("INVALID_SERVER_RESPONSE", "Protected authorization signature is invalid")
		end
		local ok4, result4 = pcall(hmac, result2.challenge, table.concat({ v7, result3, v9 }, ":"), "sha256")
		if not ok4 or v10 ~= result4 then
			return fn3("INVALID_SERVER_RESPONSE", "Protected authorization signature is invalid")
		end

		return true, {
			valid = true,
			version = result2.version == "Noctelis" and "NightHub" or result2.version,
			subscriptionTier = result2.subscriptionTier,
			expiresAt = result2.expiresAt,
			serverTime = result2.serverTime,
		}
	end

	local nightHubAuthRewrite = {
		Valid = false,
		Details = nil,
		Finished = false,
		Stop = function()
			v2.destroyInterface()
		end,
	}

	v2.validateLicenseKey = validateLicenseKey

	v2.onLicenseKeyAccepted = function(arg, details)
		if nightHubAuthRewrite.Valid then
			return
		end
		nightHubAuthRewrite.Valid = true
		nightHubAuthRewrite.Details = details
		nightHubAuthRewrite.Finished = true
	end

	v2.onInterfaceClosed = function()
		nightHubAuthRewrite.Finished = true
	end

	genv.NightHubAuthRewrite = nightHubAuthRewrite
	local value = rawget(genv, "Key")
	v2.showInterface(type(value) == "string" and value or nil)
	return nightHubAuthRewrite
end

local v = fn()

if type(v) ~= "table" then
	return
end

while not v.Finished do
	task.wait(0.05)
end

if not v.Valid then
	return
end

print("Auth Success! Waiting load script...")

pcall(function()
	game:GetService("StarterGui"):SetCore("SendNotification", { Title = "Night Hub", Text = "Auth Success! Waiting load script...", Duration = 5 })
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
			tbl21[n2] = ("owned but not worn: %s x%s"):format(tostring(v5.bestOwn), v7(bestOwnMult))
		end

		if v5.buy then
			local n2 = #tbl21 + 1
			local buyCost = v5.buyCost
			tbl21[n2] = ("can buy now: %s x%s for %s"):format(v5.buy, tostring(v5.buyMult), fn4(buyCost))
		else
			tbl21[#tbl21 + 1] = "nothing else is affordable right now"
		end

		tbl21[#tbl21 + 1] = "a trail only adds to treadmill gain, it does not change WalkSpeed"

		if tbl20.note ~= "-" then
			tbl21[#tbl21 + 1] = tbl20.note
		end

		return table.concat(tbl21, "\n")
	end,
}

local tbl21 = { hits = 0, broke = 0, crystals = 0, deposits = 0, note = "waiting for the bloom" }
local treeTag = Sakura and Sakura.TreeTag or "SakuraBloomTree"
local crystalTag = Sakura and Sakura.CrystalTag or "SakuraCrystal"
local bloom = Sakura and Sakura.Bloom or {}

local function fn31(arg)
	if not (arg and arg.Parent) then
		return nil
	end

	if arg:IsA("BasePart") then
		return arg.Position
	end

	local ok, result = pcall(function()
		return arg:GetPivot()
	end)

	if ok and result then
		return result.Position
	end
	local basePart = arg:FindFirstChildWhichIsA("BasePart", true)
	return basePart and basePart.Position or nil
end

local function fn32(arg)
	local tbl22 = {}

	for _, v5 in ipairs(CollectionService:GetTagged(arg)) do
		if v5.Parent then
			tbl22[#tbl22 + 1] = v5
		end
	end

	return tbl22
end

tbl21.endsAt = function()return tonumber( v2 :GetAttribute( bloom .EndsAtAttribute or"GreatBloomEndsAt"));end
tbl21.left = function()local I= tbl21 .endsAt();if not I then return nil;end;return math.max(0,I- v2 :GetServerTimeNow());end
tbl21.nextIn = function()local I= bloom .IntervalSeconds or 1800;local g= bloom .OffsetSeconds or 900;local B= v2 :GetServerTimeNow();return math.max(0,B+I-(B+g)%I-B);end
tbl21.on = function(...) end
tbl21.bat = function()local function I(g)return g:GetAttribute("IsBat")==true;end;local g=nil;local B=nil;for o,o in ipairs( tbl6 .gearTools(I))do if o.Parent== localPlayer .Character then g=g or o;else B=B or o;end;end;return g,B;end
tbl21.holdBat = function()local I,g= tbl21 .bat();if I then return I;end;if not g then return nil;end;return  tbl6 .holdTool(g)and g or nil;end
tbl21.spent = function(S)return(tonumber(S:GetAttribute("Hits"))or 0)>=(tonumber(S:GetAttribute("HitsRequired"))or 1);end
tbl21.reach = function(I)return( bloom .HitRange or 10)+(tonumber(I:GetAttribute("Radius"))or 0);end
tbl21.swing = function(...) end
tbl21.vacuum = function(...) end
tbl21.nearestTree = function(...) end
tbl21.deposit = function(...) end
tbl21.mutate = function(...) end
tbl21.step = function(...) end

tbl21.text = function()
	local v5 = tbl21.left()
	local str2

	if v5 and v5 > 0 then
		str2 = ("BLOOM IS LIVE, %s"):format(fn5(v5))
	elseif #fn32(treeTag) > 0 then
		str2 = "BLOOM IS LIVE"
	else
		local format = ("no bloom right now, next one in %s").format
		local v6 = table.pack(fn5(tbl21.nextIn()))
		v6.n = 2 + v6.n - 1
		table.move(v6, 1, v6.n, 2, v6)
		v6[1] = "no bloom right now, next one in %s"
		str2 = format(table.unpack(v6, 1, v6.n))
	end

	local v6, v7 = tbl21.bat()
	local v8 = tbl6.save()
	local concat = table.concat
	local tbl22 = {}
	local str3 = ("trees %d | crystals on the ground %d | crystals held %s"):format(#fn32(treeTag), #fn32(crystalTag), fn4(tonumber(v8 and v8.SakuraCrystals) or 0))
	local str4 = ("bat: %s"):format(v6 and "holding " .. v6.Name or v7 and "in backpack: " .. v7.Name or "none")
	local str5 = ("hits %d | crystals %d | deposits %d"):format(tbl21.hits, tbl21.crystals, tbl21.deposits)
	local note = tbl21.note
	tbl22[1] = str2
	tbl22[2] = str3
	tbl22[3] = str4
	tbl22[4] = str5
	tbl22[5] = note
	return concat(tbl22, "\n")
end

local tbl22 = { feeds = 0, chests = 0, note = "-" }
local tbl23 = MonsterParasite or {}
tbl22.snap = function(...) end
tbl22.mine = function()local I= v2 :FindFirstChild( tbl23 .WorldFolderName or"MonsterParasiteMonsters");if not I then return nil;end;for g,g in ipairs(I:GetChildren())do if g:GetAttribute("OwnerUserId")== localPlayer .UserId then return g;end;end;end
tbl22.infested = function()local I={};for g,g in ipairs( tbl11 .bag())do if g.parasite then I[#I+1]=g;end;end;return I;end
tbl22.chestTool = function()local I=ipairs;local g={ localPlayer .Character, localPlayer :FindFirstChildOfClass("Backpack")};for B,B in I(g)do if B then for I,I in ipairs(B:GetChildren())do if I:IsA("Tool")and I:GetAttribute("ItemType")==( tbl23 .ChestToolItemType or"MonsterChest")then return I,I.Parent== localPlayer .Character;end;end;end;end;end
tbl22.openChests = function(...) end
tbl22.feedOnce = function(...) end
tbl22.step = function(...) end

tbl22.text = function()
	local v5 = tbl22.snap()
	if not v5 then
		return "chua doc duoc su kien quai doi"
	end
	local state = v5.State or {}
	local event = v5.Event or {}
	local num = tonumber(event.EndsAt)

	if num then
		num = event.EndsAt - (tonumber(event.ServerTime) or os.time())
	end

	num = num or nil
	local concat = table.concat
	local tbl24 = {}
	local active = event.Active

	if active then
		active = "EVENT IS LIVE" .. (num and num > 0 and ", " .. fn5(num) or "")
	end

	active = active or "the event has ended"
	local str2 = ("charge %d/%d | chests waiting %d | total feeds %d"):format(tonumber(state.Charge) or 0, tbl23.MaxCharge or 100, tonumber(state.PendingChests) or 0, tonumber(state.TotalFeeds) or 0)
	local str3 = ("parasite eggs in your bag: %d | your monster: %s"):format(#tbl22.infested(), tbl22.mine() and "spawned" or "none yet")
	local str4 = ("fed %d | opened %d chests"):format(tbl22.feeds, tbl22.chests)
	local note = tbl22.note
	tbl24[1] = active
	tbl24[2] = str2
	tbl24[3] = str3
	tbl24[4] = str4
	tbl24[5] = note
	return concat(tbl24, "\n")
end

local tbl24

tbl24 = {
	note = "-",
	snap = function()
		return fn16(v3.BossEvent.AskSnapshot)
	end,
	enter = function()
		local v5, v6 = fn14(v3.BossEvent.AskEnter)
		local v7 = tbl24
		local note = v5 == true and "entered the boss arena"

		if not note then
			note = "could not enter: " .. tostring(v6 or v5)
		end

		v7.note = note
		return v5 == true
	end,
	text = function()
		local v5, v6 = tbl24.snap()
		if not v5 then
			return "chua doc duoc su kien boss: " .. tostring(v6 or "no reply")
		end
		local serverTimeNow = v2:GetServerTimeNow()
		local bossName = BossEvent and BossEvent.BossName or "Boss"
		if v5.Open then
			return ("%s IS OPEN, closes in %s\npress Enter Arena to join"):format(bossName, fn5((tonumber(v5.ClosesAt) or serverTimeNow) - serverTimeNow))
		end
		local str2 = "%s closed, mo sau %s\n%s"
		local format = str2.format
		local v7 = fn5
		local num = tonumber(v5.OpensAt) or serverTimeNow
		local note = tbl24.note
		return format(str2, bossName, v7(num - serverTimeNow), note)
	end,
}

local tbl25 = { "AssetId", "AssetCategory", "Category", "Id" }

local function fn33(arg)
	if type(arg) == "string" then
		return arg
	end

	if type(arg) ~= "table" then
		return nil
	end

	for _, v5 in ipairs(tbl25) do
		local v6 = arg[v5]
		if type(v6) == "string" and v6 ~= "" then
			return v6
		end
	end
end

local tbl26

tbl26 = {
	note = "-",
	needs = function(...) end,
	state = function(...) end,
	refresh = function(...) end,
	offer = function(...) end,
	have = function(I)local g={};for B,B in ipairs( tbl16 .pets())do if B.cat==I and not(B.fav or B.fusing)then g[#g+1]=B;end;end;table.sort(g,function(S,I)if S.worn~=I.worn then return I.worn;end;return S.rate<I.rate;end);return g;end,
	feed = function(I)local g=nil;if not I then I,g= tbl26 .state();end;if not I then return false,"chua doc duoc rift: "..tostring(g or"no reply");end;if not I.Unlocked then return false,"the rift is still locked";end;g= tbl26 .needs(I);if#g==0 then return false,"none cong thuc";end;local B,o,C={},{},{};for G,E in ipairs(g)do I=B[E];if not I then I= tbl26 .have(E);B[E]=I;end;G=nil;for g,g in ipairs(I)do if not o[g.uid]then G=g;break;end;end;if not G then return false,("missing the pet %s"):format(E);end;o[G.uid]=true;C[#C+1]=G.uid;end;return  tbl26 .offer(C);end,
	step = function(...) end,
	text = function()
		local v5, v6 = tbl26.state()
		if not v5 then
			return "chua doc duoc rift: " .. tostring(v6 or "no reply")
		end
		local tbl27 = {}
		local str2 = ("banner: %s | rotates in %s"):format(tostring(v5.BannerDisplayName), fn5(tonumber(v5.SecondsUntilRotation) or 0))
		local str3 = "unlocked: %s | free rerolls left %s | pity %s/%s"
		local format = str3.format
		local str4 = v5.Unlocked and "roi"

		if not str4 then
			str4 = "needs " .. fn4(tonumber(v5.UnlockSpeedPower) or 0) .. " SpeedPower"
		end

		local v7 = tostring
		local pityThreshold = v5.PityThreshold
		local v8 = format(str3, str4, tostring(v5.FreeRefreshesRemaining), tostring(v5.PityCount), v7(pityThreshold))
		tbl27[1] = str2
		tbl27[2] = v8
		tbl27[3] = "cong thuc needs nop:"

		for i, v9 in ipairs(tbl26.needs(v5)) do
			local v10 = tbl26.have(v9)
			tbl27[#tbl27 + 1] = ("  %d. %s  ->  you own %d"):format(i, fn6(v9, 22), #v10)
		end

		tbl27[#tbl27 + 1] = "pet odds:"
		local v9 = ipairs
		local petOdds = v5.PetOdds or {}

		for _, petOdd in v9(petOdds) do
			tbl27[#tbl27 + 1] = ("  %s %5.1f%%"):format(fn6(tostring(petOdd.AssetId), 22), tonumber(petOdd.Weight) or 0)
		end

		if tbl26.note ~= "-" then
			tbl27[#tbl27 + 1] = tbl26.note
		end

		return table.concat(tbl27, "\n")
	end,
}

local tbl27

tbl27 = {
	rings = 0,
	orbs = 0,
	note = "-",
	score = function()
		local v5, v6 = fn14(v3.LightVsDarkness.FetchScore)
		return tonumber(v5) or 0, tonumber(v6) or 0
	end,
	sweep = function()
		local v5, v6 = fn7()
		if not v6 then
			return 0
		end
		local n2 = math.clamp(tonumber(tbl2.duelRange) or 140, 20, 400)
		local tbl28 = fn14(v3.LightVsDarkness.FetchRings)
		local tbl29 = fn14(v3.LightVsDarkness.FetchPowerUps)
		local v7 = ipairs
		tbl28 = type(tbl28) == "table" and tbl28 or {}
		local n3 = 0

		for _, v8 in v7(tbl28) do
			local position = typeof(v8) == "Instance" and fn31(v8) or typeof(v8) == "table" and v8.Position

			if position and (position - v6.Position).Magnitude <= n2 then
				if fn15(v3.LightVsDarkness.AskCollectRing, v8.Id or v8) then
					n3 += 1
					tbl27.rings = tbl27.rings + 1
				end
			end
		end

		local v8 = ipairs
		tbl29 = type(tbl29) == "table" and tbl29 or {}

		for _, v9 in v8(tbl29) do
			local position = typeof(v9) == "Instance" and fn31(v9) or typeof(v9) == "table" and v9.Position

			if position and (position - v6.Position).Magnitude <= n2 then
				if fn15(v3.LightVsDarkness.AskCollectPowerUp, v9.Id or v9) then
					n3 += 1
					tbl27.orbs = tbl27.orbs + 1
				end
			end
		end

		return n3
	end,
	text = function()
		local v5, v6 = tbl27.score()
		local concat = table.concat
		local tbl28 = {}
		local str2 = ("your score %s | best %s"):format(fn4(v5), fn4(v6))
		local str3 = ("collected %d rings | %d power-ups"):format(tbl27.rings, tbl27.orbs)
		local note = tbl27.note
		tbl28[1] = str2
		tbl28[2] = str3
		tbl28[3] = "Light vs Darkness only runs while the server raises its flag"
		tbl28[4] = note
		return concat(tbl28, "\n")
	end,
}

local tbl28 = { saves = 0, blocked = 0, stood = 0, note = "-" }

local tbl29 = {
	Enum.HumanoidStateType.Physics,
	Enum.HumanoidStateType.FallingDown,
	Enum.HumanoidStateType.Ragdoll,
}

local tbl30 = {}
local tbl31 = nil

local function fn34(arg)
	if arg:GetAttribute("RagdollConstraint") ~= nil then
		return true
	end

	if arg:GetAttribute("RagdollAttachment") ~= nil then
		return true
	end
	local name = arg.Name
	return name:sub(1, 17) == "RagdollConstraint" or name:sub(1, 17) == "RagdollAttachment"
end

tbl28.scrub = function(arg)
	if not arg then
		return 0
	end
	local n2 = 0

	for _, descendant in ipairs(arg:GetDescendants()) do
		if fn34(descendant) then
			pcall(function()
				descendant:Destroy()
			end)

			n2 += 1
		elseif descendant:IsA("Motor6D") and not descendant.Enabled then
			descendant.Enabled = true
		end
	end

	local humanoid = arg:FindFirstChildWhichIsA("Humanoid")

	if humanoid then
		if humanoid.PlatformStand then
			humanoid.PlatformStand = false
		end

		local physics = Enum.HumanoidStateType.Physics

		if humanoid:GetState() == physics then
			pcall(function()
				humanoid:ChangeState(Enum.HumanoidStateType.GettingUp)
			end)
		end
	end

	if n2 > 0 then
		tbl28.blocked = tbl28.blocked + 1
	end

	return n2
end

tbl28.limp = function(I)I=I or  localPlayer .Character;if not(I and  Ragdoll )then return false;end;local g,B=pcall( Ragdoll .IsRagdolled,I);return g and B==true;end
tbl28.standUp = function(...) end

local function fn35(arg)
	local character = localPlayer.Character
	return character ~= nil and (arg == character or arg:IsDescendantOf(character))
end

local function fn36(arg)
	if not arg then
		return
	end
	local humanoid = arg:FindFirstChildOfClass("Humanoid") or arg:WaitForChild("Humanoid", 5)
	if not humanoid then
		return
	end

	for _, v5 in ipairs(tbl29) do
		pcall(function()
			humanoid:SetStateEnabled(v5, false)
		end)
	end

	tbl28.standUp(arg)
	tbl30[#tbl30 + 1] = arg.DescendantAdded:Connect(function(...) end)

	tbl30[#tbl30 + 1] = humanoid:GetPropertyChangedSignal("PlatformStand"):Connect(function()
		if humanoid.PlatformStand then
			tbl28.blocked = tbl28.blocked + 1
			task.defer(tbl28.standUp, arg)
		end
	end)
end

local function fn37()
	if tbl31 or not Ragdoll then
		return
	end

	tbl31 = {
		ApplyClientRagdoll = Ragdoll.ApplyClientRagdoll,
		TimedRagdoll = Ragdoll.TimedRagdoll,
		TimedRagdollAsync = Ragdoll.TimedRagdollAsync,
	}

	for k, v5 in pairs(tbl31) do
		Ragdoll[k] = function(arg, ...)
			if fn35(arg) then
				return
			end
			return v5(arg, ...)
		end
	end
end

local function fn38()
	if not tbl31 then
		return
	end

	for k, v5 in pairs(tbl31) do
		Ragdoll[k] = v5
	end

	tbl31 = nil
end

tbl28.noRagdoll = function(...) end
PhysicalProperties.new(100, 0.3, 0.5, 1, 1)
tbl28.heavy = function(...) end
tbl28.rescue = function(...) end

tbl28.ladderText = function()
	local v5 = tbl6.speedPower()
	local v6 = tbl6.walkSpeed()
	local tbl32 = {}
	local str2 = ("your SpeedPower %s  ->  WalkSpeed %.1f"):format(fn4(v5), v6)
	local format = ("%s %s %s %s").format
	local khu = fn6("KHU", 16)
	local needsSpeedpower = fn6("NEEDS SPEEDPOWER", 16)
	local guardWs = fn6("GUARD WS", 10)
	tbl32[1] = str2
	tbl32[2] = "any area whose guard is slower than you can never catch you"
	tbl32[3] = ""

	do
		local values = table.pack(format("%s %s %s %s", khu, needsSpeedpower, guardWs, "STATUS"))
		table.move(values, 1, values.n, 4, tbl32)
	end

	for _, v7 in ipairs(tbl6.ladder()) do
		local v8 = tbl6.guardOf(v7.Id)
		local n2 = tonumber(v8 and v8.WalkSpeed) or 0
		local str3

		if v5 < v7.SpeedPower then
			str3 = "not enough speed to enter"
		elseif n2 < v6 then
			str3 = "safe, safe, the guard cannot keep up"
		else
			str3 = "you can enter, but the guard is faster than you"
		end

		local n3 = #tbl32 + 1
		local v9 = fn6
		tbl32[n3] = ("%s %s %s %s"):format(fn6(v7.Id, 16), fn6(fn4(v7.SpeedPower), 16), v9(("%.0f"):format(n2), 10), str3)
	end

	return table.concat(tbl32, "\n")
end

local tbl32 = { killed = 0, caught = 0, freed = 0, dodges = 0 }
local vector = Vector3.new(0.05, 0.05, 0.05)
local color = Color3.fromRGB(255, 62, 62)
local obj = setmetatable({}, { __mode = "k" })
local obj2 = setmetatable({}, { __mode = "k" })

local function fn39(arg)
	local name = localPlayer.Name
	return arg:GetAttribute("Owner") == name
end

local function fn40(arg)
	if not arg:IsA("BasePart") or fn39(arg) then
		return
	end

	if not obj[arg] then
		obj[arg] = true
		tbl32.killed = tbl32.killed + 1
	end

	pcall(function()
		arg.CanTouch = false
		arg.CanCollide = false
	end)

	for _, descendant in ipairs(arg:GetDescendants()) do
		if descendant:IsA("BasePart") then
			pcall(function()
				descendant.CanTouch = false
				descendant.CanCollide = false
				descendant.CanQuery = false

				if descendant.Name == "Hitbox" then
					descendant.Size = vector
				end
			end)
		end
	end
end

local function fn41(arg)
	local v5 = obj2[arg]
	if not v5 then
		return
	end
	obj2[arg] = nil

	for _, v6 in ipairs(v5) do
		pcall(function()
			v6:Destroy()
		end)
	end
end

local function fn42(adornee)
	if obj2[adornee] or fn39(adornee) or not adornee:IsA("BasePart") then
		return
	end
	local highlight = Instance.new("Highlight")
	highlight.Adornee = adornee
	highlight.FillColor = color
	highlight.FillTransparency = 0.45
	highlight.OutlineColor = color
	highlight.DepthMode = Enum.HighlightDepthMode.AlwaysOnTop
	highlight.Parent = adornee
	local billboardGui = Instance.new("BillboardGui")
	billboardGui.Size = UDim2.fromOffset(90, 22)
	billboardGui.StudsOffset = Vector3.new(0, 2.6, 0)
	billboardGui.AlwaysOnTop = true
	billboardGui.MaxDistance = 400
	local textLabel = Instance.new("TextLabel")
	textLabel.Size = UDim2.fromScale(1, 1)
	textLabel.BackgroundTransparency = 1
	textLabel.Text = "BAY"
	textLabel.TextColor3 = color
	textLabel.TextScaled = true
	textLabel.Font = Enum.Font.GothamBold
	textLabel.Parent = billboardGui
	local uiStroke = Instance.new("UIStroke")
	uiStroke.Thickness = 2
	uiStroke.Color = Color3.new(0, 0, 0)
	uiStroke.Parent = textLabel
	billboardGui.Parent = adornee
	obj2[adornee] = { highlight, billboardGui }
end

tbl32.sweep = function(...) end
tbl32.list = function(...) end
tbl32.steer = function(...) end
tbl32.freeSelf = function(...) end
tbl32.watch = function(...) end
tbl32.clear = function(...) end

tbl32.text = function()
	local killed = tbl32.killed
	local caught = tbl32.caught
	local freed = tbl32.freed
	local dodges = tbl32.dodges
	return ("%d bay cua nguoi khac dang dat | da vo hieu %d | dinh %d | thoat %d | ne %d"):format(#tbl32.list(), killed, caught, freed, dodges)
end

local n2 = 15
local n3 = 2
local tbl33

tbl33 = {
	swings = 0,
	note = "khong lam gi",
	gearRange = function()local I={};for g,B in pairs( Gears .Directory or{})do local S=type(B)=="table"and B.BatControllerData;if S then I[g]=tonumber(S.RangeBonus)or 0;end;end;return I;end,
	scalar = function()return  v2 :GetAttribute("DragonEggEventActive")==true and 2.5 or 1;end,
	reach = function(I)if not I then return 0;end;local g=I:GetAttribute("GearName")or(I.Name:gsub("%s*%[X%d+%]%s*$",""));I= tbl33 .gearRange()[g];if not I then return 0;end;return( n2 +I+ n3 )* tbl33 .scalar();end,
	best = function()local function I(g)return g:GetAttribute("IsBat")==true;end;local g=nil;local B=nil;local o=nil;for C,G in ipairs( tbl6 .gearTools(I))do C= tbl33 .reach(G);if not g or C>g then g,B=C,G;end;o=if G.Parent== localPlayer .Character then G else o;end;return B,g or 0,o;end,
	victim = function(...) end,
	step = function(...) end,
	text = function()
		local v5, v6, v7 = tbl33.best()
		local tbl34 = {}
		local str2 = ("dang cam: %s  tam %.1f studs"):format(v7 and v7.Name or "none", tbl33.reach(v7))
		local str3 = ("gay tot nhat: %s  tam %.1f studs"):format(v5 and v5.Name or "none", v6)
		local swings = tbl33.swings
		local str4 = ("he so su kien x%.1f | da danh %d lan"):format(tbl33.scalar(), swings)
		tbl34[1] = str2
		tbl34[2] = str3
		tbl34[3] = str4
		tbl34[4] = "tam danh = (15 + RangeBonus + 2) x he so, server tinh lai nen khong the an gian"
		tbl34[5] = ""
		local tbl35 = {}

		for k, v8 in pairs(tbl33.gearRange()) do
			local n4 = #tbl35 + 1
			local tbl36 = {}
			local n5 = (n2 + v8 + n3) * tbl33.scalar()
			tbl36[1] = k
			tbl36[2] = n5
			tbl35[n4] = tbl36
		end

		table.sort(tbl35, function(arg, arg2)
			return arg[2] > arg2[2]
		end)

		for _, v8 in ipairs(tbl35) do
			tbl34[#tbl34 + 1] = ("%s %.2f studs%s"):format(fn6(v8[1], 20), v8[2], v5 and v5.Name:find(v8[1], 1, true) and "   <- cua ban" or "")
		end

		tbl34[#tbl34 + 1] = tbl33.note
		return table.concat(tbl34, "\n")
	end,
}

local function fn43(arg)
	if not arg or not arg.Parent or not arg.PrimaryPart then
		return false
	end

	if arg.Name:find("Visual") then
		return false
	end
	local hitbox = arg:FindFirstChild("Hitbox", true)
	if not hitbox or not hitbox:IsA("BasePart") then
		return false
	end

	local ok, result = pcall(function()
		return arg:GetAttribute("DroneMotion")
	end)

	if ok and type(result) == "string" and result ~= "" then
		local ok2, result2 = pcall(function()
			return require(ReplicatedStorage.Shared.Util.ScrambleDroneMotion).Decode(result)
		end)

		if ok2 and result2 and result2.Name == "Death" then
			return false
		end
	end

	local attribute = hitbox:GetAttribute("Health")

	if attribute == nil and arg.PrimaryPart then
		attribute = arg.PrimaryPart:GetAttribute("Health")
	end

	if attribute == nil then
		attribute = arg:GetAttribute("Health")
	end

	if type(attribute) ~= "number" then
		return false
	end

	if attribute <= 0 then
		return false
	end
	return true
end

local tbl34

tbl34 = {
	hits = 0,
	note = "idle",
	last = 0,
	nearest = function(...) end,
	holdBat = function()local function I(g)return g:GetAttribute("IsBat")==true;end;local g=nil;local B=nil;for o,o in ipairs( tbl6 .gearTools(I))do if o.Parent== localPlayer .Character then g=g or o;else B=B or o;end;end;if not g and not B then local I,o=ipairs,{ localPlayer .Character, localPlayer :FindFirstChildOfClass("Backpack")};for C,C in I(o)do if C then for I,I in ipairs(C:GetChildren())do if I:IsA("Tool")and I.ToolTip=="Bat"then if I.Parent== localPlayer .Character then g=g or I;else B=B or I;end;end;end;end;end;end;if g then return g;end;if B then if  tbl6 .holdTool(B)then return B;end;end;return nil;end,
	tweenTo = function(...) end,
	step = function(...) end,
	text = function()
		local scrambleLocalVisuals = v2:FindFirstChild("ScrambleLocalVisuals")
		local n4 = scrambleLocalVisuals and #scrambleLocalVisuals:GetChildren() or 0
		local str2, v5 = tbl34.nearest()
		local name = nil

		for _, v6 in ipairs(tbl6.gearTools(function(arg)
			return arg:GetAttribute("IsBat") == true
		end)) do
			if v6.Parent == localPlayer.Character then
				name = v6.Name
				break
			else
				name = nil
			end
		end

		local name2 = nil

		if not name then
			name2 = nil

			for _, v6 in ipairs({ localPlayer.Character, localPlayer:FindFirstChildOfClass("Backpack") }) do
				if v6 then
					for _, child in ipairs(v6:GetChildren()) do
						if child:IsA("Tool") and child.ToolTip == "Bat" then
							if child.Parent == localPlayer.Character then
								name = child.Name
							end

							name2 = name2 or child.Name
						end
					end
				end
			end
		end

		local concat = table.concat
		local tbl35 = {}
		local str3 = ("folder: %s | drones %d"):format(scrambleLocalVisuals and "found" or "missing", n4)

		if str2 then
			str2 = ("nearest %s %.0f studs"):format(str2.Name, v5 or 0)
		end

		str2 = str2 or "nearest: none"
		local str4 = ("bat: %s"):format(name and "holding " .. name or name2 and "in bag: " .. name2 or "none")
		local str5 = "speed %d | hits %d"
		local format = str5.format
		local clamp = math.clamp
		local n5 = tonumber(tbl2.droneSpeed) or 500
		local hits = tbl34.hits
		local v6 = format(str5, clamp(n5, 50, 1200), hits)
		local str6 = "bypass: %s"
		local format2 = str6.format
		local str7 = tbl7.armed() and "running" or "not attached"
		local note = tbl34.note
		local v7 = format2(str6, str7)
		tbl35[1] = str3
		tbl35[2] = str2
		tbl35[3] = str4
		tbl35[4] = v6
		tbl35[5] = v7
		tbl35[6] = ""
		tbl35[7] = "Drone.lua: Tween to PrimaryPart at 500"
		tbl35[8] = note
		return concat(tbl35, "\n")
	end,
}

local tbl35

tbl35 = {
	hits = 0,
	collected = 0,
	parts = 0,
	note = "idle",
	snap = nil,
	drops = 0,
	listen = function(...) end,
	isActive = function()if  tbl35 .snap and  tbl35 .snap.Window then return  tbl35 .snap.Window.Active==true;end;if  tbl35 .snap and type( tbl35 .snap.Active)=="boolean"then return  tbl35 .snap.Active;end;local I= v2 :FindFirstChild("ScrambleLocalVisuals");if I and#I:GetChildren()>0 then return true;end;local g,B=pcall(function()return require( ReplicatedStorage .Shared.Util.ScrambleRules);end);if g and B and B.Window then I= v2 :GetServerTimeNow();local S=B.Window(I,0,1/0,1800,300);if S and S.Active~=nil then return S.Active;end;end;return false;end,
	nearestDrone = function(...) end,
	nearestDrop = function(...) end,
	holdBat = function()return  tbl34 .holdBat();end,
	tweenTo = function(I,g)return  tbl34 .tweenTo(I,g);end,
	step = function(...) end,
	text = function()
		local scrambleLocalVisuals = v2:FindFirstChild("ScrambleLocalVisuals")
		scrambleLocalVisuals = scrambleLocalVisuals and #scrambleLocalVisuals:GetChildren() or 0
		local str2, v5 = tbl35.nearestDrone()
		local str3, v6 = tbl35.nearestDrop()
		local str4 = tbl35.isActive()
		local snap = tbl35.snap
		local state = snap and snap.State
		local str5 = "-"
		local str6 = "-"
		local str7 = "-"

		if state then
			local state2 = snap.State

			if type(state2.Wallets) == "table" then
				local v7, v8, v9 = pairs(state2.Wallets)
				local v10 = table.pack(l_1())

				if v10[1] then
					str7 = tostring(v10[3])
				end
			end

			if state2.DroneParts ~= nil then
				str6 = tostring(state2.DroneParts) .. "/3"

				if state2.LostParts then
					str6 ..= " + Lost " .. (state2.LostParts.LostPart1 and 1 or 0) + (state2.LostParts.LostPart2 and 1 or 0) .. "/2"
				end
			end

			str5 = tostring(state2.ShopSequence or "-")
		end

		local v7 = tbl35.holdBat()
		local name

		if v7 then
			name = v7.Name
		else
			name = nil

			for _, v8 in ipairs({ localPlayer.Character, localPlayer:FindFirstChildOfClass("Backpack") }) do
				if v8 then
					for _, child in ipairs(v8:GetChildren()) do
						if child:IsA("Tool") and child.ToolTip == "Bat" then
							name = child.Name
							break
						end
					end
				end

				if not name then
					continue
				end
				break
			end
		end

		local concat = table.concat
		local tbl36 = {}
		local str8 = ("window: %s | drones %d | drops %d"):format(str4 and "ACTIVE (5m)" or "waiting (30m cycle)", scrambleLocalVisuals, tbl35.drops or 0)

		if str2 then
			str2 = ("nearest drone %s %.0f studs"):format(str2.Name, v5 or 0)
		end

		str2 = str2 or "nearest drone: none (spawns in Abyss Ocean+ every biome)"

		if str3 then
			str3 = ("nearest drop %s %.0f studs"):format(str3.Name, v6 or 0)
		end

		str3 = str3 or "nearest drop: none"
		local str9 = ("samples: %s | parts %s | shopSeq %s"):format(str7, str6, str5)
		local str10 = ("bat: %s"):format(name or "none")
		local str11 = "speed %d | hits %d | collected %d"
		local format = str11.format
		local clamp = math.clamp
		local n4 = tonumber(tbl2.scrambleSpeed) or 500
		local hits = tbl35.hits
		local collected = tbl35.collected
		local v8 = format(str11, clamp(n4, 50, 1200), hits, collected)
		local str12 = ("bypass: %s"):format(tbl7.armed() and "running" or "not attached")
		str4 = str4 and "Farming: tween to drone at 500 studs/s, game's auto-attack handles 12-stud swing, auto-collect drops when near." or "Waiting for window - check ExperimentTimer HUD."
		local note = tbl35.note
		tbl36[1] = str8
		tbl36[2] = str2
		tbl36[3] = str3
		tbl36[4] = str9
		tbl36[5] = str10
		tbl36[6] = v8
		tbl36[7] = str12
		tbl36[8] = ""
		tbl36[9] = "Dr. Scramble: drones spawn every 30m for 5m until Sep 26, hit with bat within 12 studs, each hit -1 HP, drops Samples + DroneParts. LostPart1/2 via ProximityPrompt."
		tbl36[10] = str4
		tbl36[11] = note
		return concat(tbl36, "\n")
	end,
}

local folder = nil

local function fn44()
	if folder and folder.Parent then
		return folder
	end
	folder = Instance.new("Folder")
	folder.Name = "NightEggTags"

	pcall(function()
		folder.Parent = localPlayer:FindFirstChildOfClass("PlayerGui")
	end)

	if not folder.Parent and type(gethui) == "function" then
		local ok, parent = pcall(gethui)

		if ok and typeof(parent) == "Instance" then
			pcall(function()
				folder.Parent = parent
			end)
		end
	end

	return folder
end

local function fn45(arg)
	local floor = math.floor
	local n4 = arg.B * 255 + 0.5
	return ("#%02X%02X%02X"):format(math.floor(arg.R * 255 + 0.5), math.floor(arg.G * 255 + 0.5), floor(n4))
end

local function createBillboardGui()
	local billboardGui = Instance.new("BillboardGui")
	billboardGui.AlwaysOnTop = true
	billboardGui.Size = UDim2.fromOffset(250, 46)
	billboardGui.StudsOffsetWorldSpace = Vector3.new(0, 2.9, 0)
	billboardGui.MaxDistance = 1600
	billboardGui.LightInfluence = 0
	local textLabel = Instance.new("TextLabel")
	textLabel.Name = "L"
	textLabel.BackgroundTransparency = 1
	textLabel.Size = UDim2.fromScale(1, 1)
	textLabel.Font = Enum.Font.GothamBold
	textLabel.TextSize = 13
	textLabel.RichText = true
	textLabel.TextColor3 = Color3.new(1, 1, 1)
	textLabel.TextStrokeTransparency = 0.3
	textLabel.TextYAlignment = Enum.TextYAlignment.Bottom
	textLabel.Parent = billboardGui
	billboardGui.Parent = fn44()
	return billboardGui
end

local function fn46(arg)
	if not arg then
		return nil
	end

	if arg:IsA("BasePart") then
		return arg
	end
	return arg.PrimaryPart or arg:FindFirstChild("Hitbox") or arg:FindFirstChildWhichIsA("BasePart")
end

local tbl36

tbl36 = {
	shown = 0,
	line = function(...) end,
	clear = function(...) end,
	refresh = function(...) end,
	tick = function(...) end,
	mapText = function(arg)
		local v5 = tbl11.top(arg or 12)
		if #v5 == 0 then
			return "no eggs on the map right now"
		end
		local tbl37 = {}

		for _, v6 in ipairs(v5) do
			tbl37[v6.rec.AreaId] = (tbl37[v6.rec.AreaId] or 0) + 1
		end

		local tbl38 = {}
		local str2 = ("%d eggs are sitting on the map, richest first"):format(tbl11.seen)
		local format = ("%s %s %s %s %s").format
		local trung = fn6("TRUNG", 22)
		local rarity = fn6("RARITY", 12)
		local khu = fn6("KHU", 15)
		local value = fn6("VALUE", 11)
		tbl38[1] = str2

		do
			local values = table.pack(format("%s %s %s %s %s", trung, rarity, khu, value, "DISTANCE"))
			table.move(values, 1, values.n, 2, tbl38)
		end

		for _, v6 in ipairs(v5) do
			local v7 = tbl6.rarityOf(v6.rec.AssetCategory)
			local n4 = #tbl38 + 1
			local v8 = fn6
			local far = v6.far
			tbl38[n4] = ("%s %s %s %s %.0f studs"):format(fn6(tbl11.label(v6.rec), 22), fn6(v7, 12), fn6(tostring(v6.rec.AreaId), 15), v8("$" .. fn4(v6.rate) .. "/s", 11), far)
		end

		return table.concat(tbl38, "\n")
	end,
	cycleText = function()
		local serverTimeNow = v2:GetServerTimeNow()
		local value = select(2, pcall(AreaEggCycle.NextResetTime, serverTimeNow))
		local value2 = select(2, pcall(AreaEggCycle.NextNightTime, serverTimeNow))
		local value3 = select(2, pcall(AreaEggCycle.IsNightPhase, serverTimeNow))
		local num = tonumber(value) or serverTimeNow
		local num2 = tonumber(value2) or serverTimeNow
		return ("next egg wave in %s   |   next night in %s   |   %s"):format(fn5(num - serverTimeNow), value3 and "night is running now" or fn5(num2 - serverTimeNow), value3 and "night: eggs grow faster" or "daytime")
	end,
	oddsText = function(arg)
		local v5 = tbl6.field()
		local tbl37 = {}
		local tbl38 = {}

		for _, v6 in pairs(v5) do
			if type(v6) == "table" and v6.AreaId then
				tbl37[v6.AreaId] = (tbl37[v6.AreaId] or 0) + 1
			end
		end

		local tbl39 = {}

		for k, v6 in pairs(tbl37) do
			local directory = Areas.Directory and Areas.Directory[k]
			directory = directory and directory.DropTable

			if type(directory) == "table" then
				local tbl40 = nil

				pcall(function()
					tbl40 = AssetLottery.TokenChances(directory)
				end)

				if type(tbl40) ~= "table" then
					tbl40 = {}
					local n4 = 0

					for _, v7 in ipairs(directory) do
						local n5 = tonumber(v7[2]) or 0

						if n5 > 0 then
							n4 += n5
						end
					end

					if n4 > 0 then
						for _, v7 in ipairs(directory) do
							local n5 = tonumber(v7[2]) or 0

							if type(v7[1]) == "string" and n5 > 0 then
								tbl40[v7[1]] = n5 / n4
							end
						end
					end
				end

				for k2, v7 in pairs(tbl40) do
					local flag2 = type(k2) == "string"

					if flag2 then
						flag2 = (tonumber(v7) or 0) > 0
					end

					if flag2 then
						local v8 = tbl6.asset(k2)
						local v9, v10, v11 = tbl6.rarityOf(k2)

						tbl39[#tbl39 + 1] = {
							name = v8 and v8.DisplayName or k2,
							area = k,
							rank = v9,
							num = v11,
							rate = v8 and tonumber(v8.EarningRate) or 0,
							chance = 1 - (1 - v7) ^ v6,
						}
					end
				end
			end
		end

		if #tbl39 == 0 then
			return "could not read the drop tables"
		end

		table.sort(tbl39, function(arg2, arg3)
			if arg2.num ~= arg3.num then
				return arg2.num > arg3.num
			end
			return arg2.rate > arg3.rate
		end)

		tbl38[#tbl38 + 1] = tbl36.cycleText()
		tbl38[#tbl38 + 1] = ""
		tbl38[#tbl38 + 1] = ("%s %s %s %s"):format(fn6("TRUNG", 22), fn6("RARITY", 12), fn6("KHU", 15), "CO HOI DOT SAU")
		local min = math.min
		arg = arg or 14

		for i = 1, min(arg, #tbl39) do
			local v6 = tbl39[i]
			local str2 = v6.chance >= 0.001 and ("%.2f%%"):format(v6.chance * 100) or "1/" .. fn4(1 / v6.chance)
			tbl38[#tbl38 + 1] = ("%s %s %s %s"):format(fn6(v6.name, 22), fn6(v6.rank, 12), fn6(v6.area, 15), str2)
		end

		tbl38[#tbl38 + 1] = ""
		tbl38[#tbl38 + 1] = "which nest gets which species is rolled server side, nobody can call it early - only the clock and the odds are exact"
		return table.concat(tbl38, "\n")
	end,
}

local tbl37 = { hidden = 0, muted = 0, note = "-" }
local tbl38 = { ClientRenderedAssets = true, PlacedEggRenders = true, Plots = true }
local tbl39 = { ParticleEmitter = true, Trail = true, Beam = true, Smoke = true, Fire = true, Sparkles = true }
local folder2 = Instance.new("Folder")
folder2.Name = "NightStash"
local tbl40 = {}
local tbl41 = {}

local function fn47(arg)
	local num = tonumber(arg:GetAttribute("OwnerUserId"))
	if num then
		return num == localPlayer.UserId
	end
	local match = tostring(arg.Name):match("(%d%d%d%d%d+)")
	if match then
		local userId = localPlayer.UserId
		return tonumber(match) == userId
	end
	return true
end

local function fn48(arg)
	if tbl40[arg] or not arg.Parent or arg.Parent == folder2 then
		return false
	end
	tbl40[arg] = arg.Parent

	if not pcall(function()
		arg.Parent = folder2
	end) then
		tbl40[arg] = nil
		return false
	end

	tbl37.hidden = tbl37.hidden + 1
	return true
end

tbl37.sweep = function()
	if not tbl2.hideOthers then
		return 0
	end
	local n4 = 0

	for _, child in ipairs(v2:GetChildren()) do
		if tbl38[child.Name] then
			for _, child2 in ipairs(child:GetChildren()) do
				if not fn47(child2) and fn48(child2) then
					n4 += 1
				end
			end
		end
	end

	return n4
end

tbl37.restore = function()
	local n4 = 0

	for k, v5 in pairs(tbl40) do
		if k and v5 and v5.Parent then
			if pcall(function()
				k.Parent = v5
			end) then
				n4 += 1
			end
		end
	end

	tbl40 = {}
	tbl37.hidden = 0
	return n4
end

tbl37.setHide = function(arg)
	if arg then
		return tbl37.sweep()
	end
	return tbl37.restore()
end

tbl37.setFx = function(arg)
	local muted

	if arg then
		muted = 0

		for _, descendant in ipairs(v2:GetDescendants()) do
			if tbl39[descendant.ClassName] and descendant.Enabled then
				tbl41[descendant] = true

				pcall(function()
					descendant.Enabled = false
				end)

				muted += 1
			end
		end

		pcall(function()
			tbl37.shadows = Lighting.GlobalShadows
			Lighting.GlobalShadows = false
		end)

		local terrain = v2:FindFirstChildOfClass("Terrain")

		if terrain then
			pcall(function()
				terrain.WaterWaveSize = 0
				terrain.WaterWaveSpeed = 0
				terrain.WaterReflectance = 0
				terrain.Decoration = false
			end)
		end
	else
		for k in pairs(tbl41) do
			pcall(function()
				k.Enabled = true
			end)
		end

		tbl41 = {}

		pcall(function()
			if tbl37.shadows ~= nil then
				Lighting.GlobalShadows = tbl37.shadows
			end
		end)

		muted = 0
	end

	tbl37.muted = muted
	return muted
end

tbl37.text = function()
	local n4 = 0
	local n5 = 0

	for _, child in ipairs(v2:GetChildren()) do
		if tbl38[child.Name] then
			for _, child2 in ipairs(child:GetChildren()) do
				n4 += 1

				if fn47(child2) then
					n5 += 1
				end
			end
		end
	end

	local concat = table.concat
	local tbl42 = {}
	local str2 = ("models visible %d (yours %d)"):format(n4, n5)
	local str3 = ("stashed %d | muted %d effects"):format(tbl37.hidden, tbl37.muted)
	tbl42[1] = str2
	tbl42[2] = str3
	tbl42[3] = "other players' pets and eggs are the heaviest thing in this game, hiding them is the biggest fps win"
	return concat(tbl42, "\n")
end

local tbl42

tbl42 = {
	note = "-",
	bats = 0,
	rewards = 0,
	progress = function()
		local directory = Areas.Directory
		local v5 = tbl6.save()
		if not (directory and v5) then
			return nil
		end
		local index = type(v5.Index) == "table" and v5.Index or {}
		local tbl43 = {}

		for k, v6 in pairs(directory) do
			local tbl44 = {}
			local v7, v8, v9 = ipairs(v6.DropTable or {})
			local n4 = 0
			local n5 = 0

			for _, v10 in v7, v8, v9 do
				local v11 = v10[1]

				if tbl6.asset(v11) then
					n4 += 1

					if index[v11] then
						n5 += 1
					else
						tbl44[#tbl44 + 1] = v11
					end
				end
			end

			table.sort(tbl44)

			tbl43[#tbl43 + 1] = {
				id = k,
				name = v6.DisplayName or k,
				have = n5,
				total = n4,
				missing = tbl44,
				done = n4 > 0 and #tbl44 == 0,
			}
		end

		table.sort(tbl43, function(arg, arg2)
			if arg.done ~= arg2.done then
				return arg2.done
			end
			return arg.total - arg.have < arg2.total - arg2.have
		end)

		return tbl43
	end,
	missingSet = function()
		local tbl43 = {}
		local v5 = ipairs
		local tbl44 = tbl42.progress() or {}

		for _, v6 in v5(tbl44) do
			for _, v7 in ipairs(v6.missing) do
				tbl43[v7] = v6.name
			end
		end

		return tbl43
	end,
	claimAll = function()
		local v5, v6, v7 = fn14(v3.Codex.AskRedeemAll)
		if v5 ~= true then
			tbl42.note = "index rewards: " .. tostring(v6 or v5 or "nothing to claim")
			return 0
		end

		if type(v7) ~= "table" or #v7 == 0 then
			tbl42.note = "index rewards: nothing pending"
			return 0
		end
		local tbl43 = {}
		local v8, v9, v10 = ipairs(v7)
		local n4 = 0
		local n5 = 0

		for _, v11 in v8, v9, v10 do
			n4 += tonumber(v11.SpeedAmount) or 0
			n5 += tonumber(v11.MoneyAmount) or 0
			tbl43[#tbl43 + 1] = tostring(v11.Category)
		end

		tbl42.rewards = tbl42.rewards + #v7
		tbl42.note = ("claimed %d index rewards: +%s SpeedPower, +%s money"):format(#v7, fn4(n4), fn4(n5))
		fn14(v3.Codex.AskRedeemLimitedEgg)
		return #v7
	end,
	claimBats = function()
		local v5 = ipairs
		local tbl43 = tbl42.progress() or {}
		local n4 = 0

		for _, v6 in v5(tbl43) do
			if v6.done and not tbl42[v6.id .. "_bat"] then
				local v7 = fn14(v3.Codex.AskWearFieldBat, v6.id)

				if v7 == true then
					tbl42[v6.id .. "_bat"] = true
					tbl42.bats = tbl42.bats + 1
					n4 += 1
				elseif v7 == false then
					tbl42[v6.id .. "_bat"] = true
				end
			end
		end

		return n4
	end,
	text = function()
		local v5 = tbl42.progress()
		if not v5 then
			return "index not loaded"
		end
		local tbl43 = {}
		local n4 = 0
		local n5 = 0

		for _, v6 in ipairs(v5) do
			n4 += v6.have
			n5 += v6.total
			local str2

			if v6.done then
				str2 = "COMPLETE -> its bat is unlocked"
			else
				local tbl44 = {}

				for i = 1, math.min(3, #v6.missing) do
					tbl44[#tbl44 + 1] = v6.missing[i]
				end

				str2 = "still missing " .. table.concat(tbl44, ", ")

				if #v6.missing > 3 then
					str2 ..= (" +%d more"):format(#v6.missing - 3)
				end
			end

			local n6 = #tbl43 + 1
			local have = v6.have
			local total = v6.total
			tbl43[n6] = ("%s %2d/%-2d  %s"):format(fn6(v6.name, 15), have, total, str2)
		end

		table.insert(tbl43, 1, ("index %d/%d species found - complete an area to unlock its bat"):format(n4, n5))

		if tbl42.note ~= "-" then
			tbl43[#tbl43 + 1] = tbl42.note
		end

		return table.concat(tbl43, "\n")
	end,
}

local tbl43

tbl43 = {
	arm = function()
		if tbl43.bound then
			return
		end

		tbl43.bound = fn3(localPlayer.Idled:Connect(function()
			if not tbl2.antiAfk then
				return
			end

			if type(mousemoverel) == "function" then
				pcall(mousemoverel, 1, 0)
				task.wait(0.05)
				pcall(mousemoverel, -1, 0)
			end
		end))
	end,
	blockHop = function()
		if tbl43.hopBound then
			return
		end

		tbl43.hopBound = fn3(v3.IdleRescue.AskRescueHop.OnClientEvent:Connect(function()
			if tbl2.antiAfk then
				tbl43.stopped = (tbl43.stopped or 0) + 1
			end
		end))
	end,
}

local tbl44 = {}

tbl2 = {
	status = "idle",
	farm = false,
	instant = true,
	highValue = true,
	autoHop = false,
	hopValue = 1000000,
	hopWait = 5,
	weave = true,
	areaMode = "Auto by speed",
	area = "Forest",
	pickMode = "Value",
	safeOnly = true,
	useRanks = false,
	ranks = {},
	rateFloor = 0,
	bypass = true,
	moveMode = "Fly",
	moveSpeed = 800,
	autoPlace = false,
	placeAll = true,
	placeRanks = {},
	autoHatch = true,
	autoWearBest = true,
	autoClaim = false,
	autoBase = false,
	autoSell = false,
	sellRanks = { Common = true, Uncommon = true, Rare = true },
	keepBest = 12,
	eggFloor = "Rare",
	autoSellJunk = false,
	grind = false,
	ghost = false,
	speedWant = 0,
	millUpgrade = false,
	autoTrail = false,
	walkSpeed = 16,
	fuse = false,
	fuseOrder = "Smallest first",
	fuseKeepMutated = true,
	bloom = false,
	bloomRange = 90,
	bloomVacuum = true,
	bloomDeposit = false,
	beast = false,
	beastClaim = true,
	beastKeep = 0,
	autoRift = false,
	riftReroll = false,
	duel = false,
	duelRange = 140,
	noRagdoll = true,
	rescue = true,
	trap = true,
	trapEsp = true,
	bat = false,
	batRange = 60,
	batClose = true,
	drone = false,
	droneSpeed = 500,
	scramble = false,
	scrambleRange = 90,
	scrambleSpeed = 500,
	scrambleAutoShop = false,
	esp = false,
	espFloor = 0,
	hideOthers = false,
	lowFx = false,
	antiAfk = true,
}

local tbl45 = { beat = 0, busy = "-" }

local tbl46 = {
	{
		key = "farm",
		run = function()
			return tbl12.step()
		end,
	},
	{
		key = "bloom",
		run = function()
			return tbl21.step()
		end,
	},
	{
		key = "beast",
		run = function()
			return tbl22.step()
		end,
	},
	{
		key = "grind",
		run = function()
			return tbl19.step()
		end,
	},
	{
		key = "drone",
		run = function()
			return tbl34.step()
		end,
	},
	{
		key = "scramble",
		run = function()
			return tbl35.step()
		end,
	},
}

tbl45.solo = function(arg)
	for _, v5 in ipairs(tbl46) do
		if v5.key ~= arg and tbl2[v5.key] then
			tbl2[v5.key] = false

			if tbl45.mirror then
				tbl45.mirror(v5.key, false)
			end

			tbl8.cancel()
		end
	end
end

local function fn49()
	for _, v5 in ipairs(tbl46) do
		if tbl2[v5.key] then
			return v5
		end
	end
end

local function fn50()
	while fn2() do
		local v5 = fn49()

		if not v5 then
			if tbl45.busy ~= "-" then
				tbl45.busy = "-"
				tbl8.cancel()
				tbl8.halt()
			end

			tbl2.status = "idle"
			task.wait(0.05)
		else
			tbl45.busy = v5.key

			if tbl2.rescue and tbl8.downed() then
				pcall(tbl28.rescue)
			else
				local ok, result = pcall(v5.run)

				if not ok then
					tbl2.status = "error: " .. tostring(result):sub(1, 70)
					task.wait(0.05)
				end
			end

			task.wait(0.05)
		end
	end
end

local tbl47 = {
	{
		every = 2,
		fn = function()
			if tbl2.trap or tbl2.trapEsp then
				tbl32.sweep()
			end
		end,
	},
	{
		every = 3,
		fn = function()
			if tbl2.autoHatch then
				tbl15.hatch()
			end
		end,
	},
	{
		every = 6,
		fn = function()
			if tbl2.autoPlace and tbl45.busy ~= "farm" and tbl14.count() > 0 then
				tbl15.dump(12)
			end
		end,
	},
	{
		every = 6,
		fn = function()
			if tbl2.autoSellJunk then
				tbl16.sellEggs(true)
			end
		end,
	},
	{
		every = 6,
		fn = function()
			if tbl2.esp then
				tbl36.tick()
			end
		end,
	},
	{
		every = 9,
		fn = function()
			if tbl2.autoWearBest then
				tbl16.wearBest()
			end
		end,
	},
	{
		every = 5,
		fn = function()
			if tbl2.fuse then
				tbl17.once()
			end
		end,
	},
	{
		every = 18,
		fn = function()
			if tbl2.autoClaim then
				tbl16.harvest()
			end
		end,
	},
	{
		every = 22,
		fn = function()
			if tbl2.autoBase then
				tbl16.raiseBase()
			end
		end,
	},
	{
		every = 26,
		fn = function()
			if tbl2.autoTrail then
				tbl20.buyBest()
			end
		end,
	},
	{
		every = 30,
		fn = function()
			if tbl2.hideOthers then
				tbl37.sweep()
			end
		end,
	},
	{
		every = 34,
		fn = function()
			if tbl2.bloomDeposit and tbl21.on() then
				tbl21.deposit()
			end
		end,
	},
	{
		every = 40,
		fn = function()
			if tbl2.autoClaim then
				tbl42.claimAll()
				tbl42.claimBats()
			end
		end,
	},
}

local function fn51()
	while fn2() do
		task.wait(0.05)
		tbl45.beat = tbl45.beat + 1

		for _, v5 in ipairs(tbl47) do
			if tbl45.beat % v5.every == 0 then
				local ok, result = pcall(v5.fn)

				if not ok then
					tbl45.lastFault = tostring(result):sub(1, 80)
				end
			end
		end

		if tbl45.panel then
			pcall(tbl45.panel)
		end
	end
end

tbl45.rift = function()
	if tbl45.riftBusy then
		return
	end
	tbl45.riftBusy = true
	pcall(tbl26.step)
	tbl45.riftBusy = false
end

local function fn52()
	while fn2() do
		task.wait(0.05)

		if tbl2.autoRift then
			tbl45.rift()
		end
	end
end

local function fn53()
	while fn2() do
		task.wait(0.05)

		if tbl2.bat then
			pcall(tbl33.step)
		end

		if tbl2.duel then
			pcall(tbl27.sweep)
		end

		if tbl2.rescue and tbl45.busy ~= "-" and tbl8.downed() then
			pcall(tbl28.rescue)
		end
	end
end

tbl45.start = function()
	task.spawn(fn50)
	task.spawn(fn51)
	task.spawn(fn52)
	task.spawn(fn53)

	fn3(localPlayer.CharacterAdded:Connect(function()
		task.wait(0.05)

		if tbl2.noRagdoll then
			tbl28.noRagdoll(true)
		end

		tbl32.watch(localPlayer.Character)
	end))

	tbl32.watch(localPlayer.Character)
	tbl43.arm()
	tbl43.blockHop()
	tbl19.listen()
	tbl12.listen()
	tbl35.listen()
	tbl7.arm()

	if tbl2.noRagdoll then
		tbl28.noRagdoll(true)
	end
end

local tbl48 = {}

if not (function()
	local function gethui_()
		return localPlayer:FindFirstChildOfClass("PlayerGui") or localPlayer:WaitForChild("PlayerGui", 10)
	end

	local function fn54()
		local tbl49 = { gethui_() }

		local ok, result = pcall(function()
			return gethui and gethui()
		end)

		if ok and typeof(result) == "Instance" then
			tbl49[#tbl49 + 1] = result
		end

		local ok2, result2 = pcall(function()
			return game:GetService("CoreGui")
		end)

		if ok2 and result2 then
			tbl49[#tbl49 + 1] = result2
		end

		for _, v5 in ipairs(tbl49) do
			pcall(function()
				for _, child in ipairs(v5:GetChildren()) do
					if child.Name == "NightHub" or child.Name == "NightEggTags" then
						pcall(function()
							child:Destroy()
						end)
					end
				end
			end)
		end
	end

	fn54()
	local gethui_2 = rawget(genv, "gethui")
	genv.gethui = gethui_

	local ok, night = pcall(function()
		return loadstring(game:HttpGet("https://raw.githubusercontent.com/WhiteX1208/Scripts/refs/heads/main/Ui-Library/Loader.luau"))()
	end)

	if (not ok or type(night) ~= "table") and type(isfile) == "function" and type(readfile) == "function" and isfile("NightUI.lua") then
		ok, night = pcall(function()
			return loadstring(readfile("NightUI.lua"))()
		end)
	end

	if not ok or type(night) ~= "table" then
		genv.gethui = gethui_2
		warn("[Night Hub] could not load the UI library: " .. tostring(night))
		return
	end

	local function note(arg, arg2)
		local status = tostring(arg or "-")
		tbl2.status = status

		pcall(function()
			night:Notify({ Kind = arg2 or "info", Title = tbl.Name, Content = status, Duration = 5 })
		end)
	end

	local v5 = night:CreateWindow({
		Title = tbl.Name,
		SubTitle = tbl.Game,
		Size = UDim2.fromOffset(680, 480),
		TabWidth = 142,
		Key = Enum.KeyCode.RightControl,
		Settings = { Save = true, Main = tbl.Name, Game = "StealAnEgg" },
	})

	local tbl49 = {
		farm = v5:AddTab({ Title = "Farm", Icon = "egg" }),
		pen = v5:AddTab({ Title = "Pen & Bag", Icon = "package" }),
		money = v5:AddTab({ Title = "Economy", Icon = "coins" }),
		speed = v5:AddTab({ Title = "Speed", Icon = "zap" }),
		event = v5:AddTab({ Title = "Events", Icon = "sparkles" }),
		safe = v5:AddTab({ Title = "Safety", Icon = "shield" }),
		info = v5:AddTab({ Title = "Info", Icon = "search" }),
		conf = v5:AddTab({ Title = "Settings", Icon = "settings" }),
	}

	genv.gethui = gethui_2
	local tbl50 = {}

	local function fn55(arg, arg2, arg3, arg4)
		tbl50[arg2] = arg:AddParagraph({ Title = arg3, Content = "...", Icon = arg4 })
		return tbl50[arg2]
	end

	local function post_(arg, arg2)
		local v6 = tbl50[arg]

		if v6 then
			pcall(function()
				v6:SetContent(arg2)
			end)
		end
	end

	local tbl51 = {}

	tbl45.mirror = function(arg, arg2)
		local v6 = tbl51[arg]

		if v6 then
			pcall(function()
				v6:SetValue(arg2, true)
			end)
		end
	end

	local function fn56(arg, arg2, arg3, arg4, arg5, arg6)
		local v6 = arg:AddToggle(arg2, {
			Title = arg3,
			Description = arg4,
			Icon = arg5,
			Default = tbl2[arg2],
			Callback = function(arg7)
				tbl2[arg2] = arg7

				if arg6 then
					arg6(arg7)
				end
			end,
		})

		tbl51[arg2] = v6
		return v6
	end

	local function fn57(arg, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9)
		return arg:AddSlider(arg2, {
			Title = arg3,
			Description = arg4,
			Icon = arg5,
			Min = arg6,
			Max = arg7,
			Default = tbl2[arg2],
			Rounding = arg8 or 0,
			Callback = function(arg10)
				tbl2[arg2] = arg10

				if arg9 then
					arg9(arg10)
				end
			end,
		})
	end

	local function fn58(arg)
		return function(arg2)
			local tbl52 = {}

			if type(arg2) == "table" then
				for k, v6 in pairs(arg2) do
					if type(k) == "number" then
						tbl52[v6] = true
					elseif v6 then
						tbl52[k] = true
					end
				end
			end

			tbl2[arg] = tbl52
		end
	end

	local function fn59(arg)
		local tbl52 = {}
		local v6 = pairs
		arg = arg or {}

		for k, v7 in v6(arg) do
			if v7 then
				tbl52[#tbl52 + 1] = k
			end
		end

		table.sort(tbl52)
		return tbl52
	end

	local tbl52 = {}

	local function fn60(arg, arg2, arg3, arg4)
		local v6 = arg:AddSection(arg2, arg4)

		pcall(function()
			v6:SetIcon(arg3)
		end)

		tbl52[#tbl52 + 1] = v6
		return v6
	end

	local function fn61(arg)
		local items = arg.Items or arg.Scroll or arg.ItemsFrame or arg.Container

		if not items then
			local ok2

			ok2, items = pcall(function()
				return arg:FindFirstChild("Items") or arg:FindFirstChild("Scroll")
			end)

			if not (ok2 and items) then
				return 0
			end
		end

		if not items or not items.GetChildren then
			return 0
		end
		local n4 = 0

		for _, child in ipairs(items:GetChildren()) do
			if child.Name == "Row" then
				n4 += 1
			end
		end

		return n4
	end

	local function shutEmpty()
		local n4 = 0

		for _, v6 in ipairs(tbl52) do
			if not v6.Folded and fn61(v6) == 0 then
				v6.Folded = true
				local items = v6.Items or v6.Scroll or v6.ItemsFrame or v6.Container

				if not items then
					local ok2, result = pcall(function()
						return v6:FindFirstChild("Items") or v6:FindFirstChild("Scroll")
					end)

					if ok2 and result then
						items = result
					end
				end

				if items and items.AutomaticSize ~= nil then
					pcall(function()
						items.AutomaticSize = Enum.AutomaticSize.None
						items.Size = UDim2.new(1, 0, 0, 0)
					end)
				end

				local head = v6.Card and v6.Card:FindFirstChild("Head")
				head = head and head:FindFirstChild("Art")

				if head then
					head.Rotation = 0
				end

				n4 += 1
			end
		end

		return n4
	end

	local function fn62()
		post_("move", tbl8.text())
	end

	local mainLoop = fn60(tbl49.farm, "Main loop", "play", "turning one on switches the others off")

	fn56(mainLoop, "farm", "Auto Steal Eggs", "Finds an egg, grabs it, carries it back across the safe line and drops it into your pen.", "egg", function(arg)
		if arg then
			tbl45.solo("farm")
		else
			tbl8.cancel()
		end
	end)

	fn56(mainLoop, "highValue", "Steal High Value", "Always runs at the single richest egg on the whole map, whatever the area picker, the priority picker and Skip Areas You Cannot Outrun say. The locked areas hold eggs worth twenty times the ones you can walk into, and the knock teleport gets you there whether or not your SpeedPower has unlocked them.", "gem")
	fn56(mainLoop, "instant", "Instant Steal", "The Forest guard is the only one your own client simulates, so its hit is a single message you send yourself. Holding a bait egg and firing it puts you in the knock state, and the server accepts a long teleport for as long as that lasts. Targets under 260 studs skip the bait and warp straight in.", "zap")
	local movement = fn60(tbl49.farm, "Movement", "route")

	movement:AddDropdown("moveMode", {
		Title = "Travel mode",
		Description = "Fly pushes you with a BodyVelocity just above the ground and reaches 1200. It is the only mode the server accepts at speed. Tween slides your CFrame instead, smoother to watch but capped at 700. Neither one climbs into the air.",
		Icon = "route",
		Values = { "Fly", "Tween" },
		Default = tbl2.moveMode,
		Callback = function(moveMode)
			tbl2.moveMode = moveMode
			fn62()
		end,
	})

	fn57(movement, "moveSpeed", "Travel speed", "Studs per second. The slider goes to 1200 but Tween clamps itself down to 700.", "gauge", 20, 1200, 0, fn62)
	fn56(movement, "weave", "Zigzag Escape", "While carrying an egg home the route weaves side to side instead of running a straight line, because a guard closes on a steady heading far too easily. Each waypoint raycasts left and right first and only swings as far as the free space allows, so it never clips a wall, and it always swings away from the nearest guard.", "waypoints")
	fn55(movement, "move", "Movement", "route")
	local tbl53 = {}

	for _, v6 in ipairs(tbl6.ladder()) do
		tbl53[#tbl53 + 1] = v6.Id
	end

	local area = fn60(tbl49.farm, "Area", "map")

	area:AddDropdown("areaMode", {
		Title = "Area choice",
		Description = "Auto by speed takes the highest area you can actually outrun. Whole map ignores the area limit.",
		Icon = "map",
		Values = { "Auto by speed", "Pick by hand", "Whole map" },
		Default = tbl2.areaMode,
		Callback = function(areaMode)
			tbl2.areaMode = areaMode
		end,
	})

	area:AddDropdown("area", {
		Title = "Manual area",
		Description = "Only used while Area choice is set to Pick by hand.",
		Icon = "map-pin",
		Values = tbl53,
		Default = tbl2.area,
		Callback = function(area2)
			tbl2.area = area2
		end,
	})

	fn56(area, "safeOnly", "Skip Areas You Cannot Outrun", "Ignores eggs in any area your SpeedPower has not unlocked. Turn it off if you want to gamble.", "shield-check")
	local targetPriority = fn60(tbl49.farm, "Target priority", "trending-up")

	targetPriority:AddDropdown("pickMode", {
		Title = "Pick by",
		Description = "Value goes for the richest egg. Biggest goes for size. Rarest goes by rarity number. Nearest is the fastest round trip.",
		Icon = "trending-up",
		Values = { "Value", "Biggest", "Rarest", "Nearest" },
		Default = tbl2.pickMode,
		Callback = function(pickMode)
			tbl2.pickMode = pickMode
		end,
	})

	fn56(targetPriority, "useRanks", "Filter By Rarity", "When on, only the rarities ticked below get picked up.", "funnel")

	targetPriority:AddDropdown("ranks", {
		Title = "Rarities to steal",
		Description = "Tick as many as you like. Leaving it empty means take everything.",
		Icon = "gem",
		Values = tbl11.Ranks,
		Default = fn59(tbl2.ranks),
		Multi = true,
		Callback = fn58("ranks"),
	})

	fn57(targetPriority, "rateFloor", "Skip eggs below ($/s)", "Any egg that would earn less than this is left alone. Set 0 to take everything.", "dollar-sign", 0, 5000000, 0)
	local status = fn60(tbl49.farm, "Status", "activity")
	fn55(status, "farm", "Current run", "activity")
	fn55(status, "dash", "Instant Steal", "zap")

	status:AddButton({
		Title = "Rescan the map",
		Description = "Pull a fresh egg snapshot from the server right now.",
		Icon = "refresh-cw",
		Label = "Scan",
		Callback = function()
			tbl6.field(true)
			post_("map", tbl36.mapText(12))
			post_("dash", tbl13.text())
			note(("found %d eggs on the map"):format(tbl11.seen))
		end,
	})

	local placingEggs = fn60(tbl49.pen, "Placing eggs", "layout-grid")
	fn56(placingEggs, "autoPlace", "Auto Place Eggs", "Carries eggs from your bag to the pen and plants them.", "layout-grid")
	fn56(placingEggs, "placeAll", "Place Every Rarity", "Turn off to plant only the rarities ticked below.", "layers")

	placingEggs:AddDropdown("placeRanks", {
		Title = "Rarities to place",
		Description = "Only used once Place Every Rarity is off.",
		Icon = "gem",
		Values = tbl11.Ranks,
		Default = fn59(tbl2.placeRanks),
		Multi = true,
		Callback = fn58("placeRanks"),
	})

	fn56(placingEggs, "autoHatch", "Auto Hatch", "Any egg that has finished growing hatches immediately.", "sunrise")
	fn56(placingEggs, "autoWearBest", "Auto Equip Best Pets", "Keeps your highest earning pets in the pen.", "star")
	local eggBag = fn60(tbl49.pen, "Egg bag", "package")
	fn55(eggBag, "bag", "Eggs you own", "package")

	eggBag:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("bag", tbl14.text())
			end,
		},
		{
			Title = "Place all now",
			Icon = "download",
			Filled = true,
			Callback = function()
				task.spawn(function()
					local v6 = tbl15.dump()
					post_("bag", tbl14.text())
					note(("placed %d eggs"):format(v6))
				end)
			end,
		},
	})

	local petPen = fn60(tbl49.pen, "Pet pen", "house")
	fn55(petPen, "pen", "Pen right now", "house")

	petPen:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("pen", tbl16.penText())
			end,
		},
		{
			Title = "Equip best pets",
			Icon = "star",
			Filled = true,
			Callback = function()
				task.spawn(function()
					tbl16.wearBest()
					post_("pen", tbl16.penText())
					note(tbl16.sell)
				end)
			end,
		},
	})

	local automatic = fn60(tbl49.money, "Automatic", "gift")
	fn56(automatic, "autoClaim", "Auto Claim", "Collects offline money, index rewards, the group perk and the limited egg.", "gift")
	fn56(automatic, "autoBase", "Auto Base Upgrade", "Only fires when you can already afford it.", "circle-arrow-up")

	fn56(automatic, "autoSell", "Auto Sell Junk", "Turns on the game's own auto-sell filter for the rarities ticked below.", "trash-2", function(arg)
		tbl16.autoSell(arg)
	end)

	automatic:AddDropdown("sellRanks", {
		Title = "Rarities to sell",
		Description = "This only affects pets you receive from now on, it never touches what you already own.",
		Icon = "tag",
		Values = tbl11.Ranks,
		Default = fn59(tbl2.sellRanks),
		Multi = true,
		Callback = function(arg)
			fn58("sellRanks")(arg)

			if tbl2.autoSell then
				tbl16.autoSell(true)
			end
		end,
	})

	local sellingPets = fn60(tbl49.money, "Selling pets", "shopping-bag")
	fn55(sellingPets, "sell", "Pets you own", "shopping-bag")
	fn57(sellingPets, "keepBest", "Keep the best N pets", "Used by the Sell all but the best button below.", "bookmark", 0, 40, 0)

	sellingPets:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("sell", tbl16.penText())
			end,
		},
		{
			Title = "Sell all but the best",
			Icon = "scissors",
			Callback = function()
				v5:Dialog({
					Title = "Sell pets",
					Content = ("Keep your %d strongest pets and sell everything else. This cannot be undone."):format(tbl2.keepBest),
					Buttons = {
						{
							Title = "Sell",
							Filled = true,
							Callback = function()
								task.spawn(function()
									tbl16.sellWorst(tbl2.keepBest)
									post_("sell", tbl16.penText())
									note(tbl16.sell)
								end)
							end,
						},
						{ Title = "Cancel" },
					},
				})
			end,
		},
	})

	local sellingEggs = fn60(tbl49.money, "Selling eggs", "egg")
	fn55(sellingEggs, "egg", "What your eggs are worth", "egg")

	sellingEggs:AddDropdown("eggFloor", {
		Title = "Sell eggs below",
		Description = "Eggs at this rarity and above are kept. Anything below it gets sold.",
		Icon = "arrow-down",
		Values = tbl11.Ladder,
		Default = tbl2.eggFloor,
		Callback = function(eggFloor)
			tbl2.eggFloor = eggFloor
		end,
	})

	sellingEggs:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("egg", tbl16.eggText())
			end,
		},
		{
			Title = "Sell junk eggs",
			Icon = "trash-2",
			Callback = function()
				task.spawn(function()
					tbl16.sellEggs(true)
					post_("egg", tbl16.eggText())
					note(tbl16.sell)
				end)
			end,
		},
	})

	local fuseMachine = fn60(tbl49.money, "Fuse machine", "combine")
	fn56(fuseMachine, "fuse", "Auto Fuse", "Groups three identical pets, pays the price and takes the egg straight away without walking to the machine.", "combine")

	fuseMachine:AddDropdown("fuseOrder", {
		Title = "Which three to feed",
		Description = "Smallest first burns your junk pets for the cheapest price. Biggest first costs far more but rolls from a higher average size.",
		Icon = "arrow-up-down",
		Values = { "Smallest first", "Biggest first" },
		Default = tbl2.fuseOrder,
		Callback = function(fuseOrder)
			tbl2.fuseOrder = fuseOrder
		end,
	})

	fn56(fuseMachine, "fuseKeepMutated", "Never Fuse Mutated Pets", "One mutated pet doubles the fuse price and the mutation is lost in the roll anyway, so leave this on.", "shield")
	fn55(fuseMachine, "fuse", "Fuse machine", "combine")

	fuseMachine:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("fuse", tbl17.text())
			end,
		},
		{
			Title = "Fuse once",
			Icon = "play",
			Filled = true,
			Callback = function()
				task.spawn(function()
					tbl17.once()
					post_("fuse", tbl17.text())
					note(tbl17.note)
				end)
			end,
		},
		{
			Title = "Empty the machine",
			Icon = "eraser",
			Callback = function()
				task.spawn(function()
					local v6, v7 = tbl17.tidy()
					post_("fuse", tbl17.text())
					note(("pulled %s pets back out"):format(tostring(v7 or 0)))
				end)
			end,
		},
	})

	local shrineFusion = fn60(tbl49.money, "Shrine fusion", "flame")
	fn55(shrineFusion, "shrine", "Shrine", "flame")

	shrineFusion:AddButton({
		Title = "Read the shrine",
		Description = "Shows the live Light and Dark recipes and whether the shrine will take an offering.",
		Icon = "refresh-cw",
		Label = "Read",
		Callback = function()
			post_("shrine", tbl18.text())
		end,
	})

	local treadmill = fn60(tbl49.speed, "Treadmill", "activity")

	fn56(treadmill, "grind", "Auto Treadmill", "Stands on the belt to earn SpeedPower.", "activity", function(arg)
		if arg then
			tbl45.solo("grind")
		else
			tbl8.cancel()
		end
	end)

	fn56(treadmill, "ghost", "Ghost Treadmill", "Mounts the belt once then breaks the anchor the server puts on you, so SpeedPower keeps ticking while you run the map.", "ghost", function(arg)
		task.spawn(function()
			if arg then
				local v6, v7 = tbl19.ghostOn()

				if not v6 then
					tbl2.ghost = false
					tbl45.mirror("ghost", false)
					note("ghost failed: " .. tostring(v7), "warn")
				else
					note("ghost on, speed keeps earning while you move")
				end
			else
				tbl19.ghostOff()
			end
		end)
	end)

	fn57(treadmill, "speedWant", "Stop at WalkSpeed", "Steps off the belt once you reach this. Set 0 to grind forever.", "flag", 0, 300, 0)
	fn56(treadmill, "millUpgrade", "Auto Upgrade Treadmill", "Buys the next tier as soon as you can afford it.", "circle-arrow-up")
	local status2 = fn60(tbl49.speed, "Status", "gauge")
	fn55(status2, "speed", "Speed status", "gauge")

	status2:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("speed", tbl19.text())
			end,
		},
		{
			Title = "Upgrade now",
			Icon = "arrow-up",
			Callback = function()
				task.spawn(function()
					tbl19.raise()
					post_("speed", tbl19.text())
					note(tbl19.note)
				end)
			end,
		},
		{
			Title = "Get off the belt",
			Icon = "log-out",
			Callback = function()
				tbl2.grind = false
				tbl45.mirror("grind", false)
				tbl19.dismount()
				post_("speed", tbl19.text())
			end,
		},
	})

	local trails = fn60(tbl49.speed, "Trails", "wind")
	fn56(trails, "autoTrail", "Auto Buy Best Trail", "A trail multiplies treadmill gain. Off by default because the good ones cost hundreds of billions.", "wind")
	fn55(trails, "trail", "Trail", "wind")

	trails:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("trail", tbl20.text())
			end,
		},
		{
			Title = "Wear the best I own",
			Icon = "check",
			Callback = function()
				task.spawn(function()
					local v6 = tbl20.wearBest()
					post_("trail", tbl20.text())
					note(v6 and tbl20.note or "already wearing the best one you own")
				end)
			end,
		},
		{
			Title = "Buy the best",
			Icon = "shopping-cart",
			Callback = function()
				v5:Dialog({
					Title = "Buy a trail",
					Content = "The server takes the money immediately and there is no refund. Sure?",
					Buttons = {
						{
							Title = "Buy",
							Filled = true,
							Callback = function()
								task.spawn(function()
									tbl20.buyBest()
									post_("trail", tbl20.text())
									note(tbl20.note)
								end)
							end,
						},
						{ Title = "Cancel" },
					},
				})
			end,
		},
	})

	local greatBloom = fn60(tbl49.event, "Great Bloom", "flower", "every 30 minutes, runs for just under 5")

	fn56(greatBloom, "bloom", "Auto Great Bloom", "Equips your bat, hits every tree in range and vacuums the crystals before they rot after 60 seconds.", "flower", function(arg)
		if arg then
			tbl45.solo("bloom")
		else
			tbl8.cancel()
		end
	end)

	fn57(greatBloom, "bloomRange", "Tree range", "The game's own reach is 10 studs plus the tree radius. Anything higher relies on the server not rechecking distance.", "circle-dot", 10, 250, 0)
	fn56(greatBloom, "bloomVacuum", "Crystal Vacuum", "Crystals rot after 60 seconds, so this is the part that actually pays.", "magnet")
	fn56(greatBloom, "bloomDeposit", "Auto Deposit Crystals", "Feeds them into the Sakura incubator to roll a mutation.", "upload")
	local bloomStatus = fn60(tbl49.event, "Bloom status", "magnet")
	fn55(bloomStatus, "bloom", "Great Bloom", "flower")

	bloomStatus:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("bloom", tbl21.text())
			end,
		},
		{
			Title = "Roll mutation",
			Icon = "dices",
			Callback = function()
				task.spawn(function()
					tbl21.mutate()
					post_("bloom", tbl21.text())
					note(tbl21.note)
				end)
			end,
		},
	})

	local drone = fn60(tbl49.event, "Drone", "plane", "ScrambleLocalVisuals - same as Drone.lua")

	fn56(drone, "drone", "Auto Drone", "Finds the nearest ScrambleLocalVisuals drone, equips your bat (ToolTip == Bat) and tweens to its PrimaryPart at 500 studs/s. Uses the same Humanoid bypass the main script uses. Toggle uses solo mode like Bloom/Beast, turning off Farm/Grind.", "plane", function(arg)
		if arg then
			tbl45.solo("drone")
		else
			tbl8.cancel()
		end
	end)

	fn57(drone, "droneSpeed", "Drone speed", "Tween speed in studs/s. Original Drone.lua uses 500. Time = distance / speed, Linear easing.", "gauge", 50, 1200, 0)
	fn55(drone, "drone", "Drone", "plane")

	drone:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("drone", tbl34.text())
			end,
		},
		{
			Title = "Get Bat",
			Icon = "hand",
			Callback = function()
				task.spawn(function()
					local v6 = tbl34.holdBat()
					post_("drone", tbl34.text())
					note(v6 and "holding " .. v6.Name or "no bat found - claim from Index", v6 and "info" or "warn")
				end)
			end,
		},
	})

	local v6 = fn60(tbl49.event, "Dr. Scramble", "zap", "Event every 30m for 5m until Sep 26 - full auto")

	fn56(v6, "scramble", "Auto Dr. Scramble", "Full auto for Dr. Scramble: tweens to nearest drone in Abyss Ocean+ at 500 studs/s, uses bat within 12 studs (game's own auto-attack), auto-collects Samples + DroneParts + drops. Handles LostPart1/2 and Vault via Request. Solo mode like Bloom.", "zap", function(arg)
		if arg then
			tbl45.solo("scramble")
		else
			tbl8.cancel()
		end
	end)

	fn57(v6, "scrambleSpeed", "Scramble speed", "Tween speed for drones/drops. Original Drone.lua uses 500. Time = dist/speed, Linear.", "gauge", 50, 1200, 0)
	fn55(v6, "scramble", "Dr. Scramble", "zap")

	v6:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("scramble", tbl35.text())
			end,
		},
		{
			Title = "Get Bat",
			Icon = "hand",
			Callback = function()
				task.spawn(function()
					local v7 = tbl35.holdBat()
					post_("scramble", tbl35.text())
					note(v7 and "holding " .. v7.Name or "no bat found - claim from Index", v7 and "info" or "warn")
				end)
			end,
		},
	})

	local rift = fn60(tbl49.event, "Rift", "sparkles")

	fn56(rift, "autoRift", "Auto Rift", "Starts the moment you switch it on, then retries every second. It reads the live recipe and hands in the cheapest pet you own for each slot it asks for. Favourites and anything loaded in the fuse machine are never offered, and pets sitting in your pen are only used when nothing spare matches.", "sparkles", function(arg)
		if arg then
			task.spawn(tbl45.rift)
		end
	end)

	fn56(rift, "riftReroll", "Reroll When Short", "If you cannot cover the recipe, spend a free reroll on a new one. It never spends money, it stops as soon as the free rerolls run out.", "shuffle")
	fn55(rift, "rift", "Rift", "sparkles")

	rift:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("rift", tbl26.text())
			end,
		},
		{
			Title = "Hand in recipe",
			Icon = "check",
			Filled = true,
			Callback = function()
				task.spawn(function()
					local v7, v8 = tbl26.feed()
					post_("rift", tbl26.text())
					note(v7 and tbl26.note or tostring(v8), v7 and "info" or "warn")
				end)
			end,
		},
		{
			Title = "Reroll recipe",
			Icon = "shuffle",
			Callback = function()
				task.spawn(function()
					tbl26.refresh()
					post_("rift", tbl26.text())
					note(tbl26.note)
				end)
			end,
		},
	})

	local hungryMonster = fn60(tbl49.event, "Hungry Monster", "bug")

	fn56(hungryMonster, "beast", "Auto Feed Monster", "Carries parasite eggs to your monster, feeds until the bar fills, then takes and opens the chest.", "bug", function(arg)
		if arg then
			tbl45.solo("beast")
		else
			tbl8.cancel()
		end
	end)

	fn56(hungryMonster, "beastClaim", "Auto Open Chests", "As soon as the bar fills, grab the chest and open it.", "gift")
	fn57(hungryMonster, "beastKeep", "Keep N parasite eggs", "The monster eats the parasite but keeps the egg, so there is little reason to hoard them.", "bookmark", 0, 20, 0)
	fn55(hungryMonster, "beast", "Hungry Monster", "bug")

	hungryMonster:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("beast", tbl22.text())
			end,
		},
		{
			Title = "Open chests now",
			Icon = "box",
			Callback = function()
				task.spawn(function()
					local v7 = tbl22.openChests()
					post_("beast", tbl22.text())
					note(v7 > 0 and ("opened %d chests"):format(v7) or tbl22.note)
				end)
			end,
		},
	})

	local v7 = fn60(tbl49.event, "Boss & Light vs Darkness", "swords")
	fn55(v7, "boss", "Boss", "swords")

	v7:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("boss", tbl24.text())
			end,
		},
		{
			Title = "Enter arena",
			Icon = "door-open",
			Filled = true,
			Callback = function()
				task.spawn(function()
					tbl24.enter()
					post_("boss", tbl24.text())
					note(tbl24.note)
				end)
			end,
		},
	})

	fn56(v7, "duel", "Auto Collect Rings", "Sweeps up Light vs Darkness rings and power-ups. Only runs while the server raises that flag.", "circle")
	fn57(v7, "duelRange", "Collect range", "How far to sweep for rings and orbs, in studs.", "circle-dot", 20, 400, 0)
	fn55(v7, "duel", "Light vs Darkness", "circle")

	v7:AddButton({
		Title = "Read score",
		Icon = "refresh-cw",
		Label = "Read",
		Callback = function()
			post_("duel", tbl27.text())
		end,
	})

	local guards = fn60(tbl49.safe, "Guards", "shield")
	fn55(guards, "ladder", "Which areas you can outrun", "shield")

	guards:AddButton({
		Title = "Recompute guard table",
		Description = "Rebuilt from the area geometry and guard config inside the game, not from guessed numbers.",
		Icon = "refresh-cw",
		Label = "Compute",
		Callback = function()
			post_("ladder", tbl28.ladderText())
		end,
	})

	local knockdowns = fn60(tbl49.safe, "Knockdowns", "person-standing")

	fn56(knockdowns, "noRagdoll", "Anti Ragdoll", "Blocks ragdoll at the client module, so a guard hit never puts you on the floor.", "person-standing", function(arg)
		tbl28.noRagdoll(arg)
	end)

	fn56(knockdowns, "rescue", "Auto Recover", "If something still knocks you down, stand up at once and head back to the safe zone.", "life-buoy")

	knockdowns:AddButton({
		Title = "Clear ragdoll now",
		Description = "Strips every ragdoll constraint still attached to you.",
		Icon = "wand",
		Label = "Clear",
		Callback = function()
			tbl28.scrub(localPlayer.Character)
			tbl8.upright()
			note("ragdoll cleared")
		end,
	})

	local traps = fn60(tbl49.safe, "Traps", "bomb")
	fn56(traps, "trap", "Trap Bypass", "Disarms every enemy trap the moment it is placed, and if one still fires you are loose again in about a tenth of a second.", "bomb")
	fn56(traps, "trapEsp", "Trap ESP", "The game only shows you your own traps. This outlines everyone else's in red.", "eye")
	fn55(traps, "trap", "Traps", "bomb")

	traps:AddButton({
		Title = "Rescan traps",
		Icon = "refresh-cw",
		Label = "Scan",
		Callback = function()
			tbl32.sweep()
			post_("trap", tbl32.text())
		end,
	})

	local bat = fn60(tbl49.safe, "Bat", "swords")
	fn56(bat, "bat", "Bat Aura", "Holds your longest reach bat and swings at the closest player on the 0.72 second cooldown the server enforces.", "swords")
	fn57(bat, "batRange", "Target scan range", "Anything past your bat reach needs Blink Into Range on.", "radar", 10, 250, 0)
	fn56(bat, "batClose", "Blink Into Range", "If the target sits outside your reach, hop closer first so the swing actually lands.", "move")
	fn55(bat, "bat", "Bat", "swords")

	bat:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("bat", tbl33.text())
			end,
		},
		{
			Title = "Equip best bat",
			Icon = "hand",
			Callback = function()
				local v8 = tbl33.best()

				if v8 then
					tbl6.holdTool(v8)
					note(("holding %s, reach %.1f studs"):format(v8.Name, tbl33.reach(v8)))
				else
					note("no bat in your backpack", "warn")
				end

				post_("bat", tbl33.text())
			end,
		},
	})

	local v8 = fn60(tbl49.info, "Egg X-ray", "eye")

	fn56(v8, "esp", "Egg X-ray ESP", "Draws the pet sealed inside every egg with its rarity, cash per second and size. Shows through walls.", "eye", function(arg)
		if not arg then
			tbl36.clear()
		end
	end)

	local tbl54 = { "All", "Uncommon and up", "Rare and up", "Epic and up", "Legendary and up", "Mythic and up" }

	v8:AddDropdown("espFloor", {
		Title = "Only show from",
		Description = "Filters out the low tiers so the screen stays readable.",
		Icon = "funnel",
		Values = tbl54,
		Default = tbl54[1],
		Callback = function(arg)
			for i, v9 in ipairs(tbl54) do
				if v9 == arg then
					tbl2.espFloor = i == 1 and 0 or i
					break
				end
			end
		end,
	})

	local eggsOnTheMap = fn60(tbl49.info, "Eggs on the map", "map")
	fn55(eggsOnTheMap, "map", "What is out there", "map")

	eggsOnTheMap:AddButton({
		Title = "Rescan the map",
		Icon = "refresh-cw",
		Label = "Scan",
		Callback = function()
			tbl6.field(true)
			post_("map", tbl36.mapText(12))
		end,
	})

	local nextWave = fn60(tbl49.info, "Next wave", "dices")
	fn55(nextWave, "odds", "Odds for the next wave", "dices")

	nextWave:AddButton({
		Title = "Recompute odds",
		Description = "Read straight off each area's own drop table inside the game.",
		Icon = "refresh-cw",
		Label = "Compute",
		Callback = function()
			post_("odds", tbl36.oddsText(14))
		end,
	})

	local index = fn60(tbl49.info, "Index", "book")
	fn55(index, "codex", "Index", "book")

	index:AddButtons({
		{
			Title = "Refresh",
			Icon = "refresh-cw",
			Callback = function()
				post_("codex", tbl42.text())
			end,
		},
		{
			Title = "Claim index rewards",
			Icon = "gift",
			Filled = true,
			Callback = function()
				task.spawn(function()
					tbl42.claimAll()
					post_("codex", tbl42.text())
					note(tbl42.note)
				end)
			end,
		},
		{
			Title = "Claim area bats",
			Icon = "swords",
			Callback = function()
				task.spawn(function()
					local v9 = tbl42.claimBats()
					post_("codex", tbl42.text())
					note(v9 > 0 and ("claimed %d bats"):format(v9) or "no area index is complete yet")
				end)
			end,
		},
	})

	local performance = fn60(tbl49.conf, "Performance", "gauge")

	fn56(performance, "hideOthers", "Hide Other Players' Stuff", "Other players' pets and eggs are the heaviest thing in this game. Fully reversible, nothing is destroyed.", "eye-off", function(arg)
		task.spawn(function()
			local v9 = tbl37.setHide(arg)
			post_("lite", tbl37.text())
			note(arg and ("stashed %d models"):format(v9) or ("restored %d models"):format(v9))
		end)
	end)

	fn56(performance, "lowFx", "Mute Effects", "Switches off smoke, fire, beams, trails and global shadows.", "sparkle", function(arg)
		task.spawn(function()
			local v9 = tbl37.setFx(arg)
			post_("lite", tbl37.text())
			note(arg and ("muted %d effects"):format(v9) or "effects restored")
		end)
	end)

	fn55(performance, "lite", "Performance", "gauge")
	local misc = fn60(tbl49.conf, "Misc", "settings")
	fn56(misc, "antiAfk", "Anti AFK", "Stops the idle kick.", "coffee")

	misc:AddKeybind("uiKey", {
		Title = "Toggle key",
		Description = "Click the box on the right, then press a new key to rebind.",
		Icon = "keyboard",
		Default = "RightControl",
		Mode = "Toggle",
	})

	local uiKey = night.Options and night.Options.uiKey

	if uiKey and uiKey.OnChanged then
		uiKey:OnChanged(function(arg)
			v5:SetKey(arg)
			note("toggle key is now " .. tostring(arg))
		end)
	end

	local overview = fn60(tbl49.conf, "Overview", "activity")
	fn55(overview, "hud", "Stats", "activity")

	overview:AddButtons({
		{
			Title = "Refresh everything",
			Icon = "refresh-cw",
			Callback = function()
				for k, v9 in pairs(tbl44) do
					local ok2, result = pcall(v9)

					if ok2 then
						post_(k, result)
					end
				end

				note("every panel refreshed")
			end,
		},
		{
			Title = "Unload",
			Icon = "power",
			Callback = function()
				v5:Dialog({
					Title = "Unload the script",
					Content = "Stops every loop, puts back everything it changed and closes this window.",
					Buttons = {
						{
							Title = "Unload",
							Filled = true,
							Callback = function()
								if genv.NightSAE then
									genv.NightSAE.Unload()
								end
							end,
						},
						{ Title = "Cancel" },
					},
				})
			end,
		},
	})

	tbl48.Night = night
	tbl48.Window = v5
	tbl48.note = note
	tbl48.post = post_
	tbl48.shutEmpty = shutEmpty
	return true
end)() then
	warn("[Night Hub] the UI never came up, stopping")
	return
end

task.defer(function()
	tbl48.shutEmpty()
end)

tbl44.farm = function()
	local tbl49 = {}
	local str2 = ("doing: %s"):format(tbl12.note)
	local str3 = ("target: %s"):format(tostring(tbl12.target or "none picked"))
	local str4 = ("grabbed %d | banked %d | missed %d | lost %d"):format(tbl12.grabbed, tbl12.banked, tbl12.misses, tbl12.lost)
	local str5 = "area: %s | %d eggs loose on the map"
	local format = str5.format
	local v5 = tostring
	local str6 = tbl12.zone() or "whole map"
	local seen = tbl11.seen
	local v6 = format(str5, v5(str6), seen)
	local v7 = table.pack(tbl8.text())
	tbl49[1] = str2
	tbl49[2] = str3
	tbl49[3] = str4
	tbl49[4] = v6

	do
		local values = table.pack(table.unpack(v7, 1, v7.n))
		table.move(values, 1, values.n, 5, tbl49)
	end

	if tbl2.instant then
		tbl49[#tbl49 + 1] = ""
		tbl49[#tbl49 + 1] = ("instant steal: %d launches, %d landed, %d failed"):format(tbl13.hits, tbl13.wins, tbl13.fails)
	end

	return table.concat(tbl49, "\n")
end

tbl44.hud = function()
	local v5 = tbl6.save()
	local concat = table.concat
	local tbl49 = {}
	local str2 = ("money %s"):format(fn4(tonumber(v5 and v5.Money) or 0))
	local walkSpeed = tbl6.walkSpeed
	local str3 = ("SpeedPower %s  ->  WalkSpeed %.1f"):format(fn4(tbl6.speedPower()), walkSpeed())
	local count = tbl14.count
	local str4 = ("pen %d/%d | egg bag %d"):format(fn10(tbl6.pen()), tbl6.penCap(), count())
	local str5 = ("banked %d | placed %d | hatched %d"):format(tbl12.banked, tbl15.placed, tbl15.hatched)
	local str6 = ("rescues %d | knockdowns blocked %d | traps disarmed %d"):format(tbl28.saves, tbl28.blocked, tbl32.killed)
	local str7 = "running: %s"
	local format = str7.format
	local busy = tbl45.busy == "-" and "nothing" or tbl45.busy
	local v6 = table.pack(format(str7, busy))
	tbl49[1] = str2
	tbl49[2] = str3
	tbl49[3] = str4
	tbl49[4] = str5
	tbl49[5] = str6

	do
		local values = table.pack(table.unpack(v6, 1, v6.n))
		table.move(values, 1, values.n, 6, tbl49)
	end

	return concat(tbl49, "\n")
end

tbl44.bag = function()
	return tbl14.text()
end

tbl44.pen = function()
	return tbl16.penText()
end

tbl44.sell = function()
	return tbl16.penText()
end

tbl44.egg = function()
	return tbl16.eggText()
end

tbl44.fuse = function()
	return tbl17.text()
end

tbl44.shrine = function()
	return tbl18.text()
end

tbl44.speed = function()
	return tbl19.text()
end

tbl44.trail = function()
	return tbl20.text()
end

tbl44.bloom = function()
	return tbl21.text()
end

tbl44.rift = function()
	return tbl26.text()
end

tbl44.beast = function()
	return tbl22.text()
end

tbl44.boss = function()
	return tbl24.text()
end

tbl44.duel = function()
	return tbl27.text()
end

tbl44.ladder = function()
	return tbl28.ladderText()
end

tbl44.trap = function()
	return tbl32.text()
end

tbl44.bat = function()
	return tbl33.text()
end

tbl44.drone = function()
	return tbl34.text()
end

tbl44.scramble = function()
	return tbl35.text()
end

tbl44.map = function()
	return tbl36.mapText(12)
end

tbl44.odds = function()
	return tbl36.oddsText(14)
end

tbl44.codex = function()
	return tbl42.text()
end

tbl44.lite = function()
	return tbl37.text()
end

tbl44.dash = function()
	return tbl13.text()
end

tbl44.move = function()
	return tbl8.text()
end

tbl44.hop = function()
	return Hop.text()
end

local tbl49 = { "farm", "hud" }

local tbl50 = {
	"bag",
	"pen",
	"speed",
	"bloom",
	"beast",
	"trap",
	"bat",
	"drone",
	"scramble",
	"hop",
	"map",
	"move",
}

local n4 = 0

tbl45.panel = function()
	for _, v5 in ipairs(tbl49) do
		local ok, result = pcall(tbl44[v5])

		if ok then
			tbl48.post(v5, result)
		end
	end

	if tbl45.beat - n4 >= 12 then
		n4 = tbl45.beat

		for _, v5 in ipairs(tbl50) do
			local ok, result = pcall(tbl44[v5])

			if ok then
				tbl48.post(v5, result)
			end
		end
	end
end

task.spawn(function()
	task.wait(0.05)

	for k, v5 in pairs(tbl44) do
		local ok, result = pcall(v5)

		if ok then
			tbl48.post(k, result)
		end
	end
end)

genv.NightSAE = {
	Hub = tbl,
	State = tbl2,
	Api = tbl6,
	Move = tbl8,
	Egg = tbl11,
	Dash = tbl13,
	Bypass = tbl7,
	Farm = tbl12,
	Bag = tbl14,
	Place = tbl15,
	Econ = tbl16,
	Fuse = tbl17,
	Shrine = tbl18,
	Speed = tbl19,
	Trail = tbl20,
	Bloom = tbl21,
	Beast = tbl22,
	Boss = tbl24,
	Rift = tbl26,
	Duel = tbl27,
	Safe = tbl28,
	Trap = tbl32,
	Bat = tbl33,
	Drone = tbl34,
	Scramble = tbl35,
	Hop = Hop,
	Esp = tbl36,
	Lite = tbl37,
	Codex = tbl42,
	Run = tbl45,
	Window = tbl48.Window,
	Night = tbl48.Night,
	Unload = function()
		flag = false
		tbl2.farm = false
		tbl2.grind = false
		tbl2.bloom = false
		tbl2.beast = false
		tbl2.duel = false
		tbl2.bat = false
		tbl2.drone = false
		tbl2.scramble = false
		tbl2.autoHop = false
		tbl2.esp = false
		pcall(tbl8.halt)
		pcall(tbl28.noRagdoll, false)
		pcall(tbl28.heavy, false)
		pcall(tbl19.ghostOff)
		pcall(tbl36.clear)
		pcall(tbl32.clear)
		pcall(tbl37.restore)
		pcall(tbl37.setFx, false)

		for _, v5 in ipairs(tbl3) do
			pcall(function()
				v5:Disconnect()
			end)
		end

		table.clear(tbl3)

		pcall(function()
			tbl48.Window:Close()
		end)

		pcall(function()
			tbl48.Night:Destroy()
		end)

		genv.NightSAE = nil
	end,
	Set = function(arg, arg2)
		if tbl2[arg] == nil then
			return false, "no such field: " .. tostring(arg)
		end
		tbl2[arg] = arg2
		tbl45.mirror(arg, arg2)
		return true
	end,
}

tbl45.start()
tbl16.autoSell(tbl2.autoSell)
tbl48.note(("Ready - %s build %s"):format(tbl.Game, tbl.Build))
