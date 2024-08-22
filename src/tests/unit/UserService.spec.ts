import { UserService } from '../../application/services/UserService';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/models/User';

const mockUserRepository: UserRepository = {
  findById: jest.fn(),
  save: jest.fn(),
};

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(mockUserRepository);
  });

  it('should return a user by ID', async () => {
    const mockUser: User = { id: '1', name: 'John Doe', email: 'john@example.com' };
    (mockUserRepository.findById as jest.Mock).mockResolvedValue(mockUser);

    const user = await userService.getUserById('1');
    expect(user).toEqual(mockUser);
  });
});
