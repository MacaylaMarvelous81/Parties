import Roact from "@rbxts/roact";
import { createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import Screen from "client/screen";

const root = createRoot(Players.LocalPlayer.WaitForChild("PlayerGui"), {});
root.render(Roact.createElement(Screen));
