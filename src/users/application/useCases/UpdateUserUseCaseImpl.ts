import { UserErrors } from "src/users/domain/errors/UserErrors";
import { User } from "src/users/domain/models/User";
import { UpdateUserUseCase } from "src/users/domain/port/in/UpdateUserUseCase";
import { UserRepositoryPort } from "src/users/domain/port/out/UserRepositoryPort";

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(private userRepository: UserRepositoryPort) { }

  async update(id: string, userData: Partial<User>): Promise<User> {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw UserErrors.notFound(id);
    }
    existingUser.update(userData); // Si update lanza UserErrors, NestJS lo maneja
    await this.userRepository.update(existingUser);
    return existingUser;
  }
}