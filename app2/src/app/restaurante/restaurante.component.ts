import { OfertasService } from './../ofertas.service';
import { Oferta } from './../models/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertasService]
})
export class RestauranteComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getOfertasByCat();
  }

  getOfertasByCat(): void {
      this.ofertasService.getOfertasByCategorias('restaurante')
        .subscribe(ofertas => {
          this.ofertas = ofertas;
          console.log(this.ofertas);
        });
  }

}
