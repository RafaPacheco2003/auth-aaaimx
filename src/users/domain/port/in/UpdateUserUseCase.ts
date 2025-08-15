import { User } from '../../models/User';

export interface UpdateUserUseCase {
	 update(id: string, user: Partial<User>): Promise<User>;
}