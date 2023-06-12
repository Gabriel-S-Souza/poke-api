import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpClient {
  constructor(private readonly http: HttpService) {}
  get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
}
