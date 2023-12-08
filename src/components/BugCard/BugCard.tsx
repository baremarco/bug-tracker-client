import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';

interface ICommonCard {
 createdAt: string;
 username: string;
 project: string;
 description: string 
}
function BugCard({createdAt, username, project, description}: ICommonCard) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Created at
        </Typography>
        <Typography variant='button' component='div' gutterBottom sx={{fontSize: 12}}>
          {dayjs(createdAt).format('DD/MM/YYYY')}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom >
          Username 
        </Typography>
        <Typography variant='button' component='div' gutterBottom sx={{fontSize: 12}}>
          {username}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Project
        </Typography>
        <Typography variant='button' component='div' gutterBottom sx={{fontSize: 12}}>
          {project}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Description
        </Typography>
        <Typography variant='body2'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BugCard;