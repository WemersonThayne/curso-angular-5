import { Progresso } from './progresso.service';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class Bd {

    private PATH_BASE_PUBLICACAO = 'publicacoes/';
    private PATH_BASE_IMAGEM = 'imagens/';
    constructor(private progresso: Progresso) {
    }

    public publicar(post: any): void {
        firebase.database()
            .ref(`${this.PATH_BASE_PUBLICACAO + btoa(post.email)}`)
            .push({ titulo: post.titulo })
            .then((response) => {
                this.saveImagem(response.key, post);
            })
            .catch((error) => {
                console.log('error to create post:', error);
            });
    }

    private saveImagem(nomeImagem: string, post: any): void {
        firebase.storage().ref().child(`${this.PATH_BASE_IMAGEM + nomeImagem}`)
            .put(post.imagem)
            .on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot: any) => {
                    this.progresso.state = snapshot;
                    this.progresso.status = 'andamento';
                }, (error) => {
                    this.progresso.status = 'error';
                }, () => {
                    this.progresso.status = 'complete';

                });
    }


    consultarPublicacoes(email: string): Promise<any> {
       return new Promise((resolve, reject) =>{
        firebase.database()
            .ref(`${this.PATH_BASE_PUBLICACAO + btoa(email)}`)
            .orderByKey()
            .once('value')
            .then((snapshot: any) => {
                let publicacoes: Array<any> = [];

                snapshot.forEach((childSnapshot: any) => {

                    let publicacao = childSnapshot.val();

                    firebase.storage()
                        .ref()
                        .child(`${this.PATH_BASE_IMAGEM + childSnapshot.key}`)
                        .getDownloadURL().then((url: string) => {
                            
                            publicacao.url_imagem = url;
                            firebase.database()
                                    .ref(`usuarios/${btoa(email)}`)
                                    .once('value')
                                    .then((snapshot: any) =>{                                       
                                        publicacao.nome_usuario = snapshot.val().nomeUsuario;
                                        publicacoes.push(publicacao);
                                    })
                                    .catch((error) =>{
                                        console.log('error get user:',error);
                                    });

                        });
                        resolve(publicacoes.reverse());
                });
                
            }).catch((error) => {
                console.log('error to get publish:', error);
            });

       });

    }
}