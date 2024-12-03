import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, ListItemText, ListItemIcon, ListItem, List, Divider, Drawer, useTheme, useMediaQuery, Button, Box, styled, CssBaseline, Badge, Typography, ListItemButton } from '@mui/material';
import { HomeOutlined, Person, Phone, ShoppingCart, ShoppingCartCheckout, ViewCarouselOutlined, WhatsApp, Menu, LoginOutlined, FastfoodOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/empresas/logo.jpg';
import Footers from './Footers';
import { setNumberOrders, setToken } from '../redux/actions/action';
import { Helmet } from 'react-helmet';
import { COLOR_INITIAL } from '../styles/StylesConstantes';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
    const stateToken = useSelector(state => state.reducerGlobal.token);

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    let history = useNavigate();
    let location = window.location.pathname;
    const dispatch = useDispatch();


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

    const handleBanners = () => {
        history('/app/admin/banners');
    }

    const handleContacto = () => {
        history('/app/contacto');
    };

    const handleProductos = () => {
        history('/app/admin/productos');
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



    //-----------------------------cerrar el menu
    const handleDrawerClose = () => {
        setOpen(false);
    };




    const arrayMenu = [
        {
            id: 1,
            name: 'Inicio',
            icon: <HomeOutlined style={{ color: COLOR_INITIAL.NEGRO }} />,
            action: handleHome
        },
        {
            id: 2,
            name: 'Banners',
            icon: <ViewCarouselOutlined style={{ color: COLOR_INITIAL.NEGRO }} />,
            action: handleBanners
        },
        {
            id: 3,
            name: 'Productos',
            icon: <FastfoodOutlined style={{ color: COLOR_INITIAL.NEGRO }} />,
            action: handleProductos
        },
        {
            id: 4,
            name: 'Cerrar Sesion',
            icon: <LoginOutlined style={{ color: COLOR_INITIAL.NEGRO }} />,
            action: handleClose
        },
    ]


    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {arrayMenu.map((item, index) => (
                    <ListItem key={index} disablePadding onClick={item.action}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



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


            <div style={{}}>
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


                                {stateToken ? (
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            marginRight: 20,

                                        }}>
                                            <Typography variant="caption" style={{ color: COLOR_INITIAL.HEADER_COLOR, }}>
                                                {stateToken?.body?.usuario}
                                            </Typography>
                                            <Typography variant="caption" style={{ color: COLOR_INITIAL.HEADER_COLOR, }}>
                                                {stateToken?.body?.correo}
                                            </Typography>
                                        </div>

                                        <Button onClick={toggleDrawer(true)} color="success" style={{ color: COLOR_INITIAL.HEADER_COLOR }}>
                                            <Menu />
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>
                                        <Button onClick={handleHome} color="success" style={{ color: COLOR_INITIAL.HEADER_COLOR }}>
                                            Inicio
                                        </Button>

                                        <Button color="inherit" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 40 }}>
                                            Sobre Nosotros
                                        </Button>

                                        <Button onClick={handleContacto} color="inherit" style={{ color: COLOR_INITIAL.HEADER_COLOR, marginLeft: 40 }}>
                                            Contacto
                                        </Button>
                                    </Box>
                                )}

                            </Box>
                        </div>
                    )}
                </Toolbar>
            </div>

            <Main open={open} onClick={handleDrawerClose}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh',
                }}>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>

                    <div style={{ flex: 1 }}>
                        {children}
                    </div>

                    <Footers handlePhoneWhatsApp={handlePhoneWhatsApp} />
                </div>
            </Main>
        </div>
    );
}

export default HeaderCustom;