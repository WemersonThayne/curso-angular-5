import { Bd } from './../../bd.service';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'titulo': new FormControl(null)
  })
  closeResult: string;
  email: string;

  constructor(public activeModal: NgbActiveModal, private bd: Bd) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    })
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  publicar(){

    this.bd.publicar({email:this.email,titulo:this.formulario.value.titulo});
  }

 
}
