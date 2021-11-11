import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  getHello(): string {
    // return this.appService.getHello();

    return this.appService.getGreetings();
  }

  @Get('posts')
  getPosts(): string[] {
    return ['awesome'];
  }
}
