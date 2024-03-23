import { Module } from "@nestjs/common";
import { BookController } from "./book.controller";
import { BookServce } from "./book.service";
import { PrismaService } from "./prisma.service";


@Module({
    controllers:[BookController],
    providers:[BookServce,PrismaService]
})

export class BookModules{}