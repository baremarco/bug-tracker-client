import { drawerWidth } from "../Navbar/consts/navbar";

export const headerStyles = {
  title: {
    fontFamily: 'monospace',
    fontWeight: 700,
    color: 'inherit',
    flexGrow: 1
  },
  subtitle: 
{
  fontFamily: 'monospace',
  fontWeight: 700,
  color: 'inherit',
  textTransform: 'capitalize'
            
},
  icon: {
    mr: 1
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`
  }
};