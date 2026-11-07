import { Component } from '@angular/core';
import { SnakeGame } from './snake-game/snake-game';

@Component({
  imports: [SnakeGame],
  selector: 'app-main',
  styleUrl: './main.css',
  templateUrl: './main.html',
})
export class Main {}
