import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [ //Arreglo de rutas
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent }, //DUDA! CÓMO FUNCIONA? !!!!
  //de dónde sale el nombre de los path?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Esto a dónde importa?
  exports: [RouterModule]                  //Esto a dónde exporta?
})
export class AppRoutingModule { }

//En general, para qué sirve esta clase?