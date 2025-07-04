import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private baseUrl = 'http://localhost:8080/inscripcion/verificar';

  constructor(private http: HttpClient) {}

  verificarInscripcion(dni: string, actividad: string): Observable<string> {
    const params = new HttpParams()
      .set('dni', dni)
      .set('actividad', actividad);

    return this.http.get(`${this.baseUrl}`, {
      params,
      responseType: 'text'
    });
  }
}
