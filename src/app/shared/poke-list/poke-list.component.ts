import { Component, OnInit } from '@angular/core';

import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})

export class PokeListComponent implements OnInit {
  
  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }

  public fundoPorTipo(value: string) {
    switch (value) {
      case 'normal':   return '#a4625a';
      case 'fire':     return '#ff9441';
      case 'water':    return '#5a9ca4';
      case 'grass':    return '#399494';
      case 'flying':   return '#e6e6a4';

      case 'fighting': return '#bda452';
      case 'poison':   return '#cd62b4';
      case 'electric': return '#f6e652';
      case 'ground':   return '#8b6218';
      case 'rock':     return '#9c9483';

      case 'psychic':  return '#f6de00';
      case 'ice':      return '#e6e6f6';
      case 'bug':      return '#31ac41';
      case 'ghost':    return '#d5accd';
      case 'steel':    return '#8bb4a4';

      case 'dragon':   return '#de7339';
      case 'dark':     return '#414152';
      case 'fairy':    return '#ffd5bd';

      default:         return 'a4625a';
    }
  }

}
