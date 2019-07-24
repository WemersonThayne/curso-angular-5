import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formLogin : FormGroup = new FormGroup({
    'email': new FormControl(null, {validators: Validators.required}),
    'senha': new FormControl(null,  Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))
  });

  public hasError: boolean = false;
  public mensagemError: string;
  constructor(private auth: Auth) { }

  ngOnInit() {
  }

  exibirPainelCadastro():void{
    this.exibirPainel.emit('cadastro');
  }

  onLogin(): void {
    this.mensagemError = undefined;
    this.auth.autenticacao(this.formLogin.value.email, this.formLogin.value.senha)
             .then(()=>{})
             .catch((error) =>{
              console.log('error to auth on firebase:',error);
              this.hasError = true;
              this.mensagemError = error.message;
             });
  }
  
}
