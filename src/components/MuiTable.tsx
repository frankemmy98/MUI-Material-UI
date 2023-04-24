import {
  Paper,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Nevile",
    last_name: "Morgana",
    email: "nmorgana0@thetimes.co.uk",
    gender: "Female",
    ip_address: "155.64.107.25",
  },
  {
    id: 2,
    first_name: "Rolando",
    last_name: "Vasenin",
    email: "rvasenin1@facebook.com",
    gender: "Male",
    ip_address: "155.64.107.70",
  },
  {
    id: 3,
    first_name: "Anica",
    last_name: "Holtaway",
    email: "aholtaway2@twitpic.com",
    gender: "Male",
    ip_address: "155.64.107.65",
  },
  {
    id: 4,
    first_name: "Daniel",
    last_name: "Vanessa",
    email: "dvanessa3@linkedin.com",
    gender: "Female",
    ip_address: "155.64.107.52",
  },
  {
    id: 5,
    first_name: "Bryson",
    last_name: "Alyssa",
    email: "balyssa4@twitter.com",
    gender: "Female",
    ip_address: "155.64.107.35",
  },
  {
    id: 6,
    first_name: "Jason",
    last_name: "Bryan",
    email: "jbryan5@facebook.com",
    gender: "Female",
    ip_address: "155.64.107.44",
  },
];

export default MuiTable;
