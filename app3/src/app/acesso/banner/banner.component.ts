import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';
import { Imagem } from './Imagem';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner',[
      state('escondido',style({
        opacity: 0
      })),
      state('visivel',style({
        opacity: 1
      })),
      transition('escondido => visivel', animate('1s ease-in')),
      transition('visivel => escondido', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {
  private VISIVEL :string = 'visivel';
  private ESCONDIDO :string = 'escondido';

  public imagens: any[] =[
    {estado: this.VISIVEL, url:'/assets/banner-acesso/img_1.png'},
    {estado: this.ESCONDIDO, url:'/assets/banner-acesso/img_2.png'},
    {estado: this.ESCONDIDO, url:'/assets/banner-acesso/img_3.png'},
    {estado: this.ESCONDIDO, url:'/assets/banner-acesso/img_4.png'},
    {estado: this.ESCONDIDO, url:'/assets/banner-acesso/img_5.png'}
  ]
 
  constructor() { }

  ngOnInit() {
    this.trocarImagem();
  }
  trocarImagem(){
    setTimeout(()=>{      
      this.logicaRotacao();
    },2000);
  }

  logicaRotacao(): void{

    let index: number; 
    for(let i:number = 0; i <= 4; i++){
      if(this.imagens[i].estado === this.VISIVEL){
          this.imagens[i].estado = this.ESCONDIDO;
          index = i ===  4 ? 0 : i + 1;
          break;
      }
    }

    this.imagens[index].estado = this.VISIVEL;
    this.trocarImagem();
  }

}
