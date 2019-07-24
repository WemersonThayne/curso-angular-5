import { Progresso } from '../../services/progresso.service';
import { Bd } from '../../services/bd.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { interval } from 'rxjs/internal/observable/interval';

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
  imagem: any;
  progressoPublicacao: string = 'pendente';
  porcentagemUpload: number = 0;
  @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter<any>()

  constructor(public activeModal: NgbActiveModal, private bd: Bd, private progresso: Progresso) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
    });
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  publicar(){
    let observable  = interval(1000).subscribe(()=>{
      this.progressoPublicacao = 'andamento';
      this.porcentagemUpload = Math.round((this.progresso.state.bytesTransferred / this.progresso.state.totalBytes) * 100);
        if(this.progresso.status === 'complete'){
            observable.unsubscribe();
            this.progressoPublicacao = 'concluido';
            this.atualizarTimeLine.emit();

          }
    });
    this.bd.publicar({email:this.email,titulo:this.formulario.value.titulo,imagem: this.imagem});
  }

  preparatImagemUpload(event: Event){
    this.imagem = (<HTMLInputElement>event.target).files[0];
  }
 

}
