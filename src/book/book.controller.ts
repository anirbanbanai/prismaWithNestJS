import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookServce } from './book.service';
import { Book } from './book.module';

export class BookController {
  constructor(private readonly bookService: BookServce) {}

  @Get()
  async getAllBook(): Promise<Book[]> {
    return this.bookService.getAllBook();
  };

  @Post()
  async createBook(@Body() createdata:Book):Promise<Book>{
    return this.bookService.createBook(createdata)
  };

  @Get(":id")
  async getSingleBook(@Param() id:number):Promise<Book>{
    return this.bookService.getBook(id)
  };

  @Delete(":id")
  async deleteSingleBook(@Param() id:number):Promise<Book>{
    return this.bookService.deleteBook(id)
  };

  @Put(":id")
  async updateSingleBook(@Param() id:number, @Body() data:Book):Promise<Book>{
    return this.bookService.updateBook(id,data)
  };


}
