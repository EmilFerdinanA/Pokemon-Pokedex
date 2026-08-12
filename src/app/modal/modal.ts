import { Component, input, output } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
})
export class Modal {
  pokemon = input<Pokemon | null>(null);

  close = output<void>();

  abilities = ['abilities1', 'abilities2'];
}
