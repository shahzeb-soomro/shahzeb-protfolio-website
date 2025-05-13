import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  standalone: false,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: { category: string, items: Skill[] }[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'TypeScript', icon: 'fab fa-js-square' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express', icon: 'fas fa-server' },
        { name: 'NestJS', icon: 'fas fa-feather-alt' },
        { name: 'RESTful APIs', icon: 'fas fa-exchange-alt' },
        { name: 'Authentication', icon: 'fas fa-lock' },
        { name: 'Webhooks', icon: 'fas fa-plug' }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'NoSQL', icon: 'fas fa-database' },
        { name: 'ORM/ODM', icon: 'fas fa-project-diagram' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Postman', icon: 'fas fa-paper-plane' },
        { name: 'WordPress', icon: 'fab fa-wordpress' },
        { name: 'WooCommerce', icon: 'fab fa-wordpress' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'NPM', icon: 'fab fa-npm' }
      ]
    }
  ];

  constructor(private intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void {
   this.setupAnimations();
  }

  private setupAnimations(): void {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      this.intersectionObserverService.observe(skillsSection);
    }
    
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => {
      this.intersectionObserverService.observe(card);
    });
  }
}
