import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './users/infrastructure/entities/UserEntity';
import { UserController } from './users/infrastructure/controllers/UserController';
import { UserRepositoryAdapter } from './users/infrastructure/repositories/UserRepositoryAdapter';
import { UserService } from './users/application/services/UserService';
import { CreateUserUseCaseImpl } from './users/application/useCases/CreateUserCaseUseImpl';
import { DeleteUserUseCaseImpl } from './users/application/useCases/DeleteUserUseCaseImpl';
import { GetAllUserUseCaseImpl } from './users/application/useCases/GetAllUserUseCaseImpl';
import { GetByIdUserUseCaseImpl } from './users/application/useCases/GetByIdUserUseCaseImpl';

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
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserRepositoryAdapter,
    {
      provide: 'UserRepositoryPort',
      useClass: UserRepositoryAdapter,
    },
    {
      provide: 'CreateUserUseCase',
      useClass: CreateUserUseCaseImpl,
    },
    {
      provide: 'DeleteUserUseCase',
      useClass: DeleteUserUseCaseImpl,
    },
    {
      provide: 'GetAllUserUseCase',
      useClass: GetAllUserUseCaseImpl,
    },
    {
      provide: 'GetByIdUserUseCase',
      useClass: GetByIdUserUseCaseImpl,
    },
    UserService,
  ],
})
export class AppModule {}