import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

export const Login = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <CardHeader title="Begin Here" />
      <CardContent>
        <TextField label="Email" />
      </CardContent>
      <CardActions>
        <Button variant="contained">Login</Button>
      </CardActions>
    </Card>
  );
};
