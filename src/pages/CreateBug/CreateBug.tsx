import Paper from "@mui/material/Paper";
import GridPageWrapper from "../../components/common/GridPageWrapper/GridPageWrapper";
import CreateBugFrom from "../../components/CreateBugForm/CreateBugFrom";

function CreateBug() {
  return (
    <GridPageWrapper>
      <Paper square={false} sx={{minHeight: '30rem', marginLeft: '10%', maxWidth: '70%', display: 'grid', placeContent: 'center'}}>
        <CreateBugFrom title='New Bug' subtitle='Create a new bug and hit submit button'/>
      </Paper>
    </GridPageWrapper>
  );
}

export default CreateBug;