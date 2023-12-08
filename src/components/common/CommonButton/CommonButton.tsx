import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material';

interface IButton {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color? : 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  disabled?: boolean;
  sx?: SxProps<Theme>;
  variant?: 'text' | 'outlined' | 'contained' ;
  onClick?: () => void;
}

function CommonButton({children, color, disabled, size, sx, variant, onClick }: IButton) {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }

  };
  return (
    <Button 
      size={size} 
      color={color} 
      disabled={disabled} 
      sx={sx} 
      variant={variant} 
      onClick={handleClick}>
      {children}
    </Button>
  );
}

export default CommonButton;