import { Component, EventEmitter, Input, Output, output, OnInit } from '@angular/core';
import  { Dispositivo } from '../interfaces/dispositivo';


@Component({
  standalone: true,
  selector: 'app-dispositivo',
  imports: [],
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
})
export class DispositivoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
//  @Input ()
//  dispositivo: any

//  onChange = output <any> ()

//  cambiarArea () {
//    this.dispositivo.area= 'Área nueva'
//    this.onChange.emit(this.dispositivo.area)
//  }
//}
