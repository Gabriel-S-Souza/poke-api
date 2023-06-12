import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/http_client';
import { PokemonModel } from './models/pokemon_model';

@Injectable()
export class PokemonsRepository {
  private http = new HttpClient(new HttpService());

  async getPokemons(page: number): Promise<PokemonModel[]> {
    try {
      const response = await this.http.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * 50}&limit=50`,
      );
      const responseFul = addImageAndIdToPokemon(response.data.results, page);
      return responseFul.map((pokemon) => new PokemonModel(pokemon));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}

function addImageAndIdToPokemon(pokemons: any[], page: number): any[] {
  return pokemons.map((pokemon, index) => {
    const imageAndIdTuple = {};
    const id = index + 1 + page * 50;
    imageAndIdTuple['id'] = id;
    imageAndIdTuple['imageUrl'] =
      id <= 1010
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        : `https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png`;

    return { ...pokemon, ...imageAndIdTuple };
  });
}
