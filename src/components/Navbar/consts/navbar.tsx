import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export const drawerWidth = 240;
export const mainNavbarItems = [
  {
    id: 0,
    icon: <PreviewOutlinedIcon />,
    label: 'View Bug',
    route: 'view-bug',
  },
  {
    id: 1,
    icon: <AddBoxOutlinedIcon />,
    label: 'Create Bug',
    route: 'create-bug',
  },
];