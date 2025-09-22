import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
        <Card.Body>
          <a href="#" className="d-flex align-items-center text-decoration-none text-muted mb-4">
           <Link to="/" className="d-flex align-items-center text-decoration-none text-muted mb-4">
            <ArrowLeft size={20} className="me-2" />Back to Log In
          </Link>
          </a>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Create your account</h2>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <div className="position-relative">
                <Mail size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="email" placeholder="you@example.com" className="ps-5" />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <Lock size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="password" placeholder="Min. 8 characters" className="ps-5" />
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative">
                <Lock size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="password" placeholder="Re-enter password" className="ps-5" />
              </div>
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100 fw-bold">
              Create account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    
  );
};

export default SignUpPage;