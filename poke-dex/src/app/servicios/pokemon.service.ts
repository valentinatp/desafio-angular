import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  enviarPokemon(nombrePokemon:string){
    console.log(nombrePokemon);
  }

  constructor() { }
}
