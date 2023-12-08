import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  const [ subtitle, setSubtitle ] = useState<string|undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    const parsedLocation = pathname.replace(/\W/g, ' ');
    setSubtitle(parsedLocation);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container>
          <Navbar /> 
          <Outlet />
          <Header title='Bug Tracker' subtitle={subtitle} />
        </Grid>
      </LocalizationProvider>
    </>
  );
}

export default App;
