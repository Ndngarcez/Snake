import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-snake-game',
  styleUrl: './snake-game.css',
  templateUrl: './snake-game.html',
})
//aqui esta a logica do jogo
export class SnakeGame {

pontos:number =0;

//********************************************************************* */
//aumentar os pontos

aumentarPontos() {
  this.pontos = this.pontos + 10;
}
//********************************************************************* */

largura:number=10
altura:number=10
tamanho_da_celula:number=25 

celulas: number[] = Array.from(
  { length: this.largura * this.altura },
  (_, i) => i
);

posicao_da_cobra: number =44;

//movimentos

moverDireita() {
  this.posicao_da_cobra = this.posicao_da_cobra + 1;
}
moveresquerda() {
  this.posicao_da_cobra = this.posicao_da_cobra - 1;
}

movercima() {
  this.posicao_da_cobra = this.posicao_da_cobra - this.largura  ;
}

moverbaixo() {
  this.posicao_da_cobra = this.posicao_da_cobra + this.largura  ;
}
}



