import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa PrismaModule

@Module({
  imports: [PrismaModule], // Asegúrate de agregar PrismaModule aquí
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
