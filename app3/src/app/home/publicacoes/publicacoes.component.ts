import { Bd } from '../../services/bd.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  email: string;
  publicacoes: Array<any> = [];

  constructor(private bd : Bd) { }
  
  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
      this.atualizarTimeLine();
    });
  }

  atualizarTimeLine(): void{   
    this.bd.consultarPublicacoes(this.email).then((publicacoes) => {
        this.publicacoes = publicacoes;
    });
  }

}
