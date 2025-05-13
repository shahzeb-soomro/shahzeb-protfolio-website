import { Component, OnInit } from '@angular/core';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  
  constructor(private intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.setupAnimations();
  }

  scrollToAbout(): void {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private setupAnimations(): void {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      this.intersectionObserverService.observe(heroContent);
    }
  }
}
