import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';

@Service()
export class PokemonService {
  private http = inject(HttpClient);

  getPokemonList() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').pipe(
      switchMap((response) => {
        const requests = response.results.map((pokemon: any) => this.http.get(pokemon.url));

        return forkJoin(requests);
      }),
    );
  }

  getPokemonMoves(id: number) {
    return this.http.get<any>(`https://pokeapi.co/api/v2/move/${id}`);
  }
}
