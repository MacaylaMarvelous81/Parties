import Roact from "@rbxts/roact";
import assets from "shared/assets";
import { font, color } from "client/styles";
import useRem from "client/hooks/use-rem";
import { SuperButtonSize, SuperButton } from "client/components/super-button";

export default function StartScreen() {
	const rem = useRem();

	return (
		<frame Size={ UDim2.fromScale(1, 1) } BackgroundColor3={ color.jet }>
			<frame AutomaticSize={ Enum.AutomaticSize.XY } AnchorPoint={ new Vector2(0.5, 0.5) } Position={ UDim2.fromScale(0.5, 0.5) } BackgroundTransparency={ 1 }>
				<uilistlayout
					FillDirection={ Enum.FillDirection.Vertical }
					Padding={ new UDim(0, rem(1.8125)) } />
				<uipadding
					PaddingTop={ new UDim(0, rem(1.375)) }
					PaddingBottom={ new UDim(0, rem(1.375)) }
					PaddingLeft={ new UDim(0, rem(3.75)) }
					PaddingRight={ new UDim(0, rem(3.75)) } />
				<textlabel
					Size={ UDim2.fromOffset(rem(13.625), rem(4.25)) }
					BackgroundTransparency={ 1 }
					TextColor3={ color.white }
					FontFace={ font.exbold }
					TextSize={ rem(3.5) }
					Text="Parties" />
				<SuperButton
					size={ SuperButtonSize.Long }
					icon={ assets.ui.icons["plus-lg"] }
					title="Create a Party"
					description="Your friends will be able to join your party. You can also share the invite code or link to invite others."
					textColor={ color.white }
					image={ assets.ui.button.long.inviting }
					badge={ false } />
				<SuperButton
					size={ SuperButtonSize.Long }
					icon={ assets.ui.icons["box-arrow-in-right"] }
					title="Join a Party"
					description="You can join a friend's party or find a party by its invite code."
					textColor={ color.black }
					image={ assets.ui.button.long.placeholder }
					badge={ false } />
			</frame>
		</frame>
	);
}
