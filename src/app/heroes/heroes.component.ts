import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Importa la clase Hero desde el archivo hero.ts

import { HeroService } from '../hero.service'; //Import para la inyección del servicio.

@Component({
  selector: 'app-heroes', //selector css del componente, identifica el nombre del componente HTML dentro de una plantilla padre
  templateUrl: './heroes.component.html', //localización de la plantilla del componente
  styleUrls: ['./heroes.component.css'] //localización de los estilos privados del componente
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[]; //reemplazo por una simple declaración || servicio
  
  constructor(private heroService: HeroService){  //parámetro heroService, se define el sitio de inyección

  }
  ngOnInit() {
    this.getHeroes(); //Se llama al método getHeroes
  }
  getHeroes(): void{ //Jala a los heroes del servicio observable
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

   
  }
 
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  //Cosas útiles pero que no se ocupan
  hero: Hero ={ //Heroe heroe = new Heroe(1,"Windstorm");
  id: 1,
  name: 'Windstorm',
  };

  //getHeroes(): void { este ea el original getHeroes();
  //  this.heroes = this.heroService.getHeroes();
  //}
}
