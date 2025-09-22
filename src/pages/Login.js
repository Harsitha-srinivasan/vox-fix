import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Mail, Lock,Chrome} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    navigate('/dashboard');
  };

  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Card style={{ padding: '1.5rem', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)', maxWidth: '450px', width: '100%', borderRadius: '1rem' }}>
        <Card.Body>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <img src="/logo.svg" alt="VoiceFlow Logo" style={{ width: '60px' }} />
            </div>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.75rem' }}>Welcome to VoiceFlow</h2>
            <p style={{ color: '#6c757d', fontSize: '1rem' }}>Sign in to continue</p>
          </div>
          <Button variant="outline-dark" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', borderRadius: '0.5rem', borderColor: '#e0e0e0' }}>
            <Chrome size={20} style={{ marginRight: '0.75rem' }} />
            Continue with Google
          </Button>
          <div style={{ textAlign: 'center', color: '#6c757d', margin: '1rem 0', position: 'relative' }}>
            <span style={{ display: 'inline-block', backgroundColor: '#fff', padding: '0 1rem', zIndex: 1, position: 'relative' }}>OR</span>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#e0e0e0', zIndex: 0 }}></div>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group style={{ marginBottom: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <Mail size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ paddingLeft: '3rem', borderRadius: '0.5rem' }} />
              </div>
            </Form.Group>
            <Form.Group style={{ marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative' }}>
                <Lock size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingLeft: '3rem', borderRadius: '0.5rem' }} />
              </div>
            </Form.Group>
            <Button variant="dark" type="submit" style={{ width: '100%', fontWeight: 'bold', borderRadius: '0.5rem', backgroundColor: '#212529', border: 'none' }}>
              Log In
            </Button>
          </Form>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: '#6c757d', fontSize: '0.9rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#6c757d' }} onClick={() => navigate('/forgot-password')}>Forgot password?</a>
            <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>Need an account? <span style={{ fontWeight: 'bold' }}>Sign up</span></span>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;