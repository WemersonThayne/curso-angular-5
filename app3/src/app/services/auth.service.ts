import { Router } from '@angular/router'
import { Usuario } from '../acesso/usuario.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class Auth{

    constructor(private router: Router){

    }
    public token_id : string;

    public cadastrarUsuario(usuario : Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email,usuario.senha)
                .then((response: any) =>{
                    delete usuario.senha;
                    firebase.database().ref(`usuarios/${btoa(usuario.email)}`).set(usuario);
                });      
    }

    public autenticacao(email : string, senha: string): Promise<any>{
        return firebase.auth().signInWithEmailAndPassword(email,senha)
        .then((response) =>{
            firebase.auth().currentUser.getIdToken()
                    .then((idToken: string) =>{
                        this.token_id = idToken;
                        localStorage.setItem('idToken',this.token_id);
                        this.router.navigate(['/home']);
                    })
                    .catch( error =>{
                        console.log('error get token:',error);
                    });
        });
    }

    public autenticado(): boolean{  
        if(this.token_id === undefined && localStorage.getItem('idToken') !== null ){
            this.token_id = localStorage.getItem('idToken');               
        }
        return this.token_id !== undefined ;
    }

    public logout(): void {
        firebase.auth().signOut().then(() =>{
            localStorage.removeItem('idToken');
            this.token_id = undefined;
            this.router.navigate(['']);
        }).catch((error) =>{
            console.log('error to logout: ', error);
            
        });
        
    }
}