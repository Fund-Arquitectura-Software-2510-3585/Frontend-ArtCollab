import { Component, HostListener, Input, ChangeDetectorRef } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {

  @Input() role: number = 0;

  menuOpen = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  logout(): void {
    document.body.style.pointerEvents = 'none';

    setTimeout(() => {
      localStorage.removeItem('role');

      location.reload();

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 50);
    }, 100);
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
