import { Routes } from '@angular/router';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'signup', component: RegisterComponent, title: 'Sign up' },
  { path: 'login', component: LoginComponent, title: 'Log in' },
  { path: '**', component: NotFoundComponent, title: 'Not found' },
];
