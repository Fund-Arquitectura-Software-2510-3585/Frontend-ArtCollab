import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
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
