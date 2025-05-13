import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
    this.checkScroll();
    this.highlightActiveSection();
  }

  @HostListener('window:scroll')
  checkScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.highlightActiveSection();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private highlightActiveSection(): void {
    const scrollPosition = window.scrollY;
    
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section) {
        const sectionTop = section.offsetTop - 100;
        if (scrollPosition >= sectionTop) {
          this.activeSection = this.sections[i];
          break;
        }
      }
    }
  }
}
