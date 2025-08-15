import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepositoryPort } from 'src/users/domain/port/out/UserRepositoryPort';
import { User } from 'src/users/domain/models/User';
import { UserEntity } from '../entities/UserEntity';
import { entityToDomain, domainToEntity } from '../mappers/UserMapper';

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }



  async  update(user: User): Promise<void> {
    const entity = domainToEntity(user);
    await this.userRepository.update(entity.id, entity);
  }

  async create(user: User): Promise<void> {
    const entity = domainToEntity(user);
    await this.userRepository.save(entity);
  }

  async findById(id: string): Promise<User | null> {
    const entity = await this.userRepository.findOne({ where: { id } });
    return entity ? entityToDomain(entity) : null;
  }

  async findAll(): Promise<User[]> {
    const entities = await this.userRepository.find();
    return entities.map(entityToDomain);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }


}