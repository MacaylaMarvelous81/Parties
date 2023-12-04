import Roact from "@rbxts/roact";
import assets from "shared/assets";
import Button from "client/components/button";
import InputBox from "client/components/inputbox";
import { font, color } from "client/styles";

export default function StartScreen() {
	return (
		<frame BackgroundColor3={ color.mixed100 } Size={ new UDim2(1, 0, 1, 0) }>
			<frame BackgroundTransparency={ 1 } Size={ new UDim2(0.363, 0, 1, 0) }>
				<textlabel
					AnchorPoint={ new Vector2(0.5, 0) }
					BackgroundTransparency={ 1 }
					Position={ new UDim2(0.5, 0, 0.069, 0) }
					Size={ new UDim2(0.433, 0, 0.048, 0) }
					FontFace={ font.black }
					Text="Create a Party"
					TextColor3={ color.white }
					TextSize={ 32 } />
				<textlabel
					AnchorPoint={ new Vector2(0.5, 0) }
					BackgroundTransparency={ 1 }
					Position={ new UDim2(0.5, 0, 0.151, 0) }
					Size={ new UDim2(0.768, 0, 0.074, 0) }
					FontFace={ font.regular }
					Text="Your friends will be able to join your party. You can also invite people with the invite code or link."
					TextColor3={ color.white }
					TextSize={ 16 }
					TextWrapped={ true } />
				<Button label="Create" callback={ () => {} } native={ {
					AnchorPoint: new Vector2(0.5, 0),
					Position: new UDim2(0.5, 0, 0.293, 0)
				} } />
			</frame>
			<frame BackgroundTransparency={ 1 } Position={ new UDim2(0.363, 0, 0, 0) } Size={ new UDim2(0.637, 0, 1, 0) }>
				<textlabel
					AnchorPoint={ new Vector2(0.5, 0) }
					BackgroundTransparency={ 1 }
					Position={ new UDim2(0.5, 0, 0.069, 0) }
					Size={ new UDim2(0.211, 0, 0.048, 0) }
					FontFace={ font.black }
					Text="Join a Party"
					TextColor3={ color.white }
					TextSize={ 32 } />
				<textlabel
					AnchorPoint={ new Vector2(0.5, 0) }
					BackgroundTransparency={ 1 }
					Position={ new UDim2(0.5, 0, 0.151, 0) }
					Size={ new UDim2(0.768, 0, 0.074, 0) }
					FontFace={ font.regular }
					Text="Enter an invite code to find the party. Join a friend from Roblox to join without a code."
					TextColor3={ color.white }
					TextSize={ 16 }
					TextWrapped={ true } />
				<InputBox placeholder="Invite Code" native={ {
					AnchorPoint: new Vector2(0.5, 0),
					Position: new UDim2(0.5, 0, 0.225, 0)
				} } />
				{ /* Maybe make a party widget and group the photo, name, and join button together? */ }
				<frame AnchorPoint={ new Vector2(0.5, 0) } BackgroundTransparency={ 1 } Position={ new UDim2(0.5, 0, 0.379, 0) } Size={ new UDim2(0.15, 0, 0.158, 0) }>
					<uiaspectratioconstraint AspectRatio={ 1 } />
					<frame BackgroundColor3={ color.mixed300 } Size={ new UDim2(1, 0, 1, 0) }>
						<uicorner CornerRadius={ new UDim(1, 0) } />
					</frame>
				</frame>
				<textlabel AnchorPoint={ new Vector2(0.5, 0) } BackgroundTransparency={ 1 } Position={ new UDim2(0.5, 0, 0.568, 0) } Size={ new UDim2(0.324, 0, 0.03, 0) } FontFace={ font.bold } Text="OnlyTwentyCharacters's Party" TextColor3={ color.white } TextSize={ 20 } />
				<Button label="Join" callback={ () => {} } native={ {
					AnchorPoint: new Vector2(0.5, 0),
					Position: new UDim2(0.5, 0, 0.628, 0)
				} } />
			</frame>
			<imagelabel BackgroundTransparency={ 1 } Position={ new UDim2(0.104, 0, 0.5, 0) } Rotation={ -90 } Size={ new UDim2(0.522, 0, 0, 1) } Image={ assets.ui["start-div"] } />
		</frame>
	);
}
