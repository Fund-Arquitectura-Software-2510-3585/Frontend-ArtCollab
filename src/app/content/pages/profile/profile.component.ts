import {Component, Input} from '@angular/core';
import {IllustrationProfileComponent} from './illustration-profile/illustration-profile.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    IllustrationProfileComponent,
    NgForOf
  ],
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profile = {
    name: 'Diego Criollo',
    photo: 'https://media.printler.com/media/photo/178547.jpg?rmode=crop&width=638&height=900',
    subscription: 2 // 1 for Premium, 2 for Standard
  }

  illustrations = [
    {
      id: 1,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://media.printler.com/media/photo/178547.jpg?rmode=crop&width=638&height=900',
      rating: 4.5
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      image: 'https://media.printler.com/media/photo/178547.jpg?rmode=crop&width=638&height=900',
      rating: 4
    },
    {
      id: 3,
      title: 'El Señor de Los Anillos',
      author: 'Diego Criollo',
      image: 'https://media.printler.com/media/photo/178547.jpg?rmode=crop&width=638&height=900',
      rating: 4.5
    },
    {
      id: 4,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      image: 'https://media.printler.com/media/photo/178547.jpg?rmode=crop&width=638&height=900',
      rating: 4
    },
  ];

  @Input() name: string = '';
  @Input() photo: string = '';
  @Input() subscription: number = 0;

  getSubscriptionLabel(subscription: number): string {
    return subscription === 1 || subscription === 2
      ? 'Artista Premium'
      : 'Artista Estándar';
  }

}
