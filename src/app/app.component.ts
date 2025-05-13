import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  showBackToTop = false;
  isLoading = true;
  
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log('AppComponent initialized');
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.themeService.setTheme(savedTheme);
    console.log('Theme initialized:', savedTheme);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.scrollY > 300;
    });
    
    // Hide preloader after page load
    console.log('Setting timer to hide preloader');
    setTimeout(() => {
      this.isLoading = false;
      console.log('Preloader hidden, isLoading set to false');
      
      // Make all sections visible immediately 
      console.log('Making all sections visible');
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.classList.add('visible');
        console.log('Added visible class to section:', section.id);
      });
    }, 1500);
  }
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.renderer.addClass(entry.target, 'visible');
        observer.unobserve(entry.target);
      }
    });
  }
}
