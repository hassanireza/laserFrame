import type { StatItem } from "../types";
import { useCountUp } from "../hooks/useCountUp";

interface StatCounterProps {
  stat: StatItem;
  shouldStart: boolean;
}

export function StatCounter({ stat, shouldStart }: StatCounterProps) {
  const value = useCountUp(stat.target, shouldStart);

  return (
    <div className="stat">
      <span className="number">
        {value}
        {stat.suffix}
      </span>
      <span className="label">{stat.label}</span>
    </div>
  );
}
