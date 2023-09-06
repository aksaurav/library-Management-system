import React from "react";
import Layout from "./../components/layouts/Layouts";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

// Sample user data
const userData = [
  {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    address: "123 Main St, City",
    college: "University of XYZ",
  },
  {
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@example.com",
    address: "456 Elm St, Town",
    college: "University of ABC",
  },
  // Add more user data as needed
];

const CustomerUserTable = () => {
  return (
    <Layout>
      <Box sx={{ m: 5 }}>
        <Typography variant="h4" gutterBottom>
          We Need more Infomation About you
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>College</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.college}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default CustomerUserTable;
