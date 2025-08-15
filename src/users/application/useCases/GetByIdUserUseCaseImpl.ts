import { Inject } from "@nestjs/common";
import { UserErrors } from "src/users/domain/errors/UserErrors";
import { User } from "src/users/domain/models/User";
import { GetByIdUserUseCase } from "src/users/domain/port/in/GetByIdUserUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";
export class GetByIdUserUseCaseImpl implements GetByIdUserUseCase {
    constructor(
        @Inject('UserRepositoryPort')
        private readonly userRepository: UserRepositoryPort
    ) { }

    async getById(id: string): Promise<User | null> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new UserErrors.UserNotFoundError(id);
        }
        return user;
    }
}