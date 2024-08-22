import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserDTO } from '../../../application/dtos/UserDTO';
import UserView from '../../views/UserView';

const UserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<UserDTO | null>(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/users/${id}`).then((response) => setUser(response.data));
    }
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return <UserView user={user} />;
};

export default UserPage;
