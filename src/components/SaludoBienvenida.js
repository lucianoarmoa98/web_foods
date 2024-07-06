import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from 'react-lottie';
import animationDevelop from "../assets/lotties/developProgramming.json";
import { HOME_INITIAL, MessageDev } from "../constantes/constantes";




function SaludoBienvenida() {


    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    // useEffect(() => {
    //     let texto = '';
    //     let i = 0;

    //     const interval = setInterval(() => {
    //         if (i < MessageDev.length) {
    //             texto += MessageDev.charAt(i);
    //             setTexto(texto);
    //             i++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 50);
    // }, []);






    const mobileStyle = {
        borderRadius: 10,
        height: 100,
        width: 80,
        objectFit: 'contain'
    };

    return (
        <Box sx={{}}>
            {mobile ?
                <Box sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    // padding: 3,
                }}>

                    <Box sx={{
                        width: '100%',
                        position: 'relative',
                    }}>
                        <img
                            src={HOME_INITIAL.imagen}
                            alt="Hierro Plus"
                            style={{
                                width: '100%',
                                height: '100vh',
                                objectFit: 'cover',
                                //agregar un fuminado para que no se vea tan fuerte
                                filter: 'brightness(0.3)',
                            }}
                        />

                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            padding: 5,
                            width: '100%',
                        }}>
                            <Typography variant={'h4'} style={{ fontWeight: 'bold', color: '#f7feff' }} align="left">
                                ¡Bienvenidos a {HOME_INITIAL.titulo}!
                            </Typography>

                            <Typography variant="subtitle1" style={{ marginTop: 5, fontSize: 18, color: '#f7feff' }} align="left">
                                {HOME_INITIAL.descripcion}
                            </Typography>

                        </Box>
                    </Box>
                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>

                    <Box sx={{
                        width: '100%',
                        position: 'relative',
                    }}>
                        <img
                            src={HOME_INITIAL.imagen}
                            alt="Hierro Plus"
                            style={{
                                width: '100%',
                                // height: '100%',
                                height: '50vh',
                                objectFit: 'cover',
                                //agregar un fuminado para que no se vea tan fuerte
                                filter: 'brightness(0.3)',
                            }}
                        />

                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            padding: 10,
                            width: '65%',
                        }}>
                            <Typography variant={'h3'} style={{ fontWeight: 'bold', color: '#f7feff' }}>
                                ¡Bienvenidos a {HOME_INITIAL.titulo}!
                            </Typography>

                            <Typography variant="subtitle1" style={{ marginTop: 5, fontSize: 18, color: '#f7feff' }}>
                                {HOME_INITIAL.descripcion}
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default SaludoBienvenida;