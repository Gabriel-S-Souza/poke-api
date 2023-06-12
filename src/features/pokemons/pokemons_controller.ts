import { Controller, Get, Query } from '@nestjs/common';
import { PokemonsRepository } from './pokemons_repository';

@Controller()
export class PokemonsController {
  constructor(private readonly pokemonsRepository: PokemonsRepository) {}

  @Get('/')
  async getPokemons(@Query('page') page: number): Promise<any> {
    const pageNumber: number = page ? page : 0;
    const response = await this.pokemonsRepository.getPokemons(pageNumber);
    return response.map((pokemon) => pokemon.toJson());
  }
}
