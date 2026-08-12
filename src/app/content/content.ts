import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Card } from '../card/card';
import { Pokemon } from '../pokemon.model';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'app-content',
  imports: [Card, Pagination],
  templateUrl: './content.html',
})
export class Content implements OnInit {
  private pokemonService = inject(PokemonService);

  pokemons = signal<Pokemon[]>([]);
  pokemonsSlice = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    return this.pokemons().slice(startIndex, endIndex);
  });

  currentPage = signal(1);
  pageSize = signal(10);

  totalItems = computed(() => this.pokemons().length);

  totalPages = computed(() => Math.ceil(this.totalItems() / this.pageSize()));

  onPageChange(page: number) {
    this.currentPage.set(page);
  }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe((data: any) => {
      this.pokemons.set(data);
    });
  }
}
