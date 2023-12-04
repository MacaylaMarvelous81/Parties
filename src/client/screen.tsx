import Roact from "@rbxts/roact";
import StartScreen from "client/screens/start";

export default function Screen() {
	return (
		<screengui ResetOnSpawn={ false } IgnoreGuiInset={ true }>
			<StartScreen />
		</screengui>
	);
}
