import { Component, OnInit } from '@angular/core';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  standalone: false,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.setupAnimations();
  }

  private setupAnimations(): void {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      this.intersectionObserverService.observe(aboutSection);
    }
  }
}
