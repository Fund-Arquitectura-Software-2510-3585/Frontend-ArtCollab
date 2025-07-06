import { Component, HostListener, Input, ChangeDetectorRef } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

  menuOpen = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }

}
