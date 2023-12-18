// From ripple README (https://github.com/littensy/ripple/tree/main#usemotioninitialvalue-options)

import { Binding, useBinding, useMemo, useEffect } from "@rbxts/roact";
import { Motion, MotionOptions, MotionGoal, createMotion } from "@rbxts/ripple";

export function useMotion(initialValue: number, options?: MotionOptions): LuaTuple<[Binding<number>, Motion<number>]>;

export function useMotion<T extends MotionGoal>(
	initialValue: T,
	options?: MotionOptions,
): LuaTuple<[Binding<T>, Motion<T>]>;

export function useMotion<T extends MotionGoal>(initialValue: T, options: MotionOptions = { start: true }) {
	const motion = useMemo(() => {
		return createMotion(initialValue, options);
	}, []);

	const [binding, setValue] = useBinding(initialValue);

	useEffect(() => {
		const disconnect = motion.onStep(setValue);

		return () => {
			disconnect();
			motion.destroy();
		};
	}, []);

	return $tuple(binding, motion);
}
