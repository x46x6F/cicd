import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller()
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('/cat')
  getCat(): string {
    return this.catService.getCat();
  }
}
