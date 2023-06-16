import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpClient } from 'src/http_client';
import { PokemonDetailsModel } from './models/pokemon_details_model';

@Injectable()
export class PokemonDetailsRepository {
  private http = new HttpClient(new HttpService());

  async getDetails(id: number): Promise<PokemonDetailsResponse> {
    try {
      const response = await this.http.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      if (response.data) {
        const responseDescription = await this.http.get(
          `https://pokeapi.co/api/v2/pokemon-species/${id}`,
        );
        let descriptionText: string;
        if (responseDescription.data) {
          const descriptionJson = responseDescription.data[
            'flavor_text_entries'
          ].find((entry: any) => entry['language']['name'] === 'en');
          descriptionText = this.removeModifiers(
            descriptionJson['flavor_text'],
          );
        } else {
          descriptionText = 'Description not found.';
        }

        const pokemonDetails = PokemonDetailsModel.fromJson(response.data);
        const pokemonResponse = pokemonDetails.toJson();
        pokemonResponse['description'] = descriptionText;
        return pokemonResponse;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  private removeModifiers(text: string): string {
    return text.replace(/\n/g, ' ').replace(/\f/g, '').trim();
  }
}

interface PokemonDetailsResponse {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  moves: string[];
  statistics: StatisticsResponse[];
}

interface StatisticsResponse {
  name: string;
  baseStat: number;
}
