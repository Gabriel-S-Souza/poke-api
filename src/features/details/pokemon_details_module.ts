import { Module } from '@nestjs/common';
import { PokemonDetailsController } from './pokemon_details_controller';
import { PokemonDetailsRepository } from './pokemon_details_repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PokemonDetailsController],
  providers: [PokemonDetailsRepository],
})
export class PokemonDetailsModule {}
