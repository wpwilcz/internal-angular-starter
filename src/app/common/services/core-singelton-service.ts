import {Injectable} from '@angular/core';

@Injectable()
export class CoreSingeltonService {
  name: any;

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
