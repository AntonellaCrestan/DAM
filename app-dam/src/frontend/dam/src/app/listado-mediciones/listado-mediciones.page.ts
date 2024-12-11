import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listado-mediciones',
  templateUrl: './listado-mediciones.page.html',
  styleUrls: ['./listado-mediciones.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListadoMedicionesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
