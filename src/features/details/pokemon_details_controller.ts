import { Controller, Get, Param } from '@nestjs/common';
import { PokemonDetailsRepository } from './pokemon_details_repository';

@Controller()
export class PokemonDetailsController {
  constructor(
    private readonly pokemonDetailsRepository: PokemonDetailsRepository,
  ) {}

  @Get('/details/:id')
  async getDetails(@Param('id') id: number): Promise<any> {
    return this.pokemonDetailsRepository.getDetails(id);
  }
}
