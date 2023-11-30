import React, { useState, useContext,useEffect } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import GraphContext from "../../context/Graph/GraphContext";

function ChangeData({ change, setChange }) {
  const graph = useContext(GraphContext);
  const { year, data, modify } = graph;

  const [tableData, setTableData] = useState([...data]);
  useEffect(() => setTableData([...data]), [data]);

  const handleValueChange = (index, newValue) => {
    const updatedData = [...tableData];
    updatedData[index] = newValue;
    setTableData(updatedData);
  };

  const insertData = () => {
    modify(tableData);
    setChange();
  };

  return (
    <>
      <Modal show={change} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Insert Data</Modal.Title>
        </Modal.Header>
        <div className="table">
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Data</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{year[index]}</td>
                  <td>
                    <Form.Control
                      type="text"
                      value={item}
                      onChange={(e) => handleValueChange(index, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        </div>
     
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setChange();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={insertData}>
            Insert
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChangeData;
