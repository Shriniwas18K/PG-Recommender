import * as React from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  InputAdornment,
  Link,
  IconButton,
  Box,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';

// below are controlled components

function CustomEmailField({value,valueChangeHandler}) {
  return (
    <TextField
      id="input-with-icon-textfield-controlled"
      label="Username"
      name="email"
      type="email"
      size="small"
      required
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle fontSize="inherit" />
            </InputAdornment>
          ),
        },
      }}
      value={value}
      onChange={valueChangeHandler}
      variant="outlined"
    />
  );
}

function CustomPasswordField({value,valueChangeHandler}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-password">
        Password
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        size="small"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="small"
            >
              {showPassword ? (
                <VisibilityOff fontSize="inherit" />
              ) : (
                <Visibility fontSize="inherit" />
              )}
            </IconButton>
          </InputAdornment>
        }
        value={value}
        onChange={valueChangeHandler}
        label="Password"
      />
    </FormControl>
  );
}

// below button initiates auth handling service
function CustomButton() {
  return (
    <Button
      type="submit"
      variant="outlined"
      color="info"
      size="small"
      disableElevation
      fullWidth
      sx={{ my: 2 }}
    >
      Sign In
    </Button>
  );
}

function SignUpLink() {
  return (
    <Link href="/" variant="body2">
      Sign up
    </Link>
  );
}

function ForgotPasswordLink() {
  return (
    <Link href="/" variant="body2">
      Forgot password?
    </Link>
  );
}

export default function SignIn() {
  const [email,setEmail]=React.useState<string>('');
  const [pwd,setPwd]=React.useState<string>('');

  return (
    <>
    <Box>
        <CustomEmailField value={email} valueChangeHandler={
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
            }
        }/>
        <CustomPasswordField value={pwd} valueChangeHandler={
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setPwd(event.target.value);
        }}/>
        <CustomButton/>
        <SignUpLink/>
        <ForgotPasswordLink/>
    </Box>
    </>
  );
}
