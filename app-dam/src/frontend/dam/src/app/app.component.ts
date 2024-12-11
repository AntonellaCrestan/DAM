import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ListadoDispositivosPage } from './listado-dispositivos/listado-dispositivos.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, ListadoDispositivosPage],
})
export class AppComponent {
  constructor() {}
}
