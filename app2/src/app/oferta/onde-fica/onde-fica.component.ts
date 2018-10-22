import { OfertasService } from './../../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public descricaoOndeFica: string;
  constructor(private route: ActivatedRoute, private ofertaService: OfertasService) { }

  ngOnInit() {
    this.getOndeFicaOferta(this.route.parent.snapshot.params['id']);
  }

  getOndeFicaOferta(id: number): void {
    this.ofertaService.getOndeFicaOfertaByID(id)
    .subscribe(data => {
      this.descricaoOndeFica = data[0].descricao;
    });
  }
}
