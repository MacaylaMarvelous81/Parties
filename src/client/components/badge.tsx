import Roact from "@rbxts/roact";
import useRem from "client/hooks/use-rem";
import { font, color } from "client/styles";

export default function Badge({ text }: { text: string }) {
	const rem = useRem();

	return (
		<frame BackgroundColor3={ color.vermillion } Size={ UDim2.fromOffset(rem(4.1875), rem(1.5)) } BorderSizePixel={ 0 }>
			<uilistlayout
				FillDirection={ Enum.FillDirection.Horizontal }
				HorizontalAlignment={ Enum.HorizontalAlignment.Center }
				VerticalAlignment={ Enum.VerticalAlignment.Center }
				Padding={ new UDim(0, rem(0.625)) }
				Wraps={ true } />
			<uicorner CornerRadius={ new UDim(0, rem(0.3125)) } />
			<textlabel
				BackgroundTransparency={ 1 }
				AutomaticSize={ Enum.AutomaticSize.XY }
				TextColor3={ color.white }
				FontFace={ font.bold }
				TextSize={ rem(1.25) }
				Text={ text }>
					{ Roact.createElement("UIFlexItem", {
						ItemLineAlignment: Enum.ItemLineAlignment.Stretch
					}) }
				</textlabel>
		</frame>
	);
}
