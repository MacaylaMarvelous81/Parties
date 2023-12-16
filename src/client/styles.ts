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
	jet: Color3.fromHex("#2f2d2e"),
	vermillion: Color3.fromHex("#f24333"),
	white: Color3.fromHex("#fff"),
	black: Color3.fromHex("#121212")
};
