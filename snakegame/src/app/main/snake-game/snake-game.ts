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
comida:number=25

celulas: number[] = Array.from(
  { length: this.largura * this.altura },
  (_, i) => i
);

posicao_da_cobra: number =44;
cobra: number[] = [44, 43, 42];

//movimentos

moverDireita() {
  let novaPosicao = this.cobra[0]  +1;

  if(novaPosicao%10===0){novaPosicao=novaPosicao-10}


  this.vericarcolisao(novaPosicao);
  this.cobra.unshift(novaPosicao);
  if(novaPosicao!=this.comida)
  this.cobra.pop();

  
  
  this.posicao_da_cobra = this.cobra[0];
  this.aumentar()
}
moveresquerda() {
  let novaPosicao = this.cobra[0] - 1;

  if(this.cobra[0]%10===0){novaPosicao=novaPosicao+10}
  this.vericarcolisao(novaPosicao);
  this.cobra.unshift(novaPosicao);
  if(novaPosicao!=this.comida)
  this.cobra.pop();

  
  
  this.posicao_da_cobra = this.cobra[0];
  this.aumentar()
}

movercima() {
let novaPosicao = this.cobra[0] - this.largura;

    if (novaPosicao<0){novaPosicao=novaPosicao+100};
    this.vericarcolisao(novaPosicao);
    this.cobra.unshift(novaPosicao);
     if(novaPosicao!=this.comida)
     this.cobra.pop();

  
     
     this.posicao_da_cobra = this.cobra[0];
     this.aumentar()
}

moverbaixo() {
  let novaPosicao = this.cobra[0] + this.largura;
   

  if (novaPosicao>=100){novaPosicao=novaPosicao-100};
  this.vericarcolisao(novaPosicao);
  this.cobra.unshift(novaPosicao);
  if(novaPosicao!=this.comida)
  this.cobra.pop();

 
  this.posicao_da_cobra = this.cobra[0];
  this.aumentar()
  

  
}

gerarComida() {

  this.comida = Math.floor(Math.random() * (this.largura * this.altura));

}



//metodo aumentar

  
aumentar() {
  if (this.posicao_da_cobra === this.comida) {
    this.pontos = this.pontos + 10;
    this.gerarComida();
  }
}

//metodo verificar colisoes

vericarcolisao(novaposicao:number) {

  if (this.cobra.includes(novaposicao))
  {

   alert ("Gameover")




}
}








}
