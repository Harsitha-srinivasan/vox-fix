// src/pages/History.js
import React from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import { Mic, Clock, TrendingUp, FileText } from 'lucide-react'; // Added FileText
import 'bootstrap/dist/css/bootstrap.min.css';

const History = () => {
    // You would manage conversation data here using state or a data fetching hook
    const hasConversations = false;
    
    return (
        <Container fluid>
            <div className="mb-4">
                <h2 className="fw-bold">Conversation History</h2>
                <p className="text-muted">View and manage your past voice conversations</p>
            </div>
            
            {/* Summary Cards */}
            <Row className="mb-4">
                <Col lg={4} md={6} className="mb-3">
                    <Card className="p-3 shadow-sm border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-0 fw-bold">0</h5>
                                <p className="text-muted mb-0">Total Conversations</p>
                            </div>
                            <div className="bg-primary-subtle rounded-circle p-2">
                                <Mic size={24} color="#0d6efd" />
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={4} md={6} className="mb-3">
                    <Card className="p-3 shadow-sm border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-0 fw-bold">0m 0s</h5>
                                <p className="text-muted mb-0">Total Recording Time</p>
                            </div>
                            <div className="bg-success-subtle rounded-circle p-2">
                                <Clock size={24} color="#198754" />
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={4} md={6} className="mb-3">
                    <Card className="p-3 shadow-sm border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5 className="mb-0 fw-bold">0%</h5>
                                <p className="text-muted mb-0">Average Confidence</p>
                            </div>
                            <div className="bg-purple-subtle rounded-circle p-2">
                                <TrendingUp size={24} color="#6f42c1" />
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Search and Filter */}
            <Row className="mb-4">
                <Col md={8} lg={9}>
                    <InputGroup>
                        <Form.Control placeholder="Search conversations..." />
                    </InputGroup>
                </Col>
                <Col md={4} lg={3}>
                    <Form.Select>
                        <option>All Conversations</option>
                        <option>... (placeholder for folders)</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* No Conversations View */}
            {!hasConversations && (
                <Row className="text-center mt-5">
                    <Col md={6}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="mb-3">
                                <Mic size={48} color="#dee2e6" />
                            </div>
                            <h5 className="text-muted">No conversations yet</h5>
                            <p className="text-muted">Start recording to see your conversation history</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="mb-3">
                                <FileText size={48} color="#dee2e6" />
                            </div>
                            <h5 className="text-muted">Select a Conversation</h5>
                            <p className="text-muted">Click on any conversation to view detailed analysis</p>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default History;