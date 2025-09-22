import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Mic, Folder, Clock, User, LogOut, ChevronLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: isCollapsed ? '70px' : '250px',
      backgroundColor: '#2c3e50',
      color: '#fff',
      transition: 'width 0.3s ease-in-out',
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      zIndex: 1000
    }}>
      <div style={{ padding: '0 8px', textAlign: 'right' }}>
        <Button variant="link" onClick={handleToggle} style={{ color: 'white', border: 'none', padding: '0' }}>
          <ChevronLeft size={24} style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }} />
        </Button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src="/logo.svg" alt="Logo" style={{ width: '50px', transition: 'width 0.3s' }} />
        <h5 style={{ marginTop: '0.5rem', color: 'white', fontWeight: 'bold', display: isCollapsed ? 'none' : 'block' }}>VoiceFlow</h5>
      </div>

      <Nav style={{ flexDirection: 'column', padding: '0 1rem', flexGrow: 1 }}>
        <Nav.Item>
          <NavLink to="/dashboard" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#adb5bd',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            textDecoration: 'none',
            borderLeft: isActive ? '5px solid #0d6efd' : 'none',
            transition: 'all 0.2s',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          })}>
            <Mic size={20} style={{ marginRight: isCollapsed ? '0' : '12px' }} />
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Voice Assistance</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/history" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#adb5bd',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            textDecoration: 'none',
            borderLeft: isActive ? '5px solid #0d6efd' : 'none',
            transition: 'all 0.2s',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          })}>
            <Clock size={20} style={{ marginRight: isCollapsed ? '0' : '12px' }} />
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>History</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/folders" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#adb5bd',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            textDecoration: 'none',
            borderLeft: isActive ? '5px solid #0d6efd' : 'none',
            transition: 'all 0.2s',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          })}>
            <Folder size={20} style={{ marginRight: isCollapsed ? '0' : '12px' }} />
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Folders</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/profile" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#adb5bd',
            backgroundColor: isActive ? '#34495e' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem 1rem',
            textDecoration: 'none',
            borderLeft: isActive ? '5px solid #0d6efd' : 'none',
            transition: 'all 0.2s',
            justifyContent: isCollapsed ? 'center' : 'flex-start'
          })}>
            <User size={20} style={{ marginRight: isCollapsed ? '0' : '12px' }} />
            <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Profile</span>
          </NavLink>
        </Nav.Item>
      </Nav>

      <div style={{ padding: '1rem', textAlign: isCollapsed ? 'center' : 'left' }}>
        <Button variant="link" style={{ color: '#adb5bd', textDecoration: 'none' }}>
          <LogOut size={20} style={{ marginRight: isCollapsed ? '0' : '12px' }} />
          <span style={{ display: isCollapsed ? 'none' : 'inline' }}>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;