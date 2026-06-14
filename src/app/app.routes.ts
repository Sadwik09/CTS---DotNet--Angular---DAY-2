import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./components/course-list/course-list.component').then((m) => m.CourseListComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
