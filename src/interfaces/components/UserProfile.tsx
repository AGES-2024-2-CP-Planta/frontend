// src/interfaces/components/UserProfile.tsx

import React from 'react';
import { UserDTO } from '../../application/dtos/UserDTO';

interface UserProfileProps {
  user: UserDTO;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
