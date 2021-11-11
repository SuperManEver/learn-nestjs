import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Wassby  World is again and here we go again!';
  }

  getGreetings(): string {
    return 'Greetings';
  }
}
