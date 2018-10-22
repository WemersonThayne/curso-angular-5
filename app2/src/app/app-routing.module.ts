import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'restaurantes', component: RestauranteComponent },
{ path: 'diversao', component: DiversaoComponent },
{ path: 'oferta', component: HomeComponent },
{ path: 'oferta/:id', component: OfertaComponent,
    children: [
      {path: '', component: ComoUsarComponent},
      {path: 'como-usar', component: ComoUsarComponent},
      {path: 'onde-fica', component: OndeFicaComponent}
    ]
}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
