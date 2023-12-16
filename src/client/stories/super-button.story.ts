import Roact from "@rbxts/roact";
import ReactRoblox from "@rbxts/react-roblox";
import { WithControls } from "@rbxts/ui-labs";
import { EnumList } from "@rbxts/ui-labs/out/ControlsUtil";
import { SuperButtonSize, SuperButton } from "client/components/super-button";
import { color } from "client/styles";
import assets from "shared/assets";

const controls = {
	size: EnumList(SuperButtonSize, "Long", false),
	title: "Title",
	description: "Description",
	textColor: color.black,
	badge: false,
	badgeText: "Text"
};

const Story: WithControls<typeof controls> = {
	summary: "A large button with an image background, an icon, a title, a description, and an optional badge.",
	controls: controls,
	story: (props) => {
		return Roact.createElement(SuperButton, {
			size: <SuperButtonSize>props.controls.size,
			icon: assets.ui.icons["plus-lg"],
			title: props.controls.title,
			description: props.controls.description,
			textColor: props.controls.textColor,
			image: assets.ui.button.long.inviting,
			badge: props.controls.badge,
			badgeText: props.controls.badgeText,
		});
	},
	react: Roact,
	reactRoblox: ReactRoblox
};

export = Story;
