import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Catering } from './pages/catering/catering';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: Menu },
  { path: 'catering', component: Catering },
  { path: '**', redirectTo: '' }
];