import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Card } from '../card/card';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-content',
  imports: [Card],
  templateUrl: './content.html',
})
export class Content implements OnInit {
  pokemons = signal<Pokemon[]>([]);
  pokemonService = inject(PokemonService);

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.pokemons.set(data);

      console.log(this.pokemons(), 'pjklfsd');
    });
  }
}
