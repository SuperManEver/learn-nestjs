import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/controller';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
