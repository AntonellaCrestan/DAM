import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dispositivo/:dispositivoId', // La ruta específica debe ir primero
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
  },

  {
    path: 'listado-dispositivos',
    loadComponent: () => import('./listado-dispositivos/listado-dispositivos.page').then( m => m.ListadoDispositivosPage),
  },
  

 // {
 //   path: 'home',
 //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
 // },
  {
    path: '',
    redirectTo: 'listado-dispositivos',
    pathMatch: 'full',
  },

/*   {
    path: 'dispositivo',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
  }, */
  {
    path: 'listado-mediciones/:dispositivoId',
    loadComponent: () => import('./listado-mediciones/listado-mediciones.page').then( m => m.ListadoMedicionesPage),
  },
  {
    path: 'listado-mediciones',
    loadComponent: () => import('./listado-mediciones/listado-mediciones.page').then( m => m.ListadoMedicionesPage),
  },
];

