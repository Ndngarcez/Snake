import { Main } from './main/main';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnakeGame } from './main/snake-game/snake-game';

@Component({
  imports: [Main, SnakeGame],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('snakegame');
}
