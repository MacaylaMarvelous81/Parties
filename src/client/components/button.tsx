import Roact from "roact";

export default function Button({ label, callback, native }: { label: string, callback: () => void, native?: Partial<InstanceProperties<TextButton>> }) {
	const extraBold = new Font("rbxassetid://11702779517");
	extraBold.Weight = Enum.FontWeight.ExtraBold;

	// TODO: Consistent button size
	// The button should be in a 188x69 pixels in a 1321x810 screen, no matter the size of the container.
	// The button should change its size to be propertional to the size of the screen.
	return (
		<textbutton BackgroundColor3={ Color3.fromHex("#a688fa") } Size={ new UDim2(0.392, 0, 0.085, 0) } FontFace={ extraBold } Text={ label } TextSize={ 24 } Event={ {
			MouseButton1Click: callback
		} } { ...native }>
			<uicorner CornerRadius={ new UDim(0, 10) } />
		</textbutton>
	);
}
