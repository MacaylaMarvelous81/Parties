import Roact from "@rbxts/roact";

export default function InputBox({ placeholder, native }: { placeholder: string, native?: Partial<InstanceProperties<TextBox>> }) {
	const extraBold = new Font("rbxassetid://11702779517");
	extraBold.Weight = Enum.FontWeight.ExtraBold;

	return (
		<textbox BackgroundColor3={ Color3.fromHex("#2f2b3a") } Size={ new UDim2(0.299, 0, 0.091, 0) } FontFace={ extraBold } PlaceholderColor3={ Color3.fromHex("#b2b2b2") } PlaceholderText={ placeholder } Text="" TextSize={ 24 } TextColor3={ Color3.fromHex("#fff") } { ...native }>
			<uicorner CornerRadius={ new UDim(0, 10) } />
		</textbox>
	);
}
