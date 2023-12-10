import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CommonSelect from "../../components/common/CommonSelect/CommonSelect";
import { PROJECTS, BUGS } from "./consts/viewBug";
import GridPageWrapper from "../../components/common/GridPageWrapper/GridPageWrapper";
import BugCard from "../../components/BugCard/BugCard";
import { viewBugsStyles } from "./styles";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import CommonDatePicker from "../../components/common/CommonDatePicker/CommonDatePicker";
import { FormControl, FormLabel } from "@mui/material";
import { IFormInput } from "../../typings/pages/viewBug.ts";
import { getBugs } from "../../data/bug.data.ts";
import useUser from "../../utils/hooks/useUser.tsx";
import ErrorPage from "../../components/ErrorPage/ErrorPage.tsx";

function ViewBug() {
  const [outterError, setOuterError] = useState(false);
  const {users, error} = useUser();
  // const [bugs, setBugs] = useState<Bug []>([]);

  const methods = useForm<IFormInput>({
    defaultValues: {
      user: undefined,
      project: undefined,
      startDate: null,
      endDate: null,
      outForm: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const values = Object.values(data).reduce((acc, value) => {
      if (value !== null && value !== undefined && value !== "") {
        acc += 1;
      }
      return acc;
    }, 0);

    if (values <= 0) {
      setOuterError(true);
    } else {
      const serviseResponse = await getBugs(data);
      console.log({ serviseResponse });
      setOuterError(false);
    }
  };

  const getHeader = () => {
    return (
      <FormControl sx={{ width: "100%", mb: 4 }}>
        <Box sx={viewBugsStyles.header}>
          <FormProvider {...methods}>
            <CommonSelect
              label='User'
              name='user'
              options={users}
            />
            <CommonSelect
              label='Project'
              name='project'
              options={PROJECTS}
            />
            <CommonDatePicker label='Start Date' name='startDate' />
            <CommonDatePicker label='End Date' name='endDate' />
            <CommonButton
              variant='contained'
              onClick={methods.handleSubmit(onSubmit)}
            >
                            Find Bugs
            </CommonButton>
          </FormProvider>
        </Box>
        {outterError && (
          <FormLabel error>
            Must provide at least one filter
          </FormLabel>
        )}
      </FormControl>
    );
  };

  const getBody = () => {
    return (
      <Box sx={viewBugsStyles.body}>
        {BUGS.map((bug) => (
          <BugCard
            key={bug.id}
            createdAt={bug.creationDate}
            username={bug.username}
            project={bug.project}
            description={bug.description}
          />
        ))}
      </Box>
    );
  };

  if (error) {
    return <ErrorPage errorMsg={error.message}/>;
  }

  return (
    <GridPageWrapper>
      <Paper
        square={false}
        sx={{ minHeight: "30rem", marginLeft: "10%" }}
      >
        {getHeader()}
        {getBody()}
      </Paper>
    </GridPageWrapper>
  );
}

export default ViewBug;
