import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

export const AllocationList = () => {
  return (
    <List>
      <ListItem
        divider
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary="AB"
          secondary={
            <>
              <Typography variant="body2">Building: Building 1</Typography>
              <Typography variant="body2">Floor: Floor 1</Typography>
              <Typography variant="body2">Wing: Wing 1</Typography>
              <Typography variant="body2">Allocated: 200</Typography>
            </>
          }
        />
      </ListItem>
      <ListItem
        divider
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary="XY"
          secondary={
            <>
              <Typography variant="body2">Building: Building 1</Typography>
              <Typography variant="body2">Floor: Floor 1</Typography>
              <Typography variant="body2">Wing: Wing 1</Typography>
              <Typography variant="body2">Allocated: 200</Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
};
