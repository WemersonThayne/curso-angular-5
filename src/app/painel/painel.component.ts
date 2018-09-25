import { FRASES } from './frases-mock';
import { Frase } from './../shared/frase.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduz a Frase:';
  public resposta: string = '';

  public rodada: number = 0;
  public fraseRodada: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizarFraseRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }


  public atualizarResposta(resp: Event): void {
    this.resposta = (<HTMLInputElement>resp.target).value;
  }

  public verificarResposta(): void {

    if (this.fraseRodada.getFraPtBr() === this.resposta) {
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }else{
        this.atualizarFraseRodada();
      }


    } else {
      this.tentativas--;
      if(this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }

  }

  private atualizarFraseRodada(): void {
    this.fraseRodada = this.frases[this.rodada];
    this.resposta = '';
  }

}
