import React from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { Mail, ArrowLeft } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckEmailPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Card className="p-4 shadow-sm" style={{ maxWidth: '450px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <div className="mx-auto mb-3" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e9f5ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={40} color="#0d6efd" />
            </div>
            <h2 className="fw-bold">Check your email</h2>
            <p className="text-muted">We've sent password reset instructions to</p>
            <p className="fw-bold mb-4">harsita.cb23@bitsathy.ac.in</p>
          </div>
          <Alert variant="success" className="text-center">
            Please check your email for the password reset link. It may take a few minutes to arrive.
          </Alert>
          <div className="text-center mt-4">
            <a href="#" className="d-flex align-items-center justify-content-center text-decoration-none text-muted">
              <ArrowLeft size={20} className="me-2" />
              Back to sign in
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CheckEmailPage;