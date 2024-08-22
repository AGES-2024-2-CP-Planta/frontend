import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/models/User';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
