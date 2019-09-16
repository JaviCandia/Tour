import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []; //DUDA!!! cómo funciona esta linea???
  
  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

  //Inject into the HeroService es lo que falta por hacer
}
