import { Module } from '@nestjs/common';
import { PokemonDetailsController } from './pokemon_details_controller';
import { PokemonDetailsRepository } from './pokemon_details_repository';

@Module({
  controllers: [PokemonDetailsController],
  providers: [PokemonDetailsRepository],
})
export class PokemonDetailsModule {}
