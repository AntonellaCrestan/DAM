import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValvulaService {

  constructor(private _http: HttpClient) { }

  registrarAccion(electrovalvulaId: number, apertura: number) {
    const url = `http://localhost:8000/log_riegos/${electrovalvulaId}`;
    return firstValueFrom(this._http.post<any>(url, { apertura }))
      .then(response => {
        console.log('Respuesta del servidor:', response);
        // Procesar la respuesta
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
        // Manejar el error
    });
  }


}