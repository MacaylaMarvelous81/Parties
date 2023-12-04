export const font = {
	regular: new Font("rbxassetid://11702779517"),
	bold: (() => {
		const bold = new Font("rbxassetid://11702779517");
		bold.Weight = Enum.FontWeight.Bold;

		return bold;
	})(),
	exbold: (() => {
		const exbold = new Font("rbxassetid://11702779517");
		exbold.Weight = Enum.FontWeight.ExtraBold;

		return exbold;
	})(),
	black: (() => {
		const black = new Font("rbxassetid://11702779517");
		black.Weight = Enum.FontWeight.Heavy;

		return black;
	})()
};

export const color = {
	white: Color3.fromHex("#fff"),
	muted: Color3.fromHex("#c0c5c9"),
	dark100: Color3.fromHex("#121212"),
	dark200: Color3.fromHex("#282828"),
	dark300: Color3.fromHex("#3f3f3f"),
	dark400: Color3.fromHex("#575757"),
	dark500: Color3.fromHex("#717171"),
	dark600: Color3.fromHex("#8b8b8b"),
	mixed100: Color3.fromHex("#1a1625"),
	mixed200: Color3.fromHex("#2f2b3a"),
	mixed300: Color3.fromHex("#46424f"),
	mixed400: Color3.fromHex("#5e5a66"),
	mixed500: Color3.fromHex("#76737e"),
	mixed600: Color3.fromHex("#908d96"),
	primary100: Color3.fromHex("#382bf0"),
	primary200: Color3.fromHex("#5e43f3"),
	primary300: Color3.fromHex("#7a5af5"),
	primary400: Color3.fromHex("#9171f8"),
	primary500: Color3.fromHex("#a688fa"),
	primary600: Color3.fromHex("#ba9ffb")
};
