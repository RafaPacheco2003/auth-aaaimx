import { Controller, Body, Post, Get, Param, HttpCode, Delete, Put } from '@nestjs/common';
import { UserResponse } from '../https/response/UserResponse';
import { UserRequest } from '../https/request/UserRequest';
import { User } from 'src/users/domain/models/User';
import { domainToResponse, requestToDomain } from '../mappers/UserMapper';
import { UserService } from 'src/users/application/services/UserService';

@Controller('users')
export class UserController {

    constructor(private readonly service: UserService) { }


    @Post()
    @HttpCode(201)
    async create(@Body() request: UserRequest): Promise<UserResponse> {
        const domain = requestToDomain(request);

        await this.service.create(domain);
        return domainToResponse(domain);
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param('id') id: string) {
        const domain = await this.service.getById(id);
        return domain ? domainToResponse(domain) : null;
    }


    @Get()
    @HttpCode(200)
    async getAll(){
        const domain = await this.service.getAll();
        return domain.map(domainToResponse);
    }


    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: string, @Body() request: UserRequest): Promise<UserResponse> {
        const updated = await this.service.update(id, request);
        return domainToResponse(updated);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        await this.service.delete(id);
    }
}