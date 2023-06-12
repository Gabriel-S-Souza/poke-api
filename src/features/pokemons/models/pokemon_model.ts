export class PokemonModel {
  id: number;
  name: string;
  imageUrl: string;

  constructor({
    id,
    name,
    imageUrl,
  }: {
    id: number;
    name: string;
    imageUrl: string;
  }) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  static fromJson(json: any): PokemonModel {
    const parsedJson = JSON.parse(json);
    return new PokemonModel({
      id: parsedJson.id,
      name: parsedJson.name,
      imageUrl: parsedJson.sprites.front_default,
    });
  }

  public toJson(): any {
    return {
      id: this.id,
      name: this.name,
      imageUrl: this.imageUrl,
    };
  }
}
