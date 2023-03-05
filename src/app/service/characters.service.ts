import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Character } from '../models/character';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  private url_api: string = 'https://rickandmortyapi.com/api/character';

  //Llamado a la API para traer todos los personajes
  getCharacters(): Observable<any> {
    return this.http.get<Character[]>(this.url_api).pipe(pluck('results'));
  }
  //Llamado a la API para traer un personaje por id
  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.url_api}/${id}`);
  }
}
