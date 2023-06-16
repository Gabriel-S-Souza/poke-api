import { StatisticsModel } from './statistics_model';

export class PokemonDetailsModel {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  moves: string[];
  statistics: StatisticsModel[];

  constructor({
    id,
    name,
    imageUrl,
    description,
    height,
    weight,
    types,
    abilities,
    moves,
    statistics,
  }: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    height: number;
    weight: number;
    types: string[];
    abilities: string[];
    moves: string[];
    statistics: StatisticsModel[];
  }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
    this.height = height;
    this.weight = weight;
    this.types = types;
    this.abilities = abilities;
    this.moves = moves;
    this.statistics = statistics;
  }

  static fromJson(json: any): PokemonDetailsModel {
    return new PokemonDetailsModel({
      id: json.id,
      name: json.name,
      imageUrl: json['sprites']['other']['official-artwork']['front_default'],
      description: json.description,
      height: json.height,
      weight: json.weight,
      types: json.types.map((type: any) => type.type.name),
      abilities: json.abilities.map((ability: any) => ability.ability.name),
      moves: json.moves.map((move: any) => move.move.name),
      statistics: json.stats.map((stat: any) => StatisticsModel.fromJson(stat)),
    });
  }

  public toJson(): any {
    return {
      id: this.id,
      name: this.name,
      imageUrl: this.imageUrl,
      description: this.description,
      height: this.height,
      weight: this.weight,
      types: this.types,
      abilities: this.abilities,
      moves: this.moves,
      statistics: this.statistics.map((statistic) => statistic.toJson()),
    };
  }
}
