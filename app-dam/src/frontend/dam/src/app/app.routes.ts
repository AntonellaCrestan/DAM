import { Routes } from '@angular/router';
import { ListadoDispositivosComponent } from './listado-dispositivos/listado-dispositivos.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dispositivo',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage)
  },
  { path: 'listado-dispositivos', component: ListadoDispositivosComponent},
];
