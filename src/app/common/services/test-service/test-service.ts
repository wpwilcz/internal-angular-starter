import {Injectable} from '@angular/core';

@Injectable()
export class TestService {
  data = 123;

  getData(): number {
    return this.data;
  }
}
