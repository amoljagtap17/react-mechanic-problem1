import { Grid } from "@mui/material";
import { StatsCard } from "components/lib";

export const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <StatsCard label="Available Seats" count={650} />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard label="Current Allocations" count={400} />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatsCard label="Available Allocations" count={250} />
      </Grid>
    </Grid>
  );
};
