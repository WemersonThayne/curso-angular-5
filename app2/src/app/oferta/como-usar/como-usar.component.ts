import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService]
})
export class ComoUsarComponent implements OnInit {

  public descricaoComoUsar: string;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.getComoUsarOferta(this.route.parent.snapshot.params['id']);
  }

  getComoUsarOferta(id: number): void {
    this.ofertasService.getComoUsarOfertaByID(id)
    .subscribe(data => {
      this.descricaoComoUsar = data[0].descricao;
    });
  }

}
