"use client";

import { Table, Container } from "react-bootstrap";
import SearchInput from "@/components/search-input";
import { useGetUsers } from "@/api/users";

export default function Home() {
  const { data, isLoading } = useGetUsers();

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">User List</h1>
      <SearchInput />
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
          ) : (
            data?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.website}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}
