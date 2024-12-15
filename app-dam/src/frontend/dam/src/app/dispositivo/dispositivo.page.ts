import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DispositivoService } from '../services/dispositivos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ValvulaService } from '../services/valvula.service';
import { HttpClient } from '@angular/common/http';

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
    IonButton,
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
  valveState=false; //Inicializar el estado cerrado
  //subscription: Subscription

  //mouseMove$ = fromEvent(document,'mousemove')

  constructor(private route: ActivatedRoute, private _dispositivoService: DispositivoService,
    private valvulaService: ValvulaService, private http: HttpClient ) {
  //  this.observable$ = interval(1000)
    this.humedadaleatoria = Math.floor(Math.random()*101);
  }

//Seccion: Configuración de la página donde se visualiza cada dispositivo en una tarjeta
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
    
//Seccion para darle la función al segundo botón encargado de abrir o cerrar la válvula
        async toggleValve() {
          try {
            const newApertura = this.valveState ? 0 : 1; // Si valveState es true, asigna 0, sino, 1
            const response = await this.valvulaService.registrarAccion(
              this.dispositivo.electrovalvulaId,
              newApertura
            );
 
            this.valveState = !this.valveState; // Invertimos el estado para el siguiente clic
            console.log('Acción registrada:', response);
          } catch (error) {
            console.error('Error al registrar la acción:', error);
            // Mostrar un mensaje de error al usuario
          }
        }

    }
