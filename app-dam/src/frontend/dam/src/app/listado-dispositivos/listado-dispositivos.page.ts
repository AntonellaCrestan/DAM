import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';  // Solo importa desde standalone
import { DispositivoService } from '../services/dispositivos.service';
import { interval, Observable } from 'rxjs';


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
    IonLabel
  ]
})

export class ListadoDispositivosPage implements OnInit {

  observable$: Observable<any>
  dispositivos:any=[]

  constructor(private _dispositivoService: DispositivoService)
    {
      this.observable$=interval(1000)
    }
  

    ngOnInit() {
      this._dispositivoService.getDispositivos()
        .then((data) => {
          console.log('Datos recibidos desde el backend:', data);
          this.dispositivos = data;
        })
        .catch((error) => {
          console.error('Error al obtener dispositivos:', error);
        });
  
      console.log('Estado inicial de dispositivos:', this.dispositivos);
    }
  }