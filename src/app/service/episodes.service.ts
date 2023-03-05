import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../models/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  constructor(private http: HttpClient) {}
  private url_api: string = 'https://rickandmortyapi.com/api/episode';

  // Llamado a la API para traer detalles de un episodio por id
  getEpisodeById(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.url_api}/${id}`);
  }
}
