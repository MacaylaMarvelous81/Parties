import Roact from "@rbxts/roact";
import { font } from "client/styles";
import useRem from "client/hooks/use-rem";

export enum SuperButtonSize {
	Long,
	Thin
}

interface SuperButtonProps {
	size: SuperButtonSize;
	icon: string;
	title: string;
	description: string;
	textColor: Color3;
	image: string;
	badge: boolean;
	badgeText?: string;
	native?: Partial<InstanceProperties<ImageButton>>
}

export function SuperButton({ size, icon, title, description, textColor, image, badge, badgeText, native }: SuperButtonProps) {
	const rem = useRem();

	// Determine button width from size
	let width: number;
	switch (size) {
		case SuperButtonSize.Long:
			width = rem(68.5625);
			break;
		case SuperButtonSize.Thin:
			width = rem(33.1875);
			break;
	}

	return (
		<imagebutton Image={ image } { ...native } Size={ UDim2.fromOffset(width, rem(11.625)) }>
			<uilistlayout
				FillDirection={ Enum.FillDirection.Vertical }
				Padding={ new UDim(0, rem(1.0625)) } />
			<uipadding
				PaddingTop={ new UDim(0, rem(0.875)) }
				PaddingBottom={ new UDim(0, rem(0.875)) }
				PaddingLeft={ new UDim(0, rem(1.5625)) }
				PaddingRight={ new UDim(0, rem(1.5625)) } />
			<uicorner CornerRadius={ new UDim(0, rem(1.25)) } />
			<frame AutomaticSize={ Enum.AutomaticSize.XY } BackgroundTransparency={ 1 }>
				{ /* UIFlexItem is not currently in the JSX typing */ }
				{ Roact.createElement("UIFlexItem", {
					ItemLineAlignment: Enum.ItemLineAlignment.Stretch
				}) }
				<uilistlayout
					FillDirection={ Enum.FillDirection.Horizontal }
					Padding={ new UDim(0, rem(1.0625)) }
					VerticalAlignment={ Enum.VerticalAlignment.Center } />
				<imagelabel
					Size={ UDim2.fromOffset(rem(2.31), rem(2.31)) }
					BackgroundTransparency={ 1 }
					ImageColor3={ textColor }
					Image={ icon } />
				<textlabel
					Size={ UDim2.fromOffset(0, rem(2.25)) }
					BackgroundTransparency={ 1 }
					AutomaticSize={ Enum.AutomaticSize.X }
					TextColor3={ textColor }
					FontFace={ font.bold }
					TextSize={ rem(2) }
					Text={ title }>
					</textlabel>
				{ /* badge goes here */ }
			</frame>
			<frame AutomaticSize={ Enum.AutomaticSize.XY } BackgroundTransparency={ 1 }>
				{ Roact.createElement("UIFlexItem", {
					ItemLineAlignment: Enum.ItemLineAlignment.Stretch
				}) }
				<uilistlayout
					FillDirection={ Enum.FillDirection.Horizontal }
					Wraps={ true } />
				<textlabel
					Size={ UDim2.fromOffset(0, rem(6.375)) }
					AutomaticSize={ Enum.AutomaticSize.X }
					BackgroundTransparency={ 1 }
					TextColor3={ textColor }
					FontFace={ font.bold }
					TextSize={ rem(1.25) }
					TextWrapped={ true }
					TextXAlignment={ Enum.TextXAlignment.Left }
					TextYAlignment={ Enum.TextYAlignment.Top }
					Text={ description } />
			</frame>
		</imagebutton>
	);
}
