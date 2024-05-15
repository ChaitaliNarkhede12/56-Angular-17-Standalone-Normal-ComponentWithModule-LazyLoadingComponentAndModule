import { Routes } from '@angular/router';

export const routes: Routes = [
  //loading standalone component with module
  {
    path: 'portfolio',
    loadChildren: () => import('../..//src/app/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'employee',
    loadComponent: () => import('../app/portfolio/employee/employee.component').then(m => m.EmployeeComponent)
  },
  //loading normal component with module
  {
    path: 'home',
    loadChildren: () => import('../app/home-normalcomp/home.module').then(m => m.HomesModule)
  },
];
