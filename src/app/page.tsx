import { Table, Container } from "react-bootstrap";
import SearchInput from "@/components/search-input";

export default function Home() {
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Markquezz</td>
            <td>mark@gmail.com</td>
            <td>Bandung</td>
            <td>www.mark.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Bazzz</td>
            <td>Abzabier</td>
            <td>bazzz@gmail.com</td>
            <td>Bandung</td>
            <td>www.bazzz.com</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
