import Grid from '@mui/material/Grid';

interface IGridPageWrapper {
  children: React.ReactNode;
}
function GridPageWrapper({children}: IGridPageWrapper) {
  return (
    <Grid item xs={8} mt='100px' pl={1}>
      {children}
    </Grid>
  );
}

export default GridPageWrapper;