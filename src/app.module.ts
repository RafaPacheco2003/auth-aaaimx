import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/infrastructure/entities/UserEntity';
import { UsersModule } from './users/infrastructure/config/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d2f5qec9c44c73drlvm0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'aaaimx_auth_user',
      password: 'CSg3c5UqzBiEp45fIW2rKi83x56Rt0Rb',
      database: 'aaaimx_auth',
      entities: [UserEntity],
      synchronize: true, // Solo para desarrollo
      ssl: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}