import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default {
  title: "Card",
  component: Box,
};

const CardWithData = (args) => {
  return (
    <Box sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Recent Deposits
          </Typography>
          <Typography variant="h5" component="div">
            $3,0243324234.00
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            on 15 March, 2019
          </Typography>
        </CardContent>
        <CardActions>
          <Link>View Balance</Link>
        </CardActions>
      </Card>
    </Box>
  );
};

const CardWithNoData = (args) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            no data
          </Typography>
          <Typography variant="h5" component="div">
            no data
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            no data
          </Typography>
        </CardContent>
        <CardActions>
          <Link>no link</Link>
        </CardActions>
      </Card>
    </Box>
  );
};
export const WithData = CardWithData.bind({});
export const WithOutData = CardWithNoData.bind({});
WithData.args = {
  primary: true,
  label: "Button",
};
