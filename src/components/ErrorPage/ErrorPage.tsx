import { useRouteError, isRouteErrorResponse} from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import { errorPageStyles } from './styles';
import { GENERAL_ERROR_MSG } from '../../utils/constants';

interface IErrorPage {
  errorMsg?: string;
}
function ErrorPage({ errorMsg }: IErrorPage) {
  const error = useRouteError();
  return (
    <Box sx={errorPageStyles}>
      <Typography variant='h2'>Oops!</Typography>
      <Typography variant='subtitle1'>{GENERAL_ERROR_MSG}</Typography>
      <Typography variant='subtitle1' color='error'>
        {isRouteErrorResponse(error) && <i>{isRouteErrorResponse(error) && error.statusText}</i>}
        {error instanceof Error && <i>{error instanceof Error && error.message}</i>}
        {errorMsg && <i>{errorMsg}</i>}
      </Typography>
    </Box>
  );
}

export default ErrorPage;