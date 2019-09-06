import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Importa la clase Hero desde el archivo hero.ts
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes', //selector css del componente, identifica el nombre del componente HTML dentro de una plantilla padre
  templateUrl: './heroes.component.html', //localización de la plantilla del componente
  styleUrls: ['./heroes.component.css'] //localización de los estilos privados del componente
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero: Hero ={ //Heroe heroe = new Heroe(1,"Windstorm");
    id: 1,
    name: 'Windstorm',
  };

  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor(){
  }
  ngOnInit() {
  }
}
