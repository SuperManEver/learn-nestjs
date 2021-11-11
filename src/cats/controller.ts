import { Controller, Get, Post, Req, Request } from '@nestjs/common';

const CATS = ['Seymor', 'Alan'];

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string[] {
    return CATS;
  }

  @Get('/:id')
  getPosts(@Req() request: Request): string {
    console.log(request);

    return CATS[0];
  }

  @Post()
  create(): string {
    return 'cat is created!';
  }
}
