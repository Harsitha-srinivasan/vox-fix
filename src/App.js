import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all your pages
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import CheckEmailPage from './pages/Email'; // Assuming 'Email.js' is the CheckEmail page
import VoiceAssistancePage from './pages/VoiceAssistance';  // Correcting file name to match your structure
import HistoryPage from './pages/History';
import FoldersPage from './pages/Folders';
import Sidebar from './components/Sidebar';
import ForgotPasswordPage from './pages/ForgetPassword'; 

// Import your Layout component
import Layout from './Layout';

function App() {
  return (
      <Routes>
        {/* Public Routes (No Layout) */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        <Route path="voice-assistant" element={<Layout activePage="VoiceAssitance"><VoiceAssistancePage /></Layout>} />
        <Route path="/history" element={<Layout activePage="history"><HistoryPage /></Layout>} />
        <Route path="/folders" element={<Layout activePage="folders"><FoldersPage /></Layout>} />

        {/* Protected Routes (with Layout) */}
        <Route path="/dashboard" element={<Layout />}/>
        <Route path="/Sidebar" element={<Layout />}/>
          <Route path="/VoiceAssistance" element={<VoiceAssistancePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="folders" element={<FoldersPage />} />

      </Routes>
  );
}


export default App;                                                       