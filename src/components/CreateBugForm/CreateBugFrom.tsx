import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useForm,  SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonSelect from "../common/CommonSelect/CommonSelect";
import CommonButton from "../common/CommonButton/CommonButton";
import CommonTextField from "../common/CommonTextField/CommonTextField";
import { bugFormStyles } from "./styles";
import useUser from "../../utils/hooks/useUser";
import { ERROR_MSG_KEY } from "../ErrorPage/ComponentErrorPage";
import { useNavigate } from "react-router-dom";
import useProject from "../../utils/hooks/useProject";
import useCreateBug from "../../utils/hooks/useCreateBug";

export interface IFormInput {
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

  const {users, error: userError} = useUser();
  const {projects, error: projectError} = useProject();
  const {error: createBugError, setBug, loading} = useCreateBug(methods.reset);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    try {
      setBug(data);
    } catch(err) {
      console.log(err);
    } 
  };

  if (userError || projectError || createBugError) {
    const errorMsg = userError?.message || projectError?.message || createBugError?.message;
    navigate(`component-error-page?${ERROR_MSG_KEY}=${errorMsg}`);
  }

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
              options={users}
            />
            <CommonSelect
              label='Project'
              name='project'
              options={projects}
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
          <CommonButton variant='contained' loading={loading} onClick={methods.handleSubmit(onSubmit)}>
            Submit
          </CommonButton>
        </Box>
      </Box>
    </Paper>
  );
}

export default CreateBugFrom;
