// src/interfaces/views/UserView.tsx

import React from 'react';
import UserProfile from '../components/UserProfile';
import { UserDTO } from '../../application/dtos/UserDTO';

const UserView: React.FC<{ user: UserDTO }> = ({ user }) => {
  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default UserView;
