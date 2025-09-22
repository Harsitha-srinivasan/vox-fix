import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Spinner, Button } from 'react-bootstrap';
import { Mic, Circle, FileText, CheckCircle, Copy } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VoiceAssistantPage = () => {
  const [status, setStatus] = useState('idle');
  const [liveTranscription, setLiveTranscription] = useState('undefined');
  const [confidence, setConfidence] = useState(0);

  const startRecording = () => {
    setStatus('recording');
    setTimeout(() => {
      setLiveTranscription('This is a sample live transcription...');
      setConfidence(88);
    }, 1000);
    setTimeout(() => {
      setStatus('processing');
    }, 4000);
    setTimeout(() => {
      setStatus('done');
    }, 7000);
  };

  const renderStatusUI = () => {
    switch (status) {
      case 'idle':
        return (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{ width: '100px', height: '100px', backgroundColor: '#e0e7ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', cursor: 'pointer' }}
              onClick={startRecording}
            >
              <Mic size={48} color="#0d6efd" />
            </div>
            <p style={{ marginTop: '1rem', color: '#6c757d' }}>Tap to start recording</p>
          </div>
        );
      case 'recording':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div style={{ width: '100px', height: '100px', backgroundColor: '#dc3545', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Circle size={48} color="#fff" />
              </div>
              <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>0:00</span>
            </div>
            <p style={{ marginTop: '1rem', color: '#6c757d' }}>Listening... Speak clearly</p>
          </div>
        );
      case 'processing':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Spinner animation="border" variant="primary" style={{ width: '100px', height: '100px' }} />
              <Mic size={48} color="#0d6efd" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <p style={{ marginTop: '1rem', color: '#6c757d' }}>Processing your voice input...</p>
          </div>
        );
      default:
        return (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{ width: '100px', height: '100px', backgroundColor: '#e0e7ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', cursor: 'pointer' }}
              onClick={() => setStatus('idle')}
            >
              <Mic size={48} color="#0d6efd" />
            </div>
            <p style={{ marginTop: '1rem', color: '#6c757d' }}>Tap to start new recording</p>
          </div>
        );
    }
  };

  return (
    <Container style={{ padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>Vox-Fix Assistant</h2>
      <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '2.5rem' }}>
        Speak naturally, get instant grammar corrections, improvements, and tone variations
      </p>

      {renderStatusUI()}

      <Row style={{ marginTop: '3rem', rowGap: '1rem' }}>
        {status !== 'idle' && (
          <Col md={12}>
            <Card style={{ boxShadow: '0 0.25rem 0.75rem rgba(0,0,0,0.05)', border: 'none' }}>
              <Card.Body>
                <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                  <Mic size={20} style={{ marginRight: '0.5rem', color: '#0d6efd' }} />
                  Live Transcription
                </h5>
                <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
                  <p style={{ marginBottom: '0.5rem', color: '#6c757d' }}>{liveTranscription}</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                    <span style={{ marginRight: '0.5rem', color: '#6c757d' }}>Confidence:</span>
                    <ProgressBar now={confidence} style={{ height: '8px', width: '100px', backgroundColor: '#e9ecef' }} />
                    <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#6c757d' }}>{confidence}%</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )}
        {status === 'processing' && (
          <Col md={12}>
            <Card style={{ boxShadow: '0 0.25rem 0.75rem rgba(0,0,0,0.05)', border: 'none' }}>
              <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Spinner animation="border" variant="primary" style={{ marginBottom: '1rem' }} />
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Processing your voice input...</p>
                <p style={{ color: '#6c757d', marginBottom: '0' }}>Analyzing grammar, improving text, and generating tone variations</p>
              </Card.Body>
            </Card>
          </Col>
        )}
        {status === 'done' && (
          <>
            <Col md={6}>
              <Card style={{ boxShadow: '0 0.25rem 0.75rem rgba(0,0,0,0.05)', border: 'none' }}>
                <Card.Body>
                  <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <FileText size={20} style={{ marginRight: '0.5rem', color: '#0d6efd' }} />
                    Grammar & Improvements
                  </h5>
                  <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ marginBottom: '0', color: '#6c757d' }}>Original Text</p>
                      <Copy size={20} style={{ color: '#6c757d', cursor: 'pointer' }} />
                    </div>
                    <p style={{ fontWeight: 'bold', marginBottom: '0' }}>This is the original text with some errors.</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card style={{ boxShadow: '0 0.25rem 0.75rem rgba(0,0,0,0.05)', border: 'none' }}>
                <Card.Body>
                  <h5 style={{ fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                    <CheckCircle size={20} style={{ marginRight: '0.5rem', color: '#0d6efd' }} />
                    Tone Variations
                  </h5>
                  {['Formal', 'Friendly', 'Professional', 'Casual'].map(tone => (
                    <div key={tone} style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>{tone}</p>
                        <p style={{ marginBottom: '0', color: '#6c757d', fontSize: '0.9rem' }}>This is a sample variation for the {tone.toLowerCase()} tone.</p>
                      </div>
                      <Button variant="outline-primary" size="sm" style={{ borderColor: '#0d6efd', color: '#0d6efd' }}>Use This</Button>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default VoiceAssistantPage;