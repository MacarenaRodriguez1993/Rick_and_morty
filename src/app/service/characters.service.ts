import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  //Llamado a la API para traer todos los personajes
  getCharacters(page: number): Observable<any> {
    return this.http.get<Character[]>(
      `${environment.baseUrl}character?page=${page}`
    );
  }
  //Llamado a la API para traer un personaje por id
  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${environment.baseUrl}character/${id}`);
  }
}
