export class UserErrors extends Error {
    static UserNotFoundError: any;

    constructor(message: string) {
        super(message);
        this.name = 'UserErrors';
    }

    static notFound(id: string): UserErrors {
        return new UserErrors(`User with ID ${id} not found`);
    }
}