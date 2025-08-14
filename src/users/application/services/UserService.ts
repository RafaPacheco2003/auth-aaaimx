import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/users/domain/models/User";
import type { CreateUserUseCase } from "src/users/domain/port/in/CreateUserUseCase";
import type { DeleteUserUseCase } from "src/users/domain/port/in/DeleteUserUseCase";
import type { GetAllUserUseCase } from "src/users/domain/port/in/GetAllUserUseCase";
import type { GetByIdUserUseCase } from "src/users/domain/port/in/GetByIdUserUseCase";

@Injectable()
export class UserService implements CreateUserUseCase, GetAllUserUseCase, GetByIdUserUseCase, DeleteUserUseCase {
    constructor(
        @Inject('CreateUserUseCase') private readonly createUserUseCase: CreateUserUseCase,
        @Inject('GetAllUserUseCase') private readonly getAllUserUseCase: GetAllUserUseCase,
        @Inject('GetByIdUserUseCase') private readonly getByIdUserUseCase: GetByIdUserUseCase,
        @Inject('DeleteUserUseCase') private readonly deleteUserUseCase: DeleteUserUseCase
    ) { }

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