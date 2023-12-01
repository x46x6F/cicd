import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getCat(): string {
    return "Oh! It's a cat!";
  }
}
