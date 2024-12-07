import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { DispositivosService } from '../services/dispositivos.service';
import { Dispositivo } from '../interfaces/dispositivo';
import { CommonModule } from '@angular/common';
import { DispositivoComponent } from '../dispositivo/dispositivo.component';

@Component({
  selector: 'app-listado-dispositivos',
  standalone: true,
  imports:[CommonModule,DispositivoComponent],
  templateUrl: './listado-dispositivos.component.html',
  styleUrls: ['./listado-dispositivos.component.scss'],
})
export class ListadoDispositivosComponent  {
  dispositivos: Dispositivo [] = []
  mostrar: boolean = true

  constructor(public serviceLogger: LoggerService, private serviceDispositivos: DispositivosService) { 

  }

  toogle () {
    this.mostrar = !this.mostrar
  }

  getDispositivos () {
    this.dispositivos = this.serviceDispositivos.getDispositivos()
  }

}
