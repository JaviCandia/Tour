import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero' //Eliminar
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; //Recordar que Hero es una clase con atributos en hero.ts //Eliminar?
  
  constructor(
    private route: ActivatedRoute, //Variables del tipo del import
    private heroService: HeroService, //variable heroService extrae el método de hero.service.ts
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    const id = +this.route.snapshot.paramMap.get('id'); //??? //+ convierte la cadena a número
    
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  regresa(): void{
    this.location.back();
  }
}
