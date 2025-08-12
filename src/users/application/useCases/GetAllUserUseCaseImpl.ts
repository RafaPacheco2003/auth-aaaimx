import { Inject } from "@nestjs/common";
import { read } from "fs";
import { User } from "src/users/domain/models/User";
import { GetAllUserUseCase } from "src/users/domain/port/in/GetAllUserUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";

export class GetAllUserUseCaseImpl implements GetAllUserUseCase {
    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepository: UserRepositoryPort
    ) {}

    async getAll(): Promise<User[]> {
       return await this.userRepository.findAll();
    }
}