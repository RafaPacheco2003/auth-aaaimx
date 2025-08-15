import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './shared/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/infrastructure/entities/UserEntity';
import { UsersModule } from './users/infrastructure/config/users.module';

@Module({
  imports: [
  DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}