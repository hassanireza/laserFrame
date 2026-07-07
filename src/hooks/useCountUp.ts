import { useEffect, useRef, useState } from "react";
import { CounterAnimator } from "../services/CounterAnimator";

export function useCountUp(target: number, shouldStart: boolean): number {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasRun.current) return;
    hasRun.current = true;

    const animator = new CounterAnimator(target, setValue);
    animator.run();

    return () => animator.cancel();
  }, [shouldStart, target]);

  return value;
}
