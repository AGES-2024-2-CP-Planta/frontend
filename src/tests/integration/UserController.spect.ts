import { UserService } from '../../application/services/UserService';
import { UserController } from '../../interfaces/controllers/UserController';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';

describe('UserController', () => {
  let userService: UserService;
  let userController: UserController;

  beforeEach(() => {
    userService = new UserService({ findById: jest.fn(), save: jest.fn() });
    userController = new UserController(userService);
  });

  it('should return 200 and a user for a valid ID', async () => {
    const mockUser = { id: '1', name: 'John Doe', email: 'john@example.com' };
    (userService.getUserById as jest.Mock).mockResolvedValue(mockUser);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
      query: { id: '1' },
    });

    await userController.getUser(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual(mockUser);
  });
});
