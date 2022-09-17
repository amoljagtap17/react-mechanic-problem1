import { useState, SyntheticEvent } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { TabPanel } from "components/lib";
import { Dashboard, Allocations, Bookings } from "components/sections";

const a11yProps = (index: number) => {
  return {
    id: `react-mechanic-${index}`,
    "aria-controls": `react-mechanic-${index}`,
  };
};

export const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation tabs"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Allocations" {...a11yProps(1)} />
          <Tab label="Bookings" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Allocations />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Bookings />
      </TabPanel>
    </Box>
  );
};
