import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, Grid, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import { COLOR_BACKGROUND_BLANCO } from "../styles/styles";
import checkImage from "../assets/iconsPortafolioKills/check.png";
import Lottie from 'react-lottie';
import animation from "../assets/animation.json";
import { useNavigate } from "react-router-dom";



function ServicioDetailsComponents({ data, mobile, titleInfo }) {

    let history = useNavigate();



    const mobileKillStyle = {
        borderRadius: 10,
        height: 30,
        width: 30,
        objectFit: 'contain'
    };


    const desktopKillStyle = {
        borderRadius: 10,
        height: 25,
        width: 25,
        objectFit: 'contain',
    };


    const handelVerMas = (item) => {
        console.log('item', item);
        history(`/app/servicios/${item.code}`, { state: item.code });
    }


    return (
        <Box>
            {data.length === 0 && (
                <Box style={{
                    // marginTop: 5,
                    height: '100vh',
                }}>
                    <Typography variant="h4" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        No hay información disponible
                    </Typography>

                    <Typography variant="h6" gutterBottom align="center">
                        ¡Ups! No encontramos la página que buscas
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    
                    }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href="/"
                            style={{backgroundColor:'#07bc7d'}}
                        >
                            Ir al inicio
                        </Button>
                    </Box>

                </Box>
            )}

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
                className="animate__animated animate__backInLeft"
            >
                <Typography variant={mobile ? "h4" : "h3"}
                    style={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                    {titleInfo}
                </Typography>
            </Box>

            {mobile ?
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                }}
                    className="animate__animated animate__backInRight"
                >
                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    marginBottom: 5,
                                    // transition: 'transform 0.3s',
                                    // '&:hover': {
                                    //     transform: 'scale(1.1)'
                                    // },
                                    backgroundColor: COLOR_BACKGROUND_BLANCO,
                                    offset: 2,
                                    boxShadow: 3,
                                    //dar sombra
                                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                                    borderRadius: 5,
                                    marginBottom: 5,
                                    width: '100%',
                                }}>
                                    <Box sx={{

                                    }}>

                                        <Box>
                                            <Typography variant="h5" style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>
                                                {item.nombre}
                                            </Typography>
                                        </Box>




                                        <Box sx={{
                                            marginTop: 1,
                                        }}>
                                            {item?.opciones && item.opciones.map((item, index) => {
                                                return (
                                                    <Box key={index} sx={{
                                                        // padding: 1,
                                                        display: 'flex',
                                                        alignContent: 'center',
                                                        alignItems: 'center',
                                                        marginBottom: 1
                                                    }}>
                                                        <img src={checkImage} alt={item.name} style={mobileKillStyle} draggable="false" />

                                                        <Typography variant="body1" style={{ textAlign: "left", marginLeft: 10 }}>
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                )
                                            }
                                            )}
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Typography variant="h4" style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>
                                                {item.costo}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>

                :
                <Box sx={{
                    marginTop: 3,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
                    className="animate__animated animate__backInRight"
                >

                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    backgroundColor: COLOR_BACKGROUND_BLANCO,
                                    boxShadow: 3,
                                    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                                    borderRadius: 5,
                                    marginBottom: 5,
                                    width: '75%',
                                }}>
                                    <Box sx={{

                                    }}>
                                        <Box>
                                            <Typography variant="h3" style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>
                                                {item.nombre}
                                            </Typography>
                                        </Box>

                                        <Box sx={{}}>
                                            <Typography variant="h6" style={{ textAlign: 'center' }}>
                                                {item.descripcion}
                                            </Typography>
                                        </Box>



                                        <Box sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Box sx={{
                                                marginTop: 1,

                                            }}>
                                                {item?.opciones && item.opciones.map((item, index) => {
                                                    return (
                                                        <Box key={index} sx={{
                                                            // padding: 1,
                                                            display: 'flex',
                                                            alignContent: 'center',
                                                            alignItems: 'center',
                                                            marginBottom: 1
                                                        }}>
                                                            <img src={checkImage} alt={item.name} style={desktopKillStyle} draggable="false" />

                                                            <Typography variant="body1" style={{ textAlign: "left", marginLeft: 10 }}>
                                                                {item}
                                                            </Typography>
                                                        </Box>

                                                    )
                                                }
                                                )}
                                            </Box>
                                        </Box>

                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Typography variant="h4" style={{ textAlign: 'center', marginTop: 10, fontWeight: 'bold' }}>
                                                {item.costo}
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }

        </Box>
    )
}

export default ServicioDetailsComponents;