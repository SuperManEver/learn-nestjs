import { Injectable } from '@nestjs/common';

const CATS = ['Seymor', 'Alan'];

@Injectable()
class CatsService {
  findAll(): string[] {
    return CATS;
  }

  findOne(id: string) {
    console.log(id, typeof id);

    return `This cat returns a #${id} article`;
  }
}

export { CatsService };
