import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

interface SearchInputProps {
  handleSearch: (e: { target: { value: string } }) => void;
}

export default function SearchInput({ handleSearch }: SearchInputProps) {
  return (
    <div className="d-flex justify-content-end">
      <InputGroup className="mb-3 w-50">
        <Form.Control
          placeholder="Search..."
          aria-label="baris pencarian"
          aria-describedby="button-search"
          onChange={handleSearch}
        />
        <Button variant="outline-secondary" id="button-search">
          Search
        </Button>
      </InputGroup>
    </div>
  );
}
