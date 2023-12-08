import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import AdbIcon from '@mui/icons-material/Adb';
import Container from "@mui/material/Container";
import { headerStyles } from "./styles";

interface IHeader {
  title: string;
  subtitle?: string
}
function Header({ title, subtitle }: IHeader) {
  return(  
    <Container maxWidth='xl'>
      <AppBar position='fixed' sx={headerStyles.appBar}
      >
        <Toolbar>
          <AdbIcon sx={headerStyles.icon} />
          <Typography
            variant='h6'
            sx={headerStyles.title}
          >
            {title}
          </Typography>
          <Typography
            variant='h6'
            sx={headerStyles.subtitle}
          >
            {subtitle !== undefined && subtitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Header;