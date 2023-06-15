import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/http_client';
import {
  API_BSE_URL,
  AVAILABLE_IMAGES,
  PAGE_TOTAL,
  LIMIT_IN_PAGE,
  POKEMONS_ENDPOINT,
} from 'src/constants';

@Injectable()
export class PokemonsRepository {
  private http = new HttpClient(new HttpService());

  async getPokemons(page: number): Promise<any[]> {
    try {
      const response = await this.http.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          page * LIMIT_IN_PAGE
        }&limit=${LIMIT_IN_PAGE}`,
      );
      return this.addImageAndId(response.data, page);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  private addImageAndId(pokemons: any, page: number): any {
    const results: any[] = pokemons.results.map((pokemon, index) => {
      const imageAndIdTuple = {};
      const id = index + 1 + page * LIMIT_IN_PAGE;
      imageAndIdTuple['id'] = id;
      imageAndIdTuple['imageUrl'] =
        id <= AVAILABLE_IMAGES
          ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          : `https://upload.wikimedia.org/wikipedia/commons/b/b1/Pok%C3%A9ball.png`;

      return { ...pokemon, ...imageAndIdTuple };
    });
    return {
      ['count']: pokemons.count,
      ['next']:
        page < PAGE_TOTAL
          ? `${API_BSE_URL}${POKEMONS_ENDPOINT}?page=${+page + 1}`
          : null,
      ['previous']:
        page > 0 ? `${API_BSE_URL}${POKEMONS_ENDPOINT}?page=${page - 1}` : null,
      ['results']: results,
    };
  }
}
