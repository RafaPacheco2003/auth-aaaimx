import { HttpException, HttpStatus } from '@nestjs/common';

export class UserErrors extends HttpException {
    static UserNotFoundError: any;
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
    }

    static notFound(id: string): UserErrors {
        return new UserErrors(`User with ID ${id} not found`, HttpStatus.NOT_FOUND);
    }

    static alreadyVerified(id: string): UserErrors {
        return new UserErrors(`User with ID ${id} is already verified`, HttpStatus.BAD_REQUEST);
    }
}
