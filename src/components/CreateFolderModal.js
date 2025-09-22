import React, { useState } from 'react';
import { Modal, Form, Button, Dropdown, InputGroup } from 'react-bootstrap';
import { Check } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const colors = [
  { name: 'Blue', hex: '#0d6efd' },
  { name: 'Green', hex: '#198754' },
  { name: 'Purple', hex: '#6f42c1' },
  { name: 'Orange', hex: '#fd7e14' },
  { name: 'Pink', hex: '#d63384' },
  { name: 'Red', hex: '#dc3545' },
  { name: 'Indigo', hex: '#6610f2' },
  { name: 'Cyan', hex: '#0dcaf0' },
];

const CreateFolderModal = ({ show, onHide, onCreate }) => {
  const [folderName, setFolderName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName.trim()) {
      onCreate({
        name: folderName,
        description: description,
        color: selectedColor.hex,
        conversations: 0,
      });
      setFolderName('');
      setDescription('');
      setSelectedColor(colors[0]);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create New Folder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Folder Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter folder name..."
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Dropdown as={InputGroup} className="w-100">
              <InputGroup.Text style={{ backgroundColor: selectedColor.hex, width: '30px' }}></InputGroup.Text>
              <Form.Control readOnly value={selectedColor.name} />
              <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />
              <Dropdown.Menu>
                {colors.map((color) => (
                  <Dropdown.Item key={color.name} onClick={() => setSelectedColor(color)}>
                    <div className="d-flex align-items-center">
                      <span className="rounded-circle me-2" style={{ width: '15px', height: '15px', backgroundColor: color.hex }}></span>
                      {color.name}
                      {selectedColor.name === color.name && <Check size={16} className="ms-auto" />}
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create Folder
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateFolderModal;