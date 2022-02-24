import Box from '@mui/material/Box';
import ChartImg from './assets/chart.jpeg';
import Grid from "@mui/material/Grid";
export default {
  title: "Chart",
  component: Box,
};

const Template = (args) => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <Grid >
          <img
            src={ChartImg}
            style={{width:"200%", boxShadow:"5px 10px 10px #D3D3D3"}}
          />
      </Grid>
          
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  primary: true,
  label: "Button",
};
