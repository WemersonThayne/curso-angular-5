import { Auth } from '../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IncluirPublicacaoComponent } from './incluir-publicacao/incluir-publicacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAddPost: boolean = false;
  @ViewChild('publicacoes',{static:false}) public publicacoes: any

  constructor(private auth: Auth, private modalService: NgbModal) { }
  
  ngOnInit() {
  }

  public logout(): void {
    this.auth.logout();
  }

  openFormModal() {
    this.isAddPost = true;
    const modalRef = this.modalService.open(IncluirPublicacaoComponent);
    modalRef.result.then((result) => {
      this.isAddPost = false;
    }).catch((error) => {
      this.isAddPost = false;
    });
  }

  public atualizarTimeLine(): void { 
    this.publicacoes.atualizarTimeLine();
  }

}
