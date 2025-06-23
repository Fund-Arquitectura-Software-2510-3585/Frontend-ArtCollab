import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
  @Input() id!: number;
  @Input() imageSrc: string = '';
  @Input() author: string = '';
  @Input() date: string = '';
  @Input() title: string = '';

  @Output() viewMoreClicked = new EventEmitter<number>();

  viewMore() {
    this.viewMoreClicked.emit(this.id);
  }
}
