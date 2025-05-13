import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  standalone: false,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'SimpliEd ERP',
      role: 'Core Developer',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      description: 'Comprehensive EdTech SaaS for schools and universities featuring learning management, grading systems, and administrative tools.',
      tags: ['EdTech', 'SaaS'],
      link: ''
    },
    {
      title: 'US Customs & Shipments System',
      role: 'Full Stack Developer',
      tech: ['Angular', 'Node.js', 'MySQL', 'Redux'],
      description: 'Logistics automation SaaS for tracking, managing, and processing international shipments with compliance checks.',
      tags: ['Logistics', 'SaaS'],
      link: ''
    },
    {
      title: 'WWE Wrestling App Revamp',
      role: 'Frontend Developer',
      tech: ['Angular', 'TypeScript', 'REST APIs'],
      description: 'UI/UX redesign for global audience with live event streaming, wrestler profiles, and interactive features.',
      tags: ['Entertainment', 'UX'],
      link: ''
    },
    {
      title: 'PITB KPI System',
      role: 'Web Developer',
      tech: ['JavaScript', 'PHP', 'MySQL'],
      description: 'Government hospital evaluation system for Punjab Information Technology Board to monitor healthcare metrics.',
      tags: ['GovTech', 'Healthcare'],
      link: ''
    },
    {
      title: 'Saqib Scents',
      role: 'Freelance Developer',
      tech: ['WordPress', 'WooCommerce', 'CSS', 'PHP'],
      description: 'Ecommerce site for a perfume brand with custom product showcases and online ordering system.',
      tags: ['Ecommerce', 'Freelance'],
      link: 'https://saqibscents.com/'
    },
    {
      title: 'Personal Finance Manager',
      role: 'Senior Developer',
      tech: ['Angular', 'NestJS', 'MongoDB', 'TypeScript'],
      description: 'FinTech platform using Open Banking APIs to help users track expenses, set budgets, and improve financial health.',
      tags: ['FinTech', 'SaaS'],
      link: ''
    }
  ];

  filteredProjects: Project[] = [];
  tags: string[] = [];
  activeTag: string = 'All';

  constructor(private intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.setupTags();
    this.filterProjects('All');
    this.setupAnimations();
  }

  setupTags(): void {
    const tagSet = new Set<string>();
    tagSet.add('All');
    
    this.projects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    
    this.tags = Array.from(tagSet);
  }

  filterProjects(tag: string): void {
    console.log(`Filtering projects by tag: ${tag}`);
    this.activeTag = tag;
    
    if (tag === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.tags.includes(tag)
      );
    }
    console.log(`Filtered projects:`, this.filteredProjects);
  }

  private setupAnimations(): void {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      this.intersectionObserverService.observe(projectsSection);
    }
    
    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        this.intersectionObserverService.observe(card, { delay: index * 100 });
      });
    }, 300);
  }
}
