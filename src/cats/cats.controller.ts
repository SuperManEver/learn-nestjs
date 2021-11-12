import { Controller, Get, Post, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }

  @Get('/:id')
  getPosts(@Param('id') id: string): string {
    return this.catsService.findOne(id);
  }

  @Post()
  create(): string {
    return 'cat is created!';
  }
}
