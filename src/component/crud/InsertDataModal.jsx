import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import GraphContext from "../../context/Graph/GraphContext";

function InsertData({ open, setOpen }) {
  const graph = useContext(GraphContext);
  const { insert } = graph;
  const [inputValue, setInputValue] = useState(0);

  const insert_data = () => {
    insert(inputValue);
    setInputValue(0);
    setOpen();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      insert(inputValue);
      setInputValue(0);
      setOpen();
    }
  };
  return (
    <>
      <Modal show={open} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Insert Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formInput">
              <div className="d-flex">
                <Form.Label>data:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your input"
                  value={inputValue}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setInputValue(0);
              setOpen();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={insert_data}>
            Insert{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InsertData;
