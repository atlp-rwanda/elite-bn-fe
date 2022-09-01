import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "./tableRows";

export default () => (
  <div>
    <h1 className="title">Users(Managers) need to see requests that require their approval</h1>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>requester Name </TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>role</TableCell>
            <TableCell numeric>City</TableCell>
            <TableCell numeric>nmr</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ id, requestename, email, role, city}) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell numeric>{requestename}</TableCell>
              <TableCell numeric>{email}</TableCell>
              <TableCell numeric>{role}</TableCell>
              <TableCell numeric>{city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);
