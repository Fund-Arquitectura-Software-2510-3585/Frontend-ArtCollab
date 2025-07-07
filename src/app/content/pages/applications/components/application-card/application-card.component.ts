import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-card',
  standalone: true,
  imports: [],
  templateUrl: './application-card.component.html',
  styleUrl: './application-card.component.css'
})
export class ApplicationCardComponent {
  @Input() title!: string;
  @Input() author!: string;
  @Input() dateApplication!: string;
  @Input() imageSrc!: string;
  @Input() id!: number;

  constructor(private router: Router) {}

  goToProject(): void {
    this.router.navigate(['/information/project', this.id]);
  }
}
