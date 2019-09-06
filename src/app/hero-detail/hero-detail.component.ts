import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; //Recordar que Hero es una clase con atributos en hero.ts
  constructor() { }

  ngOnInit() {
  }

}
