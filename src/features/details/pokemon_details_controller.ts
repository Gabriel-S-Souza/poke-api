import { Controller, Get } from '@nestjs/common';
import { PokemonDetailsRepository } from './pokemon_details_repository';

@Controller()
export class PokemonDetailsController {
  constructor(
    private readonly pokemonDetailsRepository: PokemonDetailsRepository,
  ) {}

  @Get('/details')
  getPokemonDetails() {
    return this.pokemonDetailsRepository.getPokemonDetails();
  }
}
