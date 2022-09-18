import { Grid } from "@mui/material";
import { AllocationForm } from "./AllocationForm";
import { AllocationList } from "./AllocationList";

export const Allocations = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <AllocationForm />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AllocationList />
      </Grid>
    </Grid>
  );
};
