// src/Layout.js
import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Mic, History, Folder, User, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, activePage }) => {
    const [showAccount, setShowAccount] = useState(false);
    const navigate = useNavigate(); 
    
    const handleToggleAccount = () => {
        setShowAccount(!showAccount);
    };

    const handleLogout = () => {
        // In a real app, you would clear auth tokens or user data here
        localStorage.removeItem('userToken'); 
        console.log('User logged out');
        // Redirect to the login page
        navigate('/'); 
    };

    return (
        <Container fluid className="vh-100 p-0 d-flex">
            {/* Sidebar */}
            <div className="d-none d-md-flex flex-column justify-content-between bg-light p-4" style={{ width: '250px' }}>
                <div>
                    <div className="d-flex align-items-center mb-5">
                        <div className="bg-primary-subtle rounded-circle p-2 me-2">
                            <Mic color="#4564927b" size={24} />
                        </div>
                        <h5 className="fw-bold mb-0">Vox-Fix</h5>
                    </div>
                    <Nav className="flex-column">
                        <NavLink to="/voice-assistant" className={`mb-2 rounded-3 nav-link ${activePage === 'voice-assistant' ? 'bg-primary text-white' : 'text-secondary'}`}>
                            <Mic size={20} className="me-2" />
                            Voice Assistant
                        </NavLink>
                        <NavLink to="/history" className={`mb-2 rounded-3 nav-link ${activePage === 'history' ? 'bg-primary text-white' : 'text-secondary'}`}>
                            <History size={20} className="me-2" />
                            History
                        </NavLink>
                        <NavLink to="/folders" className={`rounded-3 nav-link ${activePage === 'folders' ? 'bg-primary text-white' : 'text-secondary'}`}>
                            <Folder size={20} className="me-2" />
                            Folders
                        </NavLink>
                    </Nav>
                </div>

                {/* User Profile and Dropdown */}
                <div className="mt-auto position-relative">
                    <div className="d-flex align-items-center p-2 border rounded-3 cursor-pointer" onClick={handleToggleAccount}>
                        <div className="rounded-circle bg-secondary-subtle d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                            <span className="fw-bold text-secondary">H</span>
                        </div>
                        <div>
                            <div className="fw-bold">HARSITA S</div>
                            <small className="text-muted">harisita.cb23@bitsathy.ac.in</small>
                        </div>
                    </div>
                    
                    {/* The dropdown menu that appears when you click the profile */}
                    {showAccount && (
                        <div className="position-absolute bottom-100 start-0 mb-2 w-100 card shadow-sm rounded">
                            <div className="card-body p-2">
                                <h6 className="card-subtitle mb-2 text-muted">My Account</h6>
                                <div className="d-flex align-items-center text-danger" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                    <LogOut size={20} className="me-2" />
                                    <span>Log out</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow-1 p-5">
                {children}
            </div>
        </Container>
    );
};

export default Layout;