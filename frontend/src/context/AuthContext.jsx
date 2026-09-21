import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Page load hone par check karein ke user pehle se login hai ya nahi
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 1. Sign Up Function
  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'Ye email pehle se registered hai!' };
    }
    users.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    return { success: true, message: 'Registration successful! Ab login karein.' };
  };

  // 2. Login Function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    // Ek default test user bhi add kar rahe hain testing ke liye
    const allUsers = [
      ...users, 
      { name: 'Test Lawyer', email: 'test@lms.com', password: '123456' }
    ];

    const foundUser = allUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser)); // Navbar ke liye save kiya
      return { success: true };
    }
    return { success: false, message: 'Galat email ya password!' };
  };

  // 3. Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser'); // Navbar se user hata diya
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);