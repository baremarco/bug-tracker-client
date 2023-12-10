import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useForm,  SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonSelect from "../common/CommonSelect/CommonSelect";
import { USERS, PROJECTS } from "../../pages/ViewBug/consts/viewBug";
import CommonButton from "../common/CommonButton/CommonButton";
import CommonTextField from "../common/CommonTextField/CommonTextField";
import { bugFormStyles } from "./styles";

interface IFormInput {
    user: string;
    project: string;
    description: string;
}

interface ICreateBugForm {
    title: string;
    subtitle: string;
}

const yupSchema = yup
  .object({
    user: yup.string().required('Please select a user'),
    project: yup.string().required('Please select a project'),
    description: yup.string().required('Please write a description').max(100, 'No more than 100 characters'),
  })
  .required();

function CreateBugFrom({ title, subtitle }: ICreateBugForm) {
  const methods = useForm<IFormInput>({
    defaultValues: {
      user: '',
      project: '',
      description: '',
    },
    resolver: yupResolver(yupSchema)
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Paper>
      <Box sx={bugFormStyles.wrapper}>
        <Typography variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography mt={2}>{subtitle}</Typography>
        <Box sx={bugFormStyles.inputFields}>
          <FormProvider {...methods}>
            <CommonSelect
              label='User'
              name='user'
              options={USERS}
            />
            <CommonSelect
              label='User'
              name='project'
              options={PROJECTS}
            />
            <CommonTextField 
              label='Bug description'
              name='description'
              maxRows={4}
              multiline
            />
          </FormProvider>
        </Box>
        <Box sx={bugFormStyles.buttons}>
          <CommonButton variant='contained' onClick={methods.handleSubmit(onSubmit)}>
            Submit
          </CommonButton>
        </Box>
      </Box>
    </Paper>
  );
}

export default CreateBugFrom;
