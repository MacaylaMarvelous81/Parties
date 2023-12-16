import Roact from "@rbxts/roact";
import ReactRoblox from "@rbxts/react-roblox";
import { WithControls } from "@rbxts/ui-labs";
import LongButton from "client/components/long-button";
import { color } from "client/styles";
import assets from "shared/assets";

const controls = {
	title: "Title",
	description: "Description",
	textColor: color.black,
	badge: false,
	badgeText: "Text"
};

const Story: WithControls<typeof controls> = {
	summary: "A long button contains a title, description, and an optional badge over a background image. It should take up a whole row.",
	controls: controls,
	story: (props) => {
		return Roact.createElement(LongButton, {
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
