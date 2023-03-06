import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private http: HttpClient) {}

  // Llamado a la API para traer detalles de un episodio por id
  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${environment.baseUrl}episode/${id}`);
  }
}
