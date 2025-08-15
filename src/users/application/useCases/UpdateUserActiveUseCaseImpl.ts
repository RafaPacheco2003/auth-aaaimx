import { Inject } from "@nestjs/common";
import { UserErrors } from "src/users/domain/errors/UserErrors";
import { UpdateUserActiveUseCase } from "src/users/domain/port/in/UpdateUserActiveUseCase";
import type { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";

export class UpdateUserActiveUseCaseImpl implements UpdateUserActiveUseCase {
    constructor(
        @Inject('UserRepositoryPort') private readonly userRepository: UserRepositoryPort
    ) { }

    async updateActive(id: string): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) throw UserErrors.notFound(id);
        if (user.is_active) throw UserErrors.alreadyVerified(id);
        await this.userRepository.updateActive(id);
    }


}