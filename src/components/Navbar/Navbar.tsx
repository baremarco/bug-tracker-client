import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import {useNavigate } from "react-router-dom";
import { mainNavbarItems} from "./consts/navbar";
import { navbarStyles } from "./styles";


function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={navbarStyles}
        variant='permanent'
        anchor='left'
      >
        <Divider />
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => navigate(item.route)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box> 
  );
}

export default Navbar;
