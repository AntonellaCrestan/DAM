import { Injectable } from '@angular/core';
import { Dispositivo } from '../interfaces/dispositivo';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private _http: HttpClient) { }

  getDispositivos () {
    return firstValueFrom(this._http.get('http://localhost:8000/dispositivo'))
  }
}



