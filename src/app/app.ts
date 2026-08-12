import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Content } from './content/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Content],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pokemon-pokedex');
}
