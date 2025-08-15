import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/users/domain/models/User";
import type { CreateUserUseCase } from "src/users/domain/port/in/CreateUserUseCase";
import type { DeleteUserUseCase } from "src/users/domain/port/in/DeleteUserUseCase";
import type { GetAllUserUseCase } from "src/users/domain/port/in/GetAllUserUseCase";
import type { GetByIdUserUseCase } from "src/users/domain/port/in/GetByIdUserUseCase";
import type { UpdateUserActiveUseCase } from "src/users/domain/port/in/UpdateUserActiveUseCase";
import type { UpdateUserUseCase } from "src/users/domain/port/in/UpdateUserUseCase";

@Injectable()
export class UserService implements CreateUserUseCase, GetAllUserUseCase, GetByIdUserUseCase, DeleteUserUseCase, UpdateUserUseCase, UpdateUserActiveUseCase {
    constructor(
        @Inject('CreateUserUseCase') private readonly createUserUseCase: CreateUserUseCase,
        @Inject('GetAllUserUseCase') private readonly getAllUserUseCase: GetAllUserUseCase,
        @Inject('GetByIdUserUseCase') private readonly getByIdUserUseCase: GetByIdUserUseCase,
        @Inject('DeleteUserUseCase') private readonly deleteUserUseCase: DeleteUserUseCase,
        @Inject('UpdateUserUseCase') private readonly updateUserUseCase: UpdateUserUseCase,
        @Inject('UpdateUserActiveUseCase') private readonly updateUserActiveUseCase: UpdateUserActiveUseCase
    ) { }








    updateActive(id: string): Promise<void> {
        return this.updateUserActiveUseCase.updateActive(id);
    }
    update(id: string, user: Partial<User>): Promise<User> {
        return this.updateUserUseCase.update(id, user);
    }
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