import { Routes } from '@angular/router';
import {HomeComponent} from './content/pages/home/home.component';
import {LoginComponent} from './content/pages/login/login.component';
import {RegisterComponent} from './content/pages/register/register.component';
import {ChatsComponent} from './content/pages/chats/chats.component';
import {ApplicationsComponent} from './content/pages/applications/applications.component';
import {ProjectsComponent} from './content/pages/projects/projects.component';
import {ProjectsListComponent} from './content/pages/projects-list/projects-list.component';
import {CreateProjectComponent} from './content/pages/create-project/create-project.component';
import {PortfoliosListComponent} from './content/pages/portfolios-list/portfolios-list.component';
import {CreatePortfolioComponent} from './content/pages/create-portfolio/create-portfolio.component';
import {PortfoliosComponent} from './content/pages/portfolios/portfolios.component';
import {CreateIlustrationComponent} from './content/pages/portfolios/create-ilustration/create-ilustration.component';
import {ProfileComponent} from './content/pages/profile/profile.component';
import {IllustrationIndividualComponent} from './content/pages/profile/illustration-individual/illustration-individual.component';
import {WriterIndividualComponent} from './content/pages/home/components/writer-individual/writer-individual.component';
import {BookIndividualComponent} from './content/pages/home/components/book-individual/book-individual.component';
import {
  ProjectIndividualComponent
} from './content/pages/home/components/project-individual/project-individual.component';
import {AllWritersComponent} from './content/pages/home/components/all-writers/all-writers.component';
import {AllProjectsComponent} from './content/pages/home/components/all-projects/all-projects.component';
import {AllBooksComponent} from './content/pages/home/components/all-books/all-books.component';
import {
  PortfolioIndividualComponent
} from './content/pages/home/components/portfolio-individual/portfolio-individual.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: ChatsComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/create-new-project', component: CreateProjectComponent },
  { path: 'information/project/:id', component: ProjectIndividualComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'portfolios', component: PortfoliosListComponent },
  { path: 'portfolios/create-new-portfolio', component: CreatePortfolioComponent },
  { path: 'portfolios/information/:id', component: PortfoliosComponent },
  { path: 'information/illustration/:id', component: IllustrationIndividualComponent },
  { path: 'information/writer/:id', component: WriterIndividualComponent },
  { path: 'information/book/:id', component: BookIndividualComponent},
  { path: 'information/portfolio/:id', component: PortfolioIndividualComponent },
  { path: 'all-writers', component: AllWritersComponent},
  { path: 'all-projects', component: AllProjectsComponent},
  { path: 'all-books', component: AllBooksComponent},
  { path: 'portfolios/information/:id/create-new-illustration', component: CreateIlustrationComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
