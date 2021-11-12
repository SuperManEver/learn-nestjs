import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

const CATS = ['Seymor', 'Alan'];

@Injectable()
export class CatsService {
  findAll(): string[] {
    return CATS;
  }

  findOne(id: string) {
    console.log(id, typeof id);

    return `This cat returns a #${id} article`;
  }

  create(createCatDto: CreateCatDto) {
    const { name, age } = createCatDto;

    console.log(`New cat ${name} with ${age}`);

    return createCatDto;
  }
}
