// src/pages/Folders.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { FolderPlus, Folder as FolderIcon } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Folders = () => {
    const [showModal, setShowModal] = useState(false);
    const [folders, setFolders] = useState([]); // State to hold created folders

    const handleCreateFolder = () => {
        // Here you would add the logic to save the new folder
        // For this example, we'll just add a placeholder
        const newFolder = { name: "harsh", description: "sample", color: "red" };
        setFolders([...folders, newFolder]);
        setShowModal(false);
    };

    const NoFolders = () => (
        <div className="text-center mt-5">
            <FolderIcon size={64} color="#dee2e6" />
            <h5 className="text-muted mt-3">No folders yet</h5>
            <p className="text-muted">Create your first folder to organize conversations</p>
            <Button variant="primary" className="mt-3" onClick={() => setShowModal(true)}>
                <FolderPlus size={20} className="me-2" />
                Create Folder
            </Button>
        </div>
    );

    const FolderList = () => (
        <Row className="mt-4">
            {folders.map((folder, index) => (
                <Col md={4} lg={3} key={index} className="mb-4">
                    <div className="card shadow-sm border-0 p-3">
                        <div className="d-flex align-items-center mb-2">
                            <div className={`bg-${folder.color}-subtle rounded-circle p-2 me-2`}>
                                <FolderIcon size={24} color={folder.color === 'red' ? '#dc3545' : '#6c757d'} />
                            </div>
                            <h6 className="mb-0 fw-bold text-truncate">{folder.name}</h6>
                        </div>
                        <small className="text-muted mb-1 text-truncate">{folder.description}</small>
                        <span className="badge rounded-pill bg-light text-dark">{folder.conversations} conversations</span>
                    </div>
                </Col>
            ))}
        </Row>
    );

    return (
        <Container fluid>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold">Folders</h2>
                    <p className="text-muted">Organize your conversations into folders</p>
                </div>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                    <FolderPlus size={20} className="me-2" />
                    Create Folder
                </Button>
            </div>
            
            {folders.length === 0 ? <NoFolders /> : <FolderList />}

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Folder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter folder name..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description (Optional)</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter description..." />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Color</Form.Label>
                            <Form.Select>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Purple</option>
                                <option>Orange</option>
                                <option>Pink</option>
                                <option>Red</option>
                                <option>Indigo</option>
                                <option>Cyan</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCreateFolder}>
                        Create Folder
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Folders;