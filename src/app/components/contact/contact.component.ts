import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  formSuccess = false;

  socials = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/shahzeb-baig/' },
    { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/shahzeb-soomro' },
    { name: 'Email', icon: 'fas fa-envelope', link: 'mailto:shahzaibsoomro@gmail.com' },
  ];

  constructor(
    private fb: FormBuilder,
    private intersectionObserverService: IntersectionObserverService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.setupAnimations();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      // In a real application, this would send the form data to a backend
      console.log('Form data submitted:', this.contactForm.value);
      
      // Simulate form success
      setTimeout(() => {
        this.formSuccess = true;
        this.contactForm.reset();
        this.submitted = false;
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.formSuccess = false;
        }, 5000);
      }, 1000);
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  private setupAnimations(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      this.intersectionObserverService.observe(contactSection);
    }
  }
}
