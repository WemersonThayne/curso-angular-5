import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public url_imagem_cor_cheio : string = './assets/coracao_cheio.png';
  public url_imagem_cor_vazio : string = './assets/coracao_vazio.png';
  
  constructor() { }

  ngOnInit() {
  }

}
