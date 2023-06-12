export class StatisticsModel {
  name: string;
  value: number;

  constructor({ name, value }: { name: string; value: number }) {
    this.name = name;
    this.value = value;
  }

  static fromJson(json: any): StatisticsModel {
    const parsedJson = JSON.parse(json);
    return new StatisticsModel({
      name: parsedJson.stat.name,
      value: parsedJson.base_stat,
    });
  }

  public toJson(): any {
    return {
      name: this.name,
      value: this.value,
    };
  }
}
