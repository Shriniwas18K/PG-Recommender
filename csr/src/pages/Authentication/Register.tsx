import * as React from 'react';
import {
    Button,
    Link,
    Box,
    Paper,
    Typography,
    TextField,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { CustomEmailField } from './SignIn';
import { CustomPasswordField } from './SignIn';
import { account, ID } from '../../utils/appwrite';
// below are controlled components

function SignInLink() {
    return (
        <Link to={'/auth/signin'} component={RouterLink} variant="body2">
            Sign In
        </Link>
    );
}

export default function Register() {
    const [email, setEmail] = React.useState<string>('');
    const [pwd, setPwd] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [phone, setPhone] = React.useState<string>('');
    const activeUserOnDevice = localStorage.getItem('appwriteId')
    const navigate = useNavigate();

    React.useEffect(()=>{
        activeUserOnDevice ? navigate('/dashboard/property/view-active-postings') : null
    },[activeUserOnDevice])

    const handleSubmit = async()=>{
        const res = account.create(
            ID.unique(),email,pwd,name
        )
        localStorage.setItem('appwriteId',(await res).$id);
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
                        Register to Shelter
                    </Typography>
                    <TextField required fullWidth
                        label="Name" value={name} onChange={
                            (event) => setName(event.target.value)}
                        variant="outlined" type='text' size='small'
                        sx={{ marginBottom: 2 }} />
                    <TextField required fullWidth
                        label="Phone" value={phone} onChange={
                            (event) => setPhone(event.target.value)}
                        variant="outlined" type='text' size='small'
                        sx={{ marginBottom: 2 }} />
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
                        sx={{ my: 2 }}
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <Typography variant='caption'>New to Platform?</Typography>
                            <SignInLink />
                        </Box>
                    </Box>
                </Paper>
            </Paper>
        </>
    );
}
