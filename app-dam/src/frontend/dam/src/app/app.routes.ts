import { Routes } from '@angular/router';


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
  {
    path: 'listado-dispositivos',
    loadComponent: () => import('./listado-dispositivos/listado-dispositivos.page').then( m => m.ListadoDispositivosPage)
  },  {
    path: 'listado-mediciones',
    loadComponent: () => import('./listado-mediciones/listado-mediciones.page').then( m => m.ListadoMedicionesPage)
  },


];
