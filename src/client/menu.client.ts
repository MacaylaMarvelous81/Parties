import Roact from "@rbxts/roact";
import { Players } from "@rbxts/services";
import Screen from "client/screen";

Roact.mount(Roact.createElement(Screen), Players.LocalPlayer!.WaitForChild("PlayerGui"), "Screen")
