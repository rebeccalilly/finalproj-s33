import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import "./style.css";
import { ListWithIcon } from "./checklist.tsx";

export function DefaultSidebar() {
  const [checklistCount, setChecklistCount] = useState(0);

  const handleAddEventClick = () => {
    setChecklistCount(checklistCount + 1);
  };

  const renderChecklists = () => {
    const checklists = [];
    for (let i = 0; i < checklistCount; i++) {
      checklists.push(<ListWithIcon key={i} />);
    }
    return checklists;
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-100">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Welcome!
        </Typography>
      </div>
      <List>
        <ListItem onClick={handleAddEventClick}>
          <ListItemPrefix>
            <PlusIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Sticky Note
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      {renderChecklists()}
    </Card>
  );
}
