import Roact from "@rbxts/roact";
import { font } from "client/styles";
import useRem from "client/hooks/use-rem";
import Badge from "client/components/badge";

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

	// Determine button dimensions
	let width: number;
	let height: number;
	let textHeight: number;
	switch (size) {
		case SuperButtonSize.Long:
			width = rem(68.5625);
			height = rem(11.625);
			textHeight = rem(6.375);
			break;
		case SuperButtonSize.Thin:
			width = rem(33.1875);
			height = rem(14.9375);
			textHeight = rem(9.6875);
			break;
	}

	const badgeElement = badge ? <Badge text={ badgeText || "" } /> : undefined;

	return (
		<imagebutton Image={ image } { ...native } Size={ UDim2.fromOffset(width, height) }>
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
				{ badgeElement }
			</frame>
			<frame AutomaticSize={ Enum.AutomaticSize.XY } BackgroundTransparency={ 1 }>
				{ Roact.createElement("UIFlexItem", {
					ItemLineAlignment: Enum.ItemLineAlignment.Stretch
				}) }
				<uilistlayout
					FillDirection={ Enum.FillDirection.Horizontal }
					Wraps={ true } />
				<textlabel
					Size={ UDim2.fromOffset(0, textHeight) }
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
