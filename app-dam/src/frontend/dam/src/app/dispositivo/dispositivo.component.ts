import { Component, OnInit } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';

@Component({
  standalone: true,
  selector: 'app-dispositivo',
  imports: [],
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.scss'],
})
export class DispositivoComponent {
  @Input ()
  dispositivo: any
}
