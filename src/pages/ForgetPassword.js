import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Mail, ArrowLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPasswordPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
        <Card.Body>
          <a href="#" className="d-flex align-items-center text-decoration-none text-muted mb-4">
            <ArrowLeft size={20} className="me-2" />
            Back to sign in
          </a>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Reset your password</h2>
            <p className="text-muted">Enter your email and we'll send you a link to reset your password</p>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <div className="position-relative">
                <Mail size={20} color="#6c757d" style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)' }} />
                <Form.Control type="email" placeholder="you@example.com" className="ps-5" />
              </div>
            </Form.Group>
            <Button variant="dark" type="submit" className="w-100 fw-bold">
              Send reset link
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ForgotPasswordPage;