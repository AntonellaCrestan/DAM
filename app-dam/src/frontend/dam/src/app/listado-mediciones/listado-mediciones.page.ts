import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MedicionesService } from '../services/mediciones.service';
import { Medicion } from '../interfaces/medicion';

@Component({
  selector: 'app-listado-mediciones',
  templateUrl: './listado-mediciones.page.html',
  styleUrls: ['./listado-mediciones.page.scss'],
  standalone: true,
  imports: [
      IonTitle,
      IonToolbar,
      CommonModule,
      FormsModule,
      IonList,
      IonItem,
      IonLabel,
      IonContent,
      RouterModule,
    ]
})
export class ListadoMedicionesPage implements OnInit {

  mediciones: Medicion[] = [];
  
  constructor(private route: ActivatedRoute,private _medicionesService: MedicionesService) {}
  
  @Input()
  dispositivoId='';

  ngOnInit() {
    // Obtener el dispositivoId desde los parámetros de la ruta
    const dispositivoId = Number(this.route.snapshot.paramMap.get('dispositivoId'));
    console.log('ID del dispositivo:', dispositivoId); // Log para depuración */

    // Llamar al servicio para obtener los datos del dispositivo
    this._medicionesService.getMedicionesPorNombre(dispositivoId)
      .then(data3 => {
        console.log('Respuesta del servicio:', data3); // Log de los datos recibidos
        this.mediciones = data3; // Asignar los datos al objeto
      })
      .catch(error => {
        console.error('Error al obtener las mediciones:', error);
      });
  }
  
}
