import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ToolbarContentComponent} from './public/components/toolbar-content/toolbar-content.component';
import {FooterContentComponent} from './public/components/footer-content/footer-content.component';
import {NgIf} from '@angular/common';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, FooterContentComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ArtCollab';
  role: number | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.role$.subscribe((role) => {
      this.role = role;

      const currentUrl = this.router.url;

      if (role === 1 || role === 2) {
        if (currentUrl === '/login' || currentUrl === '/register') {
          this.router.navigate(['/home']);
        }
      } else {
        if (currentUrl !== '/login' && currentUrl !== '/register') {
          this.router.navigate(['/login']);
        }
      }
    });

    /*
    window.addEventListener('beforeunload', (event) => {
      // Elimina el storage solo cuando la pestaña se cierra
      localStorage.removeItem('role');
    });*/
  }
}

