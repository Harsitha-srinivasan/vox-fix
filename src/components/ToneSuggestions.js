import React from 'react';
import { Button, Card, Badge } from "react-bootstrap";
import { BsCheckCircleFill, BsClipboard, BsSparkles, BsSave } from "react-icons/bs";
import { motion } from "framer-motion";

export default function GrammarSuggestions({ 
  originalText, 
  correctedText, 
  improvedText, 
  onCopy, 
  onSave 
}) {
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      onCopy(type);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const renderCard = (title, text, type, isImproved = false) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: type === 'original' ? 0.1 : type === 'corrected' ? 0.2 : 0.3 }}
      className="mb-4"
    >
      <Card className={`shadow-lg ${isImproved ? 'border-start border-4 border-info' : ''}`}>
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title text-lg d-flex align-items-center gap-2 mb-0">
              <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: isImproved ? '#e0f7fa' : '#f8f9fa' }}>
                {type === 'corrected' ? (
                  <BsCheckCircleFill className="text-success" />
                ) : isImproved ? (
                  <BsSparkles className="text-info" />
                ) : (
                  <span className="text-xs fw-bold text-secondary">1</span>
                )}
              </div>
              {title}
              {type === 'corrected' && (
                <Badge bg="success" className="bg-opacity-25 text-success">Fixed</Badge>
              )}
              {isImproved && (
                <Badge bg="info" className="bg-opacity-25 text-info">Improved</Badge>
              )}
            </h5>
            <div className="d-flex gap-2">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => copyToClipboard(text, type)}
              >
                <BsClipboard />
              </Button>
              {type !== 'original' && (
                <Button
                  variant={type === 'corrected' ? 'outline-success' : 'outline-info'}
                  size="sm"
                  onClick={() => onSave(text, type)}
                >
                  Use This
                </Button>
              )}
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-secondary lh-base">{text}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );

  return (
    <div className="my-4">
      {renderCard("Original Text", originalText, "original")}
      {correctedText && correctedText !== originalText && (
        renderCard("Grammar Corrected", correctedText, "corrected")
      )}
      {improvedText && improvedText !== correctedText && (
        renderCard("Enhanced Version", improvedText, "improved", true)
      )}
    </div>
  );
}