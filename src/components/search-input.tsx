import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

// interface Props = {
// }

export default function SearchInput() {
  return (
    <div className="d-flex justify-content-end">
      <InputGroup className="mb-3 w-50">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="baris pencarian"
          aria-describedby="button-search"
        />
        <Button variant="outline-secondary" id="button-search">
          Cari
        </Button>
      </InputGroup>
    </div>
  );
}
