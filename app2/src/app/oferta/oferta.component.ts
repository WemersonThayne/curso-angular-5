import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
  //  this.route.params.subscribe((param: any) => {
  //       this.getOfertaByID(param.id);
  //   });
    this.getOfertaByID(this.route.snapshot.params['id']);
  }

  getOfertaByID(id: number): void {
    this.ofertasService.getOfertasByID(id)
    .subscribe(oferta => {
      this.oferta = oferta[0];
    });
  }

}
