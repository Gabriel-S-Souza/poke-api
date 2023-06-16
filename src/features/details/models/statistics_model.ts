export class StatisticsModel {
  name: string;
  value: number;

  constructor({ name, value }: { name: string; value: number }) {
    this.name = name;
    this.value = value;
  }

  static fromJson(json: any): StatisticsModel {
    return new StatisticsModel({
      name: json.stat.name,
      value: json.base_stat,
    });
  }

  public toJson(): any {
    return {
      name: this.name,
      value: this.value,
    };
  }
}
