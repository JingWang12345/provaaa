import { Component, OnInit } from '@angular/core';
import { HEROES } from '../ mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  heroes?: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
