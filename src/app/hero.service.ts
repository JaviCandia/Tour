import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //Ahora esto jala a los heroes

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService { 
  constructor(private messageService: MessageService) { //En el constructor se hace la inyección

  } //DUDA

  getHeroes(): Observable<Hero[]>{ //Obtiene los datos del servidor
    this.messageService.add('Hero service: fetched heroes');
    return of(HEROES);
  }
}
