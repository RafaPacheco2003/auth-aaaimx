import { User } from "src/users/domain/models/User";
import { UserRequest } from "../https/request/UserRequest";
import { UserResponse, UserResponseDetails } from "../https/response/UserResponse";
import { UserEntity } from "../entities/UserEntity";

// Convierte UserRequest (entrada HTTP) a User dominio
export function requestToDomain(request: UserRequest): User {
  return User.createNew(
    request.first_name,
    request.last_name,
    request.email,
    request.phone
  );
}

// Convierte UserEntity (persistencia) a User (dominio)
export function entityToDomain(entity: UserEntity): User {
  return User.fromPrimitives({
    id: entity.id,
    first_name: entity.first_name,
    last_name: entity.last_name,
    email: entity.email,
    phone: entity.phone,
    is_active: entity.is_active,
    is_verified: entity.is_verified,
  });
}

// Convierte User (dominio) a UserEntity (persistencia)
export function domainToEntity(user: User): UserEntity {
  const entity = new UserEntity();
  entity.id = user.id;
  entity.first_name = user.first_name;
  entity.last_name = user.last_name;
  entity.email = user.email;
  entity.phone = user.phone;
  entity.is_active = user.is_active;
  entity.is_verified = user.is_verified;
  return entity;
}

// Convierte User dominio a UserResponse (salida HTTP)
export function domainToResponse(user: User): UserResponse {
  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    full_name: user.first_name + ' ' + user.last_name,
    email: user.email,
    phone: user.phone
  };
}

//Convierte User dominio a UserResponseDetails (salida HTTP)
export function domainToResponseDetails(user: User): UserResponseDetails {
  return {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    full_name: user.first_name + ' ' + user.last_name,
    email: user.email,
    phone: user.phone,
    is_active: user.is_active,
    is_verified: user.is_verified
  };
}
