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
  Paper,
  Typography
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { redirect, Link as RouterLink, useNavigate } from 'react-router-dom';
import { account } from '../../utils/appwrite'
// below are controlled components

export function CustomEmailField({ value, valueChangeHandler }) {
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

export function CustomPasswordField({ value, valueChangeHandler }) {
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

function SignUpLink() {
  return (
    <Link to={'/auth/register'} component={RouterLink} variant="body2">
      Sign up
    </Link>
  );
}

export default function SignIn() {
  const [email, setEmail] = React.useState<string>('');
  const [pwd, setPwd] = React.useState<string>('');
  const activeUserOnDevice = localStorage.getItem('appwriteId')
  const navigate = useNavigate();

  React.useEffect(() => {
    activeUserOnDevice ? navigate('/dashboard/property/view-active-postings') : null
  }, [activeUserOnDevice])

  function handleSubmit(): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return async () => {
      try {
        const res = await account.createEmailPasswordSession(email, pwd);
        localStorage.setItem('appwriteId', res.$id);
        navigate('/dashboard/property/view-active-postings/');
      }
      catch (e) {
        alert('user does not exist.pls register to the platform')
      }
    };
  }

  return (
    <>
      <Paper elevation={0} sx={{
        width: '100vw', minHeight: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <Paper elevation={12} square={false}
          sx={{ maxWidth: { sm: '37vw' }, height: 'min-content', padding: { xs: 5, sm: 10 }, marginLeft: 1, marginRight: 1 }}>
          <Typography variant='h4' sx={{ textAlign: 'center', padding: 4, fontFamily: 'serif' }}>
            Sign In to Shelter
          </Typography>
          <CustomEmailField value={email} valueChangeHandler={
            (event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }
          } />
          <CustomPasswordField value={pwd} valueChangeHandler={
            (event: React.ChangeEvent<HTMLInputElement>) => {
              setPwd(event.target.value);
            }} />
          <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            onClick={handleSubmit()}
            sx={{ my: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography variant='caption'>New to Platform?</Typography>
              <SignUpLink />
            </Box>
          </Box>
        </Paper>
      </Paper>
    </>
  );
}
