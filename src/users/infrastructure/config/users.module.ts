import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/UserEntity';
import { UserController } from '../controllers/UserController';
import { UserRepositoryAdapter } from '../repositories/UserRepositoryAdapter';
import { UserService } from '../../application/services/UserService';
import { CreateUserUseCaseImpl } from '../../application/useCases/CreateUserCaseUseImpl';
import { DeleteUserUseCaseImpl } from '../../application/useCases/DeleteUserUseCaseImpl';
import { GetAllUserUseCaseImpl } from '../../application/useCases/GetAllUserUseCaseImpl';
import { GetByIdUserUseCaseImpl } from '../../application/useCases/GetByIdUserUseCaseImpl';
import { UpdateUserUseCaseImpl } from '../../application/useCases/UpdateUserUseCaseImpl';
import { UserRepositoryPort } from '../../domain/port/out/UserRepositoryPort';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [
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
    {
      provide: 'UpdateUserUseCase',
      useFactory: (userRepository: UserRepositoryPort) => new UpdateUserUseCaseImpl(userRepository),
      inject: ['UserRepositoryPort'],
    },
    UserService,
  ],
  exports: [
    UserService,
    'UserRepositoryPort',
    'CreateUserUseCase',
    'DeleteUserUseCase',
    'GetAllUserUseCase',
    'GetByIdUserUseCase',
    'UpdateUserUseCase',
  ],
})
export class UsersModule {}
