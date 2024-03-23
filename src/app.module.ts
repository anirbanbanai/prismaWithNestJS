import { Module } from '@nestjs/common';
import { BookModules } from './book/book.modules';

@Module({
  imports: [BookModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
