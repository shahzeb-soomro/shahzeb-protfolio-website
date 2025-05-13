import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  standalone: false,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'Digital Gravity - Dubai',
      position: 'Senior Software Engineer',
      period: 'May 2025 - Present',
      description: 'Working on the development of microservices to integrate with scalable fintech projects focusing on Emirates NBD banking APIs and secure data exchange aligned with UAE banking standards.',
      tech: ['Angular', 'NestJS', 'MongoDB', 'TypeScript', 'AWS'],
      current: true
    },
    {
      company: 'Spire Tech - Bahrain',
      position: 'Senior Software Engineer',
      period: 'Jan 2025 - Apr 2025',
      description: 'Working on FinTech platform using Open Banking, developing a Personal Finance Manager SaaS application with advanced analytics and user management features.',
      tech: ['AWS', 'Angular', 'NestJS', 'MongoDB', 'TypeScript', 'Docker', 'Kubernetes', 'MSSQL'],
      current: false
    },
    {
      company: 'SimpliEd - Pakistan',
      position: 'Software Engineer - Core Team Member',
      period: 'Jun 2022 - Dec 2024',
      description: 'Core team member for SimpliEd ERP development focusing on Learning Management System, Reports, and Refactoring the codebase for better performance.',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      current: false
    },
    {
      company: 'SZABIST - Pakistan',
      position: 'Lecturer, Computer Science',
      period: 'Feb 2021 - May 2022',
      description: 'Taught software engineering courses, mentored final-year students on their projects, and developed practical curriculum. Conducted lectures, workshops, and lab sessions to enhance student understanding and practical skills in software engineering concepts',
      tech: ['Software Engineering', 'AI', 'Machine Learning', 'Web Development', 'Project Management'],
      current: false
    },
    {
      company: 'Wiztech - Pakistan',
      position: 'Full Stack Developer',
      period: 'Feb 2020 - Jan 2021',
      description: 'Built automated logistics system for US Customs & Shipments and revamped entertainment UX for WWE App.',
      tech: ['Angular', 'Node.js', 'MySQL', 'NestJS', 'MongoDB', 'TypeScript', 'REST APIs', 'MSSQL'],
      current: false
    },
    {
      company: 'Binary Vibes - Pakistan',
      position: 'Software Engineer',
      period: 'Dec 2017 - Jan 2020',
      description: 'Developed GovTech project for hospital assessment & evaluation under Punjab Government (PITB KPI System). Led project development using PHP and AngularJS, ensuring efficient and scalable architecture.',
      tech: ['JavaScript', 'PHP', 'MySQL', 'HTML', 'CSS', 'AngularJS', 'REST APIs'],
      current: false
    },
    {
      company: 'Verge System - Pakistan',
      position: 'Junior Software Engineer',
      period: 'July 2017 - Oct 2017',
      description: 'Built core HR features for global leading SaaS product Web HR (HRM SaaS).',
      tech: ['JavaScript', 'PHP', 'MySQL', 'jQuery', 'HTML', 'CSS', 'REST APIs'],
      current: false
    }
  ];

  constructor(private intersectionObserverService: IntersectionObserverService) { }

  ngOnInit(): void {
    this.setupAnimations();
    
    // Manually add visible class to timeline items with a staggered delay
    setTimeout(() => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
          console.log('Made timeline item visible', index);
        }, index * 200); // Stagger the animations
      });
    }, 1600); // Start after preloader is hidden
  }

  private setupAnimations(): void {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      this.intersectionObserverService.observe(experienceSection);
    }
  }
}
