import { useEffect, useState } from 'react';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Run only once on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      
      {/* ✅ Make sure UserForm is inside UserList but not duplicated */}
      <UserForm addUser={addUser} />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
