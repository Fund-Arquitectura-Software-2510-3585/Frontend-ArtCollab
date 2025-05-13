import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private roleSubject = new BehaviorSubject<number | null>(this.getRoleFromStorage());
  role$ = this.roleSubject.asObservable();

  private getRoleFromStorage(): number | null {
    const stored = localStorage.getItem('role');
    return stored ? parseInt(stored, 10) : null;
  }

  loginAs(role: number) {
    localStorage.setItem('role', role.toString());
    this.roleSubject.next(role);
  }

  logout() {
    localStorage.removeItem('role');
    this.roleSubject.next(null);
  }
}
