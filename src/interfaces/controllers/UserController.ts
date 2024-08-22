import { UserService } from '../../application/services/UserService';
import { NextApiRequest, NextApiResponse } from 'next';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getUser(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const user = await this.userService.getUserById(id as string);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  async createUser(req: NextApiRequest, res: NextApiResponse) {
    const user = req.body;
    await this.userService.createUser(user);
    res.status(201).json({ message: 'User created successfully' });
  }
}
