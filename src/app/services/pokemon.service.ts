import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  path = 'https://pokeapi.co/api/v2/pokemon'


  all(limit: number = 151): Observable<any[]> {
    return this.http.get<any>(`${this.path}?limit=${limit}`).pipe(
      switchMap(data => {
        const pokemonRequests: Observable<any>[] = data.results.map((pokemon: any) => this.http.get<any>(pokemon.url));
        return forkJoin(pokemonRequests);
      })
    );
  }
  
}