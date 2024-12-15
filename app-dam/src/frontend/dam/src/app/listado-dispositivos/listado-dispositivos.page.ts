import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';  // Solo importa desde standalone
import { DispositivoService } from '../services/dispositivos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CambiarFondoColorDirective } from '../directives/cambiarfondocolor.directive';
import { CambiarAmayusculaPipe } from '../pipes/cambiar-amayuscula.pipe';


@Component({
  selector: 'app-listado-dispositivos',
  templateUrl: './listado-dispositivos.page.html',
  styleUrls: ['./listado-dispositivos.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
//    IonLabel,
    RouterModule,
    CambiarFondoColorDirective, 
    CambiarAmayusculaPipe,
  ]
})

export class ListadoDispositivosPage implements OnInit {

  dispositivos: any=[] =[]; //Array de dispositivos

  constructor(private route: ActivatedRoute,private _dispositivoService: DispositivoService) {}
 
  @Input()
  dispositivoId='';

 ngOnInit() {
   this._dispositivoService.getDispositivos()
      .then((data: any) => {
        console.log('Datos recibidos desde el backend:', data);
        this.dispositivos = data; // Asignación de los dispositivos al array
      })
      .catch((error) => {
        console.error('Error al obtener dispositivos:', error);
      });

    console.log('Estado inicial de dispositivos:', this.dispositivos);
  }
  
}