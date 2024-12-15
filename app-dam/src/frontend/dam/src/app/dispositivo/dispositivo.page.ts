import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DispositivoService } from '../services/dispositivos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.page.html',
  styleUrls: ['./dispositivo.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
   // IonButton,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    RouterModule,
  ]
})
export class DispositivoPage implements OnInit {

  //observable$: Observable<any>
  dispositivo: any = {}; //Un solo dispositivo
  humedadaleatoria:number;
  //subscription: Subscription

  //mouseMove$ = fromEvent(document,'mousemove')

  constructor(private route: ActivatedRoute, private _dispositivoService: DispositivoService) {
  //  this.observable$ = interval(1000)
    this.humedadaleatoria = Math.floor(Math.random()*101);
  }


      ngOnInit() {
        // Obtener el dispositivoId desde los parámetros de la ruta
        const dispositivoId = Number(this.route.snapshot.paramMap.get('dispositivoId'));
        console.log('ID del dispositivo:', dispositivoId); // Log para depuración */
  
        // Llamar al servicio para obtener los datos del dispositivo
        this._dispositivoService.getDispositivoPorNombre(dispositivoId)
          .then(data2 => {
            console.log('Respuesta del servicio:', data2); // Log de los datos recibidos
            this.dispositivo = data2; // Asignar los datos al objeto
          })
          .catch(error => {
            console.error('Error al obtener el dispositivo:', error);
          });
      }
      


}
