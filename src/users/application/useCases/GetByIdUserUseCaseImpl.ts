import { Inject } from "@nestjs/common";
import { User } from "src/users/domain/models/User";
import { GetByIdUserUseCase } from "src/users/domain/port/in/GetByIdUserUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";
export class GetByIdUserUseCaseImpl implements GetByIdUserUseCase {
    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepository: UserRepositoryPort
    ) {}

    async getById(id: string): Promise<User | null> {
        return await this.userRepository.findById(id);
    }
}