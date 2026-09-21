import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import PetitionCourt from './pages/PetitionCourt';
import CriminalBailApplication from './pages/CriminalBailApplication';
import CriminalAppeal from './pages/CriminalAppeal';
import LawyerProfile from './pages/LawyerProfile';


import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LawyerDashboard from './pages/LawyerDashboard';
import Profile from './pages/Profile';
import CaseFile from './pages/CaseFile';
import CaseFileDetails from './pages/CaseFileDetails';
import CaseDiary from './pages/CaseDiary';
import Library from './pages/Library';
import AddCase from './pages/AddCase';
import Careers from './pages/Careers';
import Reminders from './pages/Reminders';
import Teams from './pages/Teams';
import Contact from './pages/Contact';

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
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<ProtectedRoute><LawyerDashboard /></ProtectedRoute>} />
              <Route path="/dashboard/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

              {/* ✅ FIX: case-File → case-file (lowercase) aur CaseDiary → CaseFile */}
              <Route path="/dashboard/case-file" element={<ProtectedRoute><CaseFile /></ProtectedRoute>} />
              <Route path="/dashboard/today-hearings" element={<ProtectedRoute><CaseFile /></ProtectedRoute>} />
              <Route path="/dashboard/cause-list" element={<ProtectedRoute><CaseFile /></ProtectedRoute>} />
              <Route path="/dashboard/case-diary" element={<ProtectedRoute><CaseDiary /></ProtectedRoute>} />
              <Route path="/dashboard/case-file/:id" element={<ProtectedRoute><CaseFileDetails /></ProtectedRoute>} />
              <Route path="/dashboard/Library" element={<ProtectedRoute><Library /></ProtectedRoute>} />
              <Route path="/dashboard/add-case" element={<ProtectedRoute><AddCase /></ProtectedRoute>} />
              <Route path="/dashboard/petition-court/:id" element={<PetitionCourt />} />
              <Route path="/dashboard/criminal-bail-application/:id" element={<CriminalBailApplication />} />
              <Route path="/dashboard/criminal-appeal/:id" element={<CriminalAppeal />} />
              <Route path="/team/:id" element={<LawyerProfile />} />
              <Route path="/dashboard/reminders" element={<Reminders />} />
            </Routes>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;