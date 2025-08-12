import { User } from "src/users/domain/models/User";
import { CreateUserUseCase } from "src/users/domain/port/in/CreateUserUseCase";
import { DeleteUserUseCase } from "src/users/domain/port/in/DeleteUserUseCase";
import { GetAllUserUseCase } from "src/users/domain/port/in/GetAllUserUseCase";
import { GetByIdUserUseCase } from "src/users/domain/port/in/GetByIdUserUseCase";

export class UserService implements CreateUserUseCase, GetAllUserUseCase, GetByIdUserUseCase, DeleteUserUseCase{
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly getAllUserUseCase: GetAllUserUseCase,
        private readonly getByIdUserUseCase: GetByIdUserUseCase,
        private readonly deleteUserUseCase: DeleteUserUseCase
    ) {}


    getAll(): Promise<User[]> {
        return this.getAllUserUseCase.getAll();
    }
    getById(id: string): Promise<User | null> {
        return this.getByIdUserUseCase.getById(id);
    }
    delete(id: string): Promise<void> {
        return this.deleteUserUseCase.delete(id);
    }
    create(user: User): Promise<void> {
        return this.createUserUseCase.create(user);
    }


}