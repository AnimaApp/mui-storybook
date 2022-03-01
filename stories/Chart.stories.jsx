import Box from '@mui/material/Box';
import ChartImg from './assets/chart.jpeg';
import Grid from "@mui/material/Grid";
export default {
  title: "Chart",
  component: Box,
};

const Chart = (args) => {
  return (
    <Box sx={{ width: "100%", }}>
      <Grid >
          <img
            src={ChartImg}
            style={{width:"100%",height:"189px", boxShadow:"2px 2px 10px #D3D3D3", borderRadius:"3px"}}
          />
      </Grid>
          
    </Box>
  );
};

export const Basic = Chart.bind({});
Basic.args = {
  primary: true,
  label: "Button",
};
