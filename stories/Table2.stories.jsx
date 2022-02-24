import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";

export default {
    title: "Table2",
    component: Box,
};

function createDataForTable(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }
  
  const rows2 = [
    createDataForTable(
      0,
      "16 Mar, 2019",
      "Elvis Presley",
      "Tupelo, MS",
      "VISA ⠀•••• 3719",
      312.44
    ),
    createDataForTable(
      1,
      "16 Mar, 2019",
      "Paul McCartney",
      "London, UK",
      "VISA ⠀•••• 2574",
      866.99
    ),
    createDataForTable(
      2,
      "16 Mar, 2019",
      "Tom Scholz",
      "Boston, MA",
      "MC ⠀•••• 1253",
      100.81
    ),
    createDataForTable(
      3,
      "16 Mar, 2019",
      "Michael Jackson",
      "Gary, IN",
      "AMEX ⠀•••• 2000",
      654.39
    ),
    createDataForTable(
      4,
      "15 Mar, 2019",
      "Bruce Springsteen",
      "Long Branch, NJ",
      "VISA ⠀•••• 5919",
      212.79
    ),
  ];
  
  function preventDefault(event) {
    event.preventDefault();
  }
  
const Template = () => {
    return (
      <Box>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Recent Orders
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{`$${row.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more orders
        </Link>
      </Box>
    );
  };



export const Basic = Template.bind({});
Basic.args = {
  primary: true,
  label: 'Button',
};