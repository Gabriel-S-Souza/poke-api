import { Injectable } from '@nestjs/common';

@Injectable()
export class PokemonDetailsRepository {
  getPokemonDetails() {
    return `Now Get Details`;
  }
}
