import React, { useState, useRef } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Mic, MicOff } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Check if the browser supports the Web Speech API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceRecorder = ({ onTranscription }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  const startRecording = () => {
    if (!SpeechRecognition) {
      alert('Web Speech API is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true; // Get real-time, intermediate results
    recognition.continuous = true;

    recognition.onstart = () => {
      setIsRecording(true);
      setTranscript(''); // Clear previous transcript
      console.log('Voice recognition started.');
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          // Final results are stable and won't change
          setTranscript((prev) => prev + result[0].transcript + ' ');
        } else {
          // Interim results are temporary
          interimTranscript += result[0].transcript;
        }
      }
      setTranscript((prev) => prev + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsRecording(false);
      alert(`Error: ${event.error}. Please try again.`);
    };

    recognition.onend = () => {
      setIsRecording(false);
      console.log('Voice recognition ended.');
      // Pass the final transcript to the parent component
      onTranscription({ text: transcript.trim() });
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleToggle = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <Card className="p-5 shadow-sm border-0 text-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Button
          variant="primary"
          className="rounded-circle p-4 mb-3"
          style={{ width: '100px', height: '100px' }}
          onClick={handleToggle}
          disabled={isRecording}
        >
          {isRecording ? (
            <Spinner animation="border" role="status" className="p-2">
              <span className="visually-hidden">Recording...</span>
            </Spinner>
          ) : (
            <Mic size={48} />
          )}
        </Button>
        <p className="lead text-muted">
          {isRecording ? 'Recording...' : 'Tap to start recording'}
        </p>
      </div>
      {transcript && (
        <Card.Text className="mt-4 text-start p-3 border rounded">
          <strong>Live Transcript:</strong>
          <br />
          {transcript}
        </Card.Text>
      )}
    </Card>
  );
};

export default VoiceRecorder;