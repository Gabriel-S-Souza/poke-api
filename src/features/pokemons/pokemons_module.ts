import { Module } from '@nestjs/common';
import { PokemonsRepository } from './pokemons_repository';
import { PokemonsController } from './pokemons_controller';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [PokemonsController],
  providers: [PokemonsRepository],
})
export class PokemonsModule {}
