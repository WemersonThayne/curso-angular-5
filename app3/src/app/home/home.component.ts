import { Auth } from './../acesso/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IncluirPublicacaoComponent } from './incluir-publicacao/incluir-publicacao.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth, private modalService: NgbModal) { }

  ngOnInit() {
  }

  public logout(): void {
    this.auth.logout();
  }

  openFormModal() {
    const modalRef = this.modalService.open(IncluirPublicacaoComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  

}
