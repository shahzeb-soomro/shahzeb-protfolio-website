import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = new BehaviorSubject<string>('light');
  public theme$ = this.theme.asObservable();

  constructor() {
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.theme.next(theme);
  }

  toggleTheme(): void {
    const currentTheme = this.theme.getValue();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  isDarkTheme(): boolean {
    return this.theme.getValue() === 'dark';
  }
}
