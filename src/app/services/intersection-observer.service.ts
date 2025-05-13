import { Injectable, NgZone } from '@angular/core';

interface IntersectionOptions {
  rootMargin?: string;
  threshold?: number | number[];
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {
  private observer: IntersectionObserver;
  private observers: Map<Element, { observer: IntersectionObserver, options?: IntersectionOptions }> = new Map();

  constructor(private zone: NgZone) {
    // Default observer
    this.observer = this.createObserver();
  }

  observe(element: Element, options?: IntersectionOptions): void {
    if (!element) {
      return;
    }

    // If custom options provided, create a new observer for this element
    if (options) {
      const customObserver = this.createObserver({
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold === undefined ? 0.1 : options.threshold
      });
      
      this.observers.set(element, { observer: customObserver, options });
      customObserver.observe(element);
    } else {
      this.observer.observe(element);
    }
  }

  unobserve(element: Element): void {
    if (!element) {
      return;
    }

    // Check if element has a custom observer
    const customObserverData = this.observers.get(element);
    if (customObserverData) {
      customObserverData.observer.unobserve(element);
      this.observers.delete(element);
    } else {
      this.observer.unobserve(element);
    }
  }

  private createObserver(options: { rootMargin: string, threshold: number | number[] } = { rootMargin: '0px', threshold: 0.1 }): IntersectionObserver {
    return new IntersectionObserver((entries, observer) => {
      this.zone.run(() => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const customOptions = this.observers.get(element)?.options;
            
            // If there's a delay, apply it
            if (customOptions?.delay) {
              setTimeout(() => {
                element.classList.add('visible');
              }, customOptions.delay);
            } else {
              element.classList.add('visible');
            }
            
            observer.unobserve(element);
            
            // If it had a custom observer, remove from the map
            if (this.observers.has(element)) {
              this.observers.delete(element);
            }
          }
        });
      });
    }, options);
  }
}
