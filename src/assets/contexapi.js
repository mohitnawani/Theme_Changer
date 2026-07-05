import { createContext } from 'react';

// Optional: Create a default value
const UserContext = createContext({
  name: 'Guest',
  role: 'user'
});

export default UserContext;