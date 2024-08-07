import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  path = 'https://pokeapi.co/api/v2'


  all(): Observable<any> {
    return this.http.get(`${this.path}`);
  }
}