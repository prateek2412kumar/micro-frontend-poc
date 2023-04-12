import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Link from "@mui/material/Link";

export const mainListItems = (
  <div>
    <ListItem button>
      <Link href="/" sx={{
        display: "flex"
      }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link href="/users" sx={{
        display: "flex"
      }}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </Link>
    </ListItem>
  </div>
);
