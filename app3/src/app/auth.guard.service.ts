import { Auth } from './acesso/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard  implements CanActivate{

    constructor(private auth : Auth){
    }

    canActivate(): boolean{
        return this.auth.autenticado();
    }
}