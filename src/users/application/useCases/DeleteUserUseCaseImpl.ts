import { Inject } from "@nestjs/common";
import { UserErrors } from "src/users/domain/errors/UserErrors";
import { User } from "src/users/domain/models/User";
import { DeleteUserUseCase } from "src/users/domain/port/in/DeleteUserUseCase";
import { GetAllUserUseCase } from "src/users/domain/port/in/GetAllUserUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";


export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepository: UserRepositoryPort
    ) {}

    async delete(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);
          if (!user) {
            throw UserErrors.notFound(id);
        }
        await this.userRepository.delete(id);
    }
}