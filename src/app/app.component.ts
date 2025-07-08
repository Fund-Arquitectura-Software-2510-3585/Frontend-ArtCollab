import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ToolbarContentComponent} from './public/components/toolbar-content/toolbar-content.component';
import {AuthenticationService} from './content/pages/login/services/authentication.service';
import {filter} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarContentComponent, HttpClientModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ArtCollab';
  isSignedIn: boolean = false;
  username: string = "";
  userId: number = -1;

  showNavbar = true;
  private hideNavbarRoutes = ['/login', '/register'];

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showNavbar = !this.hideNavbarRoutes.includes(event.urlAfterRedirects);
      });
  }
}

