import * as firebase from 'firebase';

export class Bd {
    public publicar(post: any): void{
        firebase.database()
                .ref(`publicacoes/${btoa(post.email)}`)
                .push({titulo: post.titulo}).then().catch;
    }
}