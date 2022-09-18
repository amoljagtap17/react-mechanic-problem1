import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useCapacityData } from "./useAllocationData";

export const AllocationList = () => {
  const getCapacityData = useCapacityData();

  if (getCapacityData.loading) {
    return <h1>loading...</h1>;
  }

  const { capacity } = getCapacityData.data;

  return (
    <List>
      {capacity.map(
        ({ id, division, building, floor, wing, capacity }: any) => (
          <ListItem
            divider
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={division.divisionName}
              secondary={
                <>
                  <Typography variant="body2">
                    Building: {building.buildingName}
                  </Typography>
                  <Typography variant="body2">
                    Floor: {floor.floorNo}
                  </Typography>
                  <Typography variant="body2">Wing: {wing.wingName}</Typography>
                  <Typography variant="body2">Allocated: {capacity}</Typography>
                </>
              }
            />
          </ListItem>
        )
      )}
    </List>
  );
};
