import { Routes } from '@angular/router';
import {HomeComponent} from './content/pages/home/home.component';
import {LoginComponent} from './content/pages/login/login.component';
import {RegisterComponent} from './content/pages/register/register.component';
import {ChatsComponent} from './content/pages/chats/chats.component';
import {ApplicationsComponent} from './content/pages/applications/applications.component';
import {ProjectsComponent} from './content/pages/projects/projects.component';
import {ProjectsListComponent} from './content/pages/projects-list/projects-list.component';
import {CreateProjectComponent} from './content/pages/create-project/create-project.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: ChatsComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/create-new-project', component: CreateProjectComponent },
  { path: 'projects/information/:id', component: ProjectsComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
