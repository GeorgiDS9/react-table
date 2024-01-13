import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface TableData {
  col2: string;
  col3: string;
}

const MyTable: React.FC = () => {
  // Sample data for the table
  const data: TableData[] = [
    {
      col2: "Data 1",
      col3: "Data 1",
    },
    {
      col2: "Data 2",
      col3: "Data 2",
    },
    // Add more rows as needed
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Link</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
