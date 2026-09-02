import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LawyerDashboard from './pages/LawyerDashboard';
import Profile from './pages/Profile';
import CaseDiary from './pages/CaseDiary';
import AddCase from './pages/AddCase';
import Teams from './pages/Teams';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/teams" element={<Teams />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<ProtectedRoute><LawyerDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/dashboard/case-diary" element={<ProtectedRoute><CaseDiary /></ProtectedRoute>} />
              <Route path="/dashboard/today-hearings" element={<ProtectedRoute><CaseDiary /></ProtectedRoute>} />
              <Route path="/dashboard/cause-list" element={<ProtectedRoute><CaseDiary /></ProtectedRoute>} />
              <Route path="/dashboard/add-case" element={<ProtectedRoute><AddCase /></ProtectedRoute>} />
            </Routes>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;