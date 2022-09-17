import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  FormLabel,
  Stack,
  TextField,
  Button,
} from "@mui/material";

export const AllocationForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <Stack spacing={1}>
            <FormLabel id="code">Select Code</FormLabel>
            <Select labelId="code">
              <MenuItem>AB</MenuItem>
              <MenuItem>XY</MenuItem>
            </Select>
          </Stack>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <Stack spacing={1}>
            <FormLabel id="building">Select Building</FormLabel>
            <Select labelId="building">
              <MenuItem>Building 1</MenuItem>
              <MenuItem>Building 2</MenuItem>
            </Select>
          </Stack>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <Stack spacing={1}>
            <FormLabel id="floor">Select Floor</FormLabel>
            <Select labelId="floor">
              <MenuItem>Floor 1</MenuItem>
              <MenuItem>Floor 2</MenuItem>
              <MenuItem>Floor 3</MenuItem>
              <MenuItem>Floor 4</MenuItem>
            </Select>
          </Stack>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <Stack spacing={1}>
            <FormLabel id="wing">Select Wing</FormLabel>
            <Select labelId="wing">
              <MenuItem>Wing A</MenuItem>
              <MenuItem>Wing B</MenuItem>
              <MenuItem>Wing C</MenuItem>
            </Select>
          </Stack>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <Stack spacing={1}>
            <FormLabel id="capacity">Allowed Capacity</FormLabel>
            <TextField type="number" />
          </Stack>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Allocate</Button>
      </Grid>
    </Grid>
  );
};
