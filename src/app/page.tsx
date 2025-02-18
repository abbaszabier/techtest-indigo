"use client";

import { Table, Container } from "react-bootstrap";
import SearchInput from "@/components/search-input";
import { useGetUsers } from "@/api/users";
import { useState } from "react";

export default function Home() {
  const { data, isLoading } = useGetUsers();
  const [search, setSearch] = useState("");

  const handleSearch = (e: { target: { value: string } }) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredData = data?.filter((user) => {
    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.address.city.toLowerCase().includes(search)
    );
  });

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">User List</h1>
      <SearchInput handleSearch={handleSearch} />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6} className="text-center">
                Loading...
              </td>
            </tr>
          ) : filteredData && filteredData.length > 0 ? (
            filteredData.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.website}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
