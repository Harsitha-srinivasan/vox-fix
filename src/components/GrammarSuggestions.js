import React from 'react';
import { Button } from "react-bootstrap";
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
      <div className={`card shadow-lg ${isImproved ? 'border-start border-4 border-info' : ''}`}>
        <div className="card-header pb-3">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title text-lg d-flex align-items-center gap-2">
              <div className={`d-flex align-items-center justify-content-center rounded-circle`} style={{ width: '1.5rem', height: '1.5rem', backgroundColor: isImproved ? '#e0f7fa' : '#f8f9fa' }}>
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
                <span className="badge bg-success-subtle text-success">Fixed</span>
              )}
              {isImproved && (
                <span className="badge bg-info-subtle text-info">Improved</span>
              )}
            </h5>
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => copyToClipboard(text, type)}
              >
                <BsClipboard />
              </button>
              {type !== 'original' && (
                <button
                  className={`btn btn-sm ${type === 'corrected' ? 'btn-outline-success' : 'btn-outline-info'}`}
                  onClick={() => onSave(text, type)}
                >
                  Use This
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="text-secondary lh-base">{text}</p>
        </div>
      </div>
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