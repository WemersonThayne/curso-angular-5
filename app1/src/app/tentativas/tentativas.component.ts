import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit,OnChanges {
  
  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)];
  @Input() public tentativas: number;

  constructor() {

  }

  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length){
        let indece = this.coracoes.length - this.tentativas;
        this.coracoes[indece - 1].setCheio(false);
    }
  }

  ngOnInit() {
  }

}
