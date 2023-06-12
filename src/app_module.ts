import { Module } from '@nestjs/common';
import { PokemonsModule } from './features/pokemons/pokemons_module';
import { PokemonDetailsModule } from './features/details/pokemon_details_module';

@Module({
  imports: [PokemonsModule, PokemonDetailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
