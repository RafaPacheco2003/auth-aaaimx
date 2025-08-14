import { User } from "src/users/domain/models/User";
import { UserRequest } from "../https/request/UserRequest";
import { UserResponse } from "../https/response/UserResponse";
import { UserId } from "src/users/domain/valueObject/UserId";

// Convierte UserRequest (entrada HTTP) a User dominio
export function requestToDomain(request: UserRequest): User {
    return User.createNew(
        request.first_name,
        request.last_name,
        request.email,
        request.phone
    );
}

// Convierte User dominio a UserResponse (salida HTTP)
export function domainToResponse(user: User): UserResponse {
    return {
        id: user.id.value,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
    };
}
