import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { signIn } from "next-auth/react";

export const Login = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <CardHeader title="Begin Here" />
      <CardContent>
        <TextField label="Email" />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() =>
            signIn("credentials", { email: "u", callbackUrl: "/home" })
          }
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
};
