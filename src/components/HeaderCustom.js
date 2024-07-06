import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, ListItemText, ListItemIcon, ListItem, List, Divider, Drawer, useTheme, useMediaQuery, Tabs, Tab, Button, Avatar, Box, styled, CssBaseline, Badge, Typography } from '@mui/material';
import { AccountCircle, Add, Brightness4, CardGiftcard, ChevronLeft, ChevronRight, DarkMode, Home, HomeOutlined, Payment, Person, Phone, ShoppingCart, ShoppingCartCheckout, WhatsApp, } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { COLOR_BACKGROUND_VERDER_AGUA, COLOR_BACKGROUND_VERDE_CLARO, DrawerHeader, ICON_COLOR_BLACK, TEXT_HEADER } from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/empresas/logo.jpg';
import Footers from './Footers';
import { setNumberOrders, setTabPosition, setToken } from '../redux/actions/action';
import { Helmet } from 'react-helmet';
import { COLOR_INITIAL } from '../styles/StylesConstantes';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

function HeaderCustom({ children, id }) {
    const [open, setOpen] = useState(false);

    const stateOrderNumber = useSelector(state => state.reducerGlobal.numberOrders);


    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    let history = useNavigate();
    let location = window.location.pathname;
    const dispatch = useDispatch();

    let dataAdmin = localStorage.getItem('dataUser');

    useEffect(() => {
        //obtener el numero de ordenes del localstorage
        let numberOrders = localStorage.getItem('dataCarrito');
        if (numberOrders !== null) {
            //pasar a objeto
            let numberOrdersObject = JSON.parse(numberOrders);
            //setear el valor del state global
            dispatch(setNumberOrders(numberOrdersObject.length))
        }


    }, []);




    //funcion para retornar titulo de la pagina, dependiendo de la ruta
    const handleTitle = () => {
        if (location === '/') {
            return 'Inicio';
        } else if (location === '/app/servicios') {
            return 'Servicios';
        } else if (location === '/app/contacto') {
            return 'Contacto';
        } else {
            return 'Inicio';
        }
    }









    //-------------------------------rutas
    const handleHome = () => {
        history('/');
    }

    const handleServicios = () => {
        history('/app/servicios');
    }

    const handleContacto = () => {
        history('/app/contacto');
    }

    const handleCarrito = () => {
        history('/incentiva-ecommerce-web/carrito');
    }




    //-------------------------------rutas externas
    const handleUrlInstagram = () => {
        let url = 'https://www.instagram.com/incentivapy__';

        //abrir en una nueva pestaña
        window.open(url, '_blank');
    }

    const handlePhoneWhatsApp = () => {
        let url = 'https://api.whatsapp.com/send?phone=595976308922&text=Hola%20Incentiva%20Py';

        //abrir en una nueva pestaña
        window.open(url, '_blank');
    }

    const handleClose = () => {
        localStorage.removeItem('dataUser');
        dispatch(setToken(null));
        history('/');
        window.location.reload();
    };


    //-----------------------------abrir el menu de navegacion
    const handleDrawerOpen = () => {
        // setOpen(true)
        if (open) {
            handleDrawerClose();
        } else {
            setOpen(true);
        }
    };

    //-----------------------------cerrar el menu
    const handleDrawerClose = () => {
        setOpen(false);
    };




    const arrayMenu = [
        {
            id: 1,
            name: 'Inicio',
            icon: <HomeOutlined style={{ color: COLOR_INITIAL.COLOR_AMARILLO }} />,
            action: handleHome
        },
        {
            id: 2,
            name: 'Productos',
            icon: <ShoppingCart style={{ color: COLOR_INITIAL.COLOR_AMARILLO }} />,
            action: handleServicios
        },
        {
            id: 3,
            name: 'Sobre Nosotros',
            icon: <Person style={{ color: COLOR_INITIAL.COLOR_AMARILLO }} />,
            action: handleContacto
        },
        {
            id: 4,
            name: 'Contacto',
            icon: <Phone style={{ color: COLOR_INITIAL.COLOR_AMARILLO }} />,
            action: handleContacto
        },
    ]

    //funcion para identificar si esta dentro de un dispositivo movil
    const isMobile = () => {
        return isMatch;
    }

    return (
        <div style={{}}>
            <Helmet>
                <title>{handleTitle()}</title>
                <meta name="description" content="Incentiva Groups Py" />
                <meta name="keywords" content="Incentiva Groups Py" />
                <meta name="author" content="Incentiva Groups Py" />
                <meta name="theme-color" content="#008f68" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#008f68" />
                <meta name="msapplication-navbutton-color" content="#008f68" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes"></meta>
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="revisit-after" content="1 days" />
                <meta name="language" content="Spanish" />
            </Helmet>
            <CssBaseline />

            {/* <AppBar position="fixed" style={{
                backgroundColor: 'white',
            }}> */}
            <div style={{
                // backgroundColor: '#f8f9fa',
            }}>
                <Toolbar style={{
                    // backgroundColor: COLOR_INITIAL.HEADER_COLOR,
                    backgroundColor: 'transparent',
                    padding: 10,
                }}>
                    {isMatch ? (
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            alignContent: 'center',
                            alignItems: 'center',
                        }}>
                            <div>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 30,
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            <div>
                                <div style={{
                                    display: 'flex',
                                    alignContent: 'center',
                                    marginLeft: 5,
                                }}>
                                    <PlaceOutlinedIcon
                                        style={{
                                            color: COLOR_INITIAL.HEADER_COLOR,
                                            fontSize: 20,
                                        }}
                                        onClick={handleDrawerOpen}
                                    />
                                    <Typography variant="caption" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 5, }}>
                                        Limpio - Defensores del Chaco
                                    </Typography>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    marginLeft: 5,
                                    marginTop: 5,
                                }}>
                                    <CallOutlinedIcon
                                        style={{
                                            color: COLOR_INITIAL.HEADER_COLOR,
                                            fontSize: 20,
                                        }}
                                        onClick={handleDrawerOpen}
                                    />
                                    <Typography variant="caption" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 5, }}>
                                        0981 123 456
                                    </Typography>
                                </div>
                            </div>




                        </div>
                    ) : (

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            }}>

                                <Box sx={{
                                    padding: 1,
                                }}>
                                    <img
                                        src={logo}
                                        alt="logo"
                                        style={{
                                            width: 90,
                                            height: 90,
                                            borderRadius: 50,
                                        }}
                                    />
                                </Box>


                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <Button color="success" style={{ color: COLOR_INITIAL.HEADER_COLOR }}>
                                        Inicio
                                    </Button>

                                    <Button color="success" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 40 }}>
                                        Productos
                                    </Button>

                                    <Button color="inherit" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 40 }}>
                                        Sobre Nosotros
                                    </Button>

                                    <Button color="inherit" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 40 }}>
                                        Contacto
                                    </Button>


                                </Box>

                            </Box>
                        </div>
                    )}
                </Toolbar>
            </div>

            <Main open={open} onClick={handleDrawerClose}>
                {/* <DrawerHeader /> */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}>
                    {children}
                </div>
                {/* <Footers handlePhoneWhatsApp={handlePhoneWhatsApp} /> */}
            </Main>
        </div>
    );
}

export default HeaderCustom;