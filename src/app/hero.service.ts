import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './ mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  [x: string]: any;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
  return heroes;
  }
}