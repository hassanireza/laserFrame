import { useEffect, useState } from "react";
import { ScrollSpyController } from "../services/ScrollSpyController";

interface ScrollSpyResult {
  activeSection: string | null;
  progress: number;
}

export function useScrollSpy(sectionIds: string[]): ScrollSpyResult {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controller = new ScrollSpyController(
      sectionIds,
      setActiveSection,
      setProgress,
    );
    controller.start();

    return () => controller.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { activeSection, progress };
}
