import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Medicion } from '../interfaces/medicion';

@Injectable({
  providedIn: 'root'
})
export class MedicionesService {

  constructor(private _http: HttpClient) { }

  getMedicionesPorNombre (dispositivoId:number) {
    const url2 = `http://localhost:8000/mediciones/${dispositivoId}`;
    return firstValueFrom(this._http.get<Medicion[]>(url2));
  }
}

