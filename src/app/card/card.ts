import { Component, effect, input } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  pokemon = input<Pokemon | null>(null);
}
