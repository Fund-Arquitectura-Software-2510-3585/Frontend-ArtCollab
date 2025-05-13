import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {
  users = [
    { name: 'Diego Criollo' },
    { name: 'Paulo Rivera' },
    { name: 'Andres Zuta' }
  ];

  selectedUser = this.users[0]; // Selecciona por defecto el primero

  selectUser(user: { name: string }) {
    this.selectedUser = user;
  }
}
