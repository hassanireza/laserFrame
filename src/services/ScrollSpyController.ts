/**
 * Tracks which page section is currently in view and reports scroll
 * progress as a percentage. Backs the active nav-link highlight and the
 * top progress bar, both new capabilities layered on top of the original
 * static navigation.
 */
export class ScrollSpyController {
  private readonly sectionIds: string[];
  private readonly onSectionChange: (id: string | null) => void;
  private readonly onProgressChange: (progress: number) => void;
  private observer: IntersectionObserver | null = null;
  private readonly handleScroll: () => void;
  private visibleSections: Map<string, number> = new Map();

  constructor(
    sectionIds: string[],
    onSectionChange: (id: string | null) => void,
    onProgressChange: (progress: number) => void,
  ) {
    this.sectionIds = sectionIds;
    this.onSectionChange = onSectionChange;
    this.onProgressChange = onProgressChange;
    this.handleScroll = this.onScroll.bind(this);
  }

  public start(): void {
    this.observer = new IntersectionObserver(
      (entries) => this.onIntersect(entries),
      { threshold: 0.35 },
    );

    this.sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) this.observer?.observe(element);
    });

    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.onScroll();
  }

  public stop(): void {
    this.observer?.disconnect();
    this.observer = null;
    window.removeEventListener("scroll", this.handleScroll);
  }

  private onIntersect(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.visibleSections.set(entry.target.id, entry.intersectionRatio);
      } else {
        this.visibleSections.delete(entry.target.id);
      }
    });

    const active = [...this.visibleSections.entries()].sort(
      (a, b) => b[1] - a[1],
    )[0];

    this.onSectionChange(active ? active[0] : null);
  }

  private onScroll(): void {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    this.onProgressChange(progress);
  }
}
