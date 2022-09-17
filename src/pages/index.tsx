import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { Intro, Login } from "components/sections";

const HomePage: NextPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Intro />
      </Grid>
      <Grid item xs={12} md={6}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default HomePage;
