import { Inject } from "@nestjs/common";
import { User } from "src/users/domain/models/User";
import { CreateUserUseCase } from "src/users/domain/port/in/CreateUserUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";

export class CreateUserUseCaseImpl implements CreateUserUseCase{

    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepository: UserRepositoryPort
    ) {}

    async create(user: User): Promise<void> {
        await this.userRepository.create(user);
    }

}