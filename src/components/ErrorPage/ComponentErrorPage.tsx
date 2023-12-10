import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { errorPageStyles } from './styles';
import { useSearchParams } from "react-router-dom";

export const ERROR_MSG_KEY = 'errorMsg';

function ComponentErrorPage() {
  const [ searchParams ] = useSearchParams();

  return (
    <Box sx={errorPageStyles}>
      <Typography variant='h2'>Oops!</Typography>
      <Typography variant='subtitle1' color='error'>
        {searchParams.has(ERROR_MSG_KEY) && <i>{searchParams.get(ERROR_MSG_KEY)}</i>}
      </Typography>
    </Box>
  );
}

export default ComponentErrorPage;