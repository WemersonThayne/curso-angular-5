import { Oferta } from './../models/oferta.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
   this.getOfertas();
  }

  getOfertas(): void {
    this.ofertasService.getOfertas()
      .subscribe(ofertas => this.ofertas = ofertas);
  }
}
