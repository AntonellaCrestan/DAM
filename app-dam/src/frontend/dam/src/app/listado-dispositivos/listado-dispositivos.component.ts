import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { DispositivoService } from '../services/dispositivos.service';
import { Dispositivo } from '../interfaces/dispositivo';
import { CommonModule } from '@angular/common';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';
import { IonicModule, IonList } from '@ionic/angular';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-listado-dispositivos',
  standalone: true,
  imports:[CommonModule,IonicModule],
  templateUrl: './listado-dispositivos.component.html',
  styleUrls: ['./listado-dispositivos.component.scss'],
})

export class ListadoDispositivosComponent  {
  dispositivos: Dispositivo [] = []
  mostrar: boolean = true
}
//  constructor(public serviceLogger: LoggerService, private serviceDispositivos: DispositivosService) { 

//  }

//  manejador(eventData:any) {
//    this.serviceLogger.logInfo(eventData)
//  } 

//  toogle () {
//    this.mostrar = !this.mostrar
//  }

//  getDispositivos () {
//    this.dispositivos = this.serviceDispositivos.getDispositivos()
//  }

//}
