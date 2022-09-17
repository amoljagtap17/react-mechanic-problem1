import { Grid } from "@mui/material";
import { StatsCard } from "components/lib";

export const ManagerDashboard = () => {
  return (
    <Grid container padding={2} marginY={2} spacing={4}>
      <Grid item xs={12} md={4}>
        <StatsCard label="Available Capacity" count={1000} />
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
