import { Controller, Get, Query } from '@nestjs/common';
import { PokemonsRepository } from './pokemons_repository';

@Controller()
export class PokemonsController {
  constructor(private readonly pokemonsRepository: PokemonsRepository) {}

  @Get('/pokemons')
  async getPokemons(@Query('page') page: number): Promise<any> {
    const pageNumber: number = page ? page : 0;
    return this.pokemonsRepository.getPokemons(pageNumber);
  }
}
