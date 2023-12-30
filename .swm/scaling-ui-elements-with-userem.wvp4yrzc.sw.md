---
title: Scaling UI elements with useRem
---
Roblox provides the `UDim` and `UDim2` types to scale UI elements. These types are made up of two components: scale values to specify a pecentage of the UI element's parent and offset values for absolute pixel values. Using `UDim` types are useful for some cases, like positioning a UI element at a fraction of the way throughout its parent's width:

```tsx
{ /* This frame is positioned 50% through its parent's width and 50% through its parent's height, effectively centering it. */ }
<frame AnchorPoint={ new Vector2(0.5, 0.5) } Position={ UDim2.fromScale(0.5, 0.5) } />
```

However, they also become complicated in other cases, such as determining the size of a button in a UI. The button should adapt to the screen size to be accessible in different devices and playstyles, but the button size should also stay consistent. Scaling with `UDim` or `UDim2` would make this complicated because in differently sized containers, the buttons would be scaled differently, even if the screen size were the same. Finding the perfect combination of scale and offset values can become extremely difficult or even impossible.

<SwmToken path="/src/client/hooks/use-rem.ts" pos="18:6:6" line-data="export default function useRem() {">`useRem`</SwmToken>is a hook that emulates the behavior of `rem` units in CSS. They scale relatively to the font size of the "root element", or the viewport size in this implementation.

<SwmSnippet path="/src/client/hooks/use-rem.ts" line="6" collapsed>

---

This implementation of `rem` does not take into account any font size, but acts as if the font size were <SwmToken path="/src/client/hooks/use-rem.ts" pos="6:6:6" line-data="const baseRem = 16;">`16`</SwmToken>px. This is defined by the <SwmToken path="/src/client/hooks/use-rem.ts" pos="6:2:2" line-data="const baseRem = 16;">`baseRem`</SwmToken> constant.

```typescript
const baseRem = 16;
```

---

</SwmSnippet>

To use this hook in a component, import it and store its result in a constant, conventionally named `rem`. Then call `rem` and pass in the amount of `rem` units. Its return value should be used as an offset value for UDim.

<SwmSnippet path="/src/client/components/badge.tsx" line="6">

---

This example creates a badge component using `rem` units. For example, <SwmToken path="/src/client/components/badge.tsx" pos="22:1:12" line-data="				TextSize={ rem(1.25) }">`TextSize={ rem(1.25) }`</SwmToken> sets the font size of the badge text to 1.25 `rem` units. <SwmToken path="/src/client/components/badge.tsx" pos="22:5:10" line-data="				TextSize={ rem(1.25) }">`rem(1.25)`</SwmToken> is identical to `1.25rem` in CSS.

```tsx
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
```

---

</SwmSnippet>

Values from `rem` will be recalculated whenever the viewport size changes.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBcGFydGllcyUzQSUzQU1hY2F5bGFNYXJ2ZWxvdXM4MQ==" repo-name="parties"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
