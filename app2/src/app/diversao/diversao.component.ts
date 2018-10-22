import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getOfertasByCat();
  }

  getOfertasByCat(): void {
    this.ofertasService.getOfertasByCategorias('diversao')
      .subscribe(ofertas => {
        this.ofertas = ofertas;
        console.log('diversao' + this.ofertas);
      });
  }

}
