import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heros';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  // heroes = HEROS;
  heroes:Hero[];
  // hero: Hero = {
  //   name: 'fride',
  //   id: 1
  // };
  selectedHero: Hero;

  getHeros(): void {
    this.heroService.getHeros()
    .subscribe(heros => this.heroes = heros);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }

  ngOnInit() {
    this.getHeros();
  }

}


