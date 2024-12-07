import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ListadoDispositivosComponent } from './listado-dispositivos/listado-dispositivos.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,ListadoDispositivosComponent],
})
export class AppComponent {
  constructor() {}
}
