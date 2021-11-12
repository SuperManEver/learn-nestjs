import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [ArticleModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
