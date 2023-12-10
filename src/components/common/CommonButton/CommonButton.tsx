import { SxProps, Theme } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface IButton {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning";
    disabled?: boolean;
    sx?: SxProps<Theme>;
    variant?: "text" | "outlined" | "contained";
    onClick?: () => void;
    loading?: boolean;
}

function CommonButton({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
  onClick,
  loading = false,
}: IButton) {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <LoadingButton
      size={size}
      color={color}
      disabled={disabled}
      sx={sx}
      variant={variant}
      onClick={handleClick}
      loading={loading}
    >
      {children}
    </LoadingButton>
  );
}

export default CommonButton;
