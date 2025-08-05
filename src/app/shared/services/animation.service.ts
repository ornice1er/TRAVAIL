import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);
    
    // Observer tous les éléments avec la classe animate-on-scroll
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
  
  animateCountUp(element: HTMLElement, targetValue: number, duration: number = 2000) {
    let startValue = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Fonction d'easing
      const easedProgress = this.easeOutQuart(progress);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);
      
      element.textContent = currentValue.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }
  
  private easeOutQuart(t: number): number {
    return 1 - (--t) * t * t * t;
  }
}