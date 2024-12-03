import React, { useState } from 'react'
import { Alert, Backdrop, Box, Button, CircularProgress, Container, CssBaseline, IconButton, InputAdornment, Paper, Snackbar, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { CssTextField } from '../../styles/styles';
// import '../../styles/globalCss.css';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/actions/action';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../assets/empresas/logo.jpg';
import { COLOR_INITIAL } from '../../styles/StylesConstantes';
import { postLogin } from '../../api/ApiService';

const credentials = {
    username: 'adminIcentiva',
    password: 'Z3JvdXBzSW5jZW50MjAyMyQ='
}


function LoginPage({ }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const dispatch = useDispatch();

    //---------------------------------ruta de redireccion
    let history = useNavigate();


    //---------------------------------cerrar modal de alerta
    const handleClose = () => {
        setOpen(false);
    };

    //-----------------------------evento de ingresar usuario
    const handleChangeUser = (e) => {
        const { value } = e.target;
        setUserName(value);
    }

    //-----------------------------evento de ingresar password
    const handleChangePas = (e) => {
        const { value } = e.target;
        setPassword(value);
    }


    //-----------------------------evento de iniciar sesion
    const handleSubmit = (e) => {
        e.preventDefault();


        //usar trim para eliminar espacios en blanco
        if (userName.trim() === '' || password.trim() === '') {
            setOpen(true);
            setSeverity('error');
            setMensaje('Ingrese usuario y contraseña');
        } else {
            //-----------------------------datos de login para verificar con credentials
            let body = {};
            body.usernameOrEmail = userName;
            body.password = password;

            setCargando(true);
            handleApiLogin(body);
            //comparar datos de login con credentials
            // if (userName === credentials.username && password === dataDesencriptada) {
            //     setCargando(false);
            //     dispatch(setToken(true));
            //     localStorage.setItem('dataUser', true);
            //     // //ir a la ruta de administrador, sin poder regresar a login
            //     history('/incentiva-ecommerce-web/admin', { replace: true });
            // } else {
            //     console.log("datos incorrectos", body);
            //     setCargando(false);
            //     setOpen(true);
            //     setSeverity('error');
            //     setMensaje('Usuario o contraseña incorrecta');
            // }



        }
    };

    const handleApiLogin = (body) => {
        postLogin(body)
            .then(response => {
                console.log("response", response);
                setCargando(false);
                dispatch(setToken(response));
                //pasar el response a un localstorage en formato string
                let data = JSON.stringify(response);
                localStorage.setItem('dataUser', data);
                // //ir a la ruta de administrador, sin poder regresar a login
                history('/app/admin', { replace: true });
            })
            .catch(error => {
                console.log("error", error);
                setCargando(false);
                setOpen(true);
                setSeverity('error');
                setMensaje(error?.mensaje);
            })
    }

    //-----------------------------------------enviar datos con enter
    const eventEnter = (e) => {
        console.log("e", e.keyCode)
        if (e.keyCode === 13 && password.trim() !== '' && userName.trim() !== '') {
            handleSubmit(e);
        } else {
        }
    };


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className={{}}>
            <div style={{
                //centrar el contenido
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f4f5f9',
            }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                        height: 450
                    }}>

                        <Box style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img src={logo} alt="logo" style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                // marginBottom: 20
                            }} />
                        </Box>

                        <div className={{}} >
                            <CssTextField
                                value={userName}
                                onChange={handleChangeUser}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Ingrese su Correo"
                                id="username"
                                autoCapitalize='none'
                                autoCorrect={false}
                                autoCompleteType='email'
                                autoFocus
                            />

                            <CssTextField
                                value={password}
                                onChange={handleChangePas}
                                onKeyDown={eventEnter}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                // type="password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="off"
                                autoCapitalize={'off'}
                                autoCorrect='off'
                                //habilitar ver contraseña
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}

                            />

                            <div style={{ marginTop: 20 }}>
                                <Button
                                    fullWidth
                                    onClick={handleSubmit}
                                    variant="contained"
                                    style={{
                                        backgroundColor: COLOR_INITIAL.NEGRO, 
                                        color: 'white', 
                                        fontWeight: 'bold',
                                        height: 50
                                    }}
                                >
                                    Iniciar sesión
                                </Button>
                            </div>

                            <Typography variant="body2" display="block" gutterBottom align="center" style={{ marginTop: 10 }}>
                                Versión: {'1.0.0'}
                            </Typography>
                        </div>
                    </Paper>
                </Container>
            </div>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} elevation={6} variant="filled" >
                    {mensaje}
                </Alert>
            </Snackbar>

            <Backdrop className={{}} open={cargando}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default LoginPage;

// export default connect(null, { guardarText, alertInit })(Login);
// withStyles(useStylesLogin)(Login);