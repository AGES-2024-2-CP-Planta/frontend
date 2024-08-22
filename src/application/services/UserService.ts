import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/models/User';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async createUser(user: User): Promise<void> {
    return this.userRepository.save(user);
  }
}
