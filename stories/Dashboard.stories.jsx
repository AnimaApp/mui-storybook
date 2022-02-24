import { Basic as Card } from "./Card.stories";
import { Basic as Chart } from "./Chart.stories";
import { Basic as Table } from "./Table2.stories";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from '@mui/icons-material/Notifications';
export default {
  title: "Dashboard",
  component: Box,
};

const Template = (args) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <div style={{marginBottom:"15px"}}>
            <NavBar />
        </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Chart />
        </Grid>
        <Grid item xs={4}>
          <Card />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </Box>
  );
};

export const Dashboard = Template.bind({});
Dashboard.args = {
  primary: true,
  label: "Button",
};

const NavBar = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>
            <Button color="inherit"><NotificationsIcon/></Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };
