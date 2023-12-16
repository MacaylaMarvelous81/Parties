// Basically a copy of littensy/rbxts-react-example/src/client/hooks/use-rem.ts (commit 0d32c41)

import { useCallback, useEffect, useState } from "@rbxts/roact";
import { Workspace } from "@rbxts/services";

const baseRem = 16;
const baseViewport = new Vector2(1920, 1080);
const dominantAxis = 0.5;

function calculateRem(viewport: Vector2) {
	const width = math.log(viewport.X / baseViewport.X, 2);
	const height = math.log(viewport.Y / baseViewport.Y, 2);
	const centered = width + (height - width) * dominantAxis;

	return baseRem * 2 ** centered;
}

export default function useRem() {
	const [ rem, setRem ] = useState(baseRem);

	useEffect(() => {
		const camera = Workspace.CurrentCamera!;

		const connection = camera.GetPropertyChangedSignal("ViewportSize").Connect(() => {
			// Recalculate rem when the viewport size changes
			setRem(calculateRem(camera.ViewportSize));
		});

		// Initial rem calculation
		setRem(calculateRem(camera.ViewportSize));

		return () => {
			connection.Disconnect();
		}
	});

	return useCallback((value: number) => {
		return value * rem;
	}, [ rem ]);
}
