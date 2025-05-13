import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-project-card-writer',
  standalone: true,
  imports: [],
  templateUrl: './project-card-writer.component.html',
  styleUrl: './project-card-writer.component.css'
})
export class ProjectCardWriterComponent {
  @Input() id!: number;
  @Input() imageSrc: string = '';
  @Input() date: string = '';
  @Input() title: string = '';

  @Output() viewMoreClicked = new EventEmitter<number>();

  viewMore() {
    this.viewMoreClicked.emit(this.id);
  }
}
