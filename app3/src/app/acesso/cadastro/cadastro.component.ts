import { Auth } from './../auth.service';
import { Usuario } from '../usuario.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();
  
  public hasError: boolean = false;
  public mensagemError: string;

  public formulario: FormGroup = new FormGroup({
      'email' : new FormControl(null, {validators: Validators.required}),
      'nome_completo': new FormControl(null, {validators: Validators.required}),
      'nome_usuario':new FormControl(null, {validators: Validators.required}),
      'senha': new FormControl(null, Validators.compose([
                                     Validators.required,
                                     Validators.minLength(6)
                              ])),
  });

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

  exibirPainelLogin():void{
    this.exibirPainel.emit('login');
  }

  cadastrar(): void{
    let usuario: Usuario = new Usuario();
    usuario.email =  this.formulario.value.email;
    usuario.nomeCompleto = this.formulario.value.nome_completo,
    usuario.nomeUsuario = this.formulario.value.nome_usuario,
    usuario.senha = this.formulario.value.senha
    
    this.auth.cadastrarUsuario(usuario).then(() => {
      this.exibirPainelLogin();
    }).catch( error =>{
      console.log('error to create user on firebase:',error);
      this.hasError = true;
      this.mensagemError = error.message;
    });
    
  }
}
