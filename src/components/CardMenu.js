import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, LinearProgress, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from 'react-lottie';
import animationDevelop from "../assets/lotties/developProgramming.json";
import { HOME_INITIAL, menuOptions, MessageDev } from "../constantes/constantes";




function CardMenu({ data, title }) {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    //funcion para recortar el texto, si es muy largo
    const recortarTexto = (texto) => {
        if (texto.length > 70) {
            return texto.substring(0, 70) + '...';
        } else {
            return texto;
        }
    }


    return (
        <Box sx={{}}>
            {mobile ?
                <Box sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    <Container sx={{}} style={{}}>
                        <Typography variant="h6" style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                            {title}
                        </Typography>
                    </Container>

                    <div style={{
                        display: 'flex',
                        overflowX: 'scroll',
                        //ocultar la barra de scroll
                        scrollbarWidth: 'none',
                    }}>
                        {data.map((option, index) => (
                            <div key={option.id} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #ccc',
                                borderRadius: 20,
                                padding: 10,
                                marginRight: 20,
                                minWidth: 300,
                                backgroundColor: '#fff',
                                marginLeft: index === 0 ? 10 : 0,
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            }}
                                onClick={() => {
                                    // alert('click');
                                }}
                            >
                                <img src={option.imagen} alt={option.nombre} style={{
                                    width: '100%',
                                    borderRadius: 10,
                                    height: 170,
                                    objectFit: 'cover',
                                }} />
                                <Typography variant="h6" style={{
                                    fontSize: 18,
                                    marginTop: 10,
                                    fontWeight: 'bold',
                                }}>
                                    {option.nombre}
                                </Typography>

                                <Typography variant="subtitle1" style={{
                                    fontSize: 14,
                                    marginTop: 10,
                                }}>
                                    {recortarTexto(option.descripcion)}

                                </Typography>

                                <Typography variant="subtitle1" style={{ fontSize: 14, marginTop: 10, fontWeight: 'bold' }}>
                                    {option.precio} Gs.
                                </Typography>
                            </div>
                        ))}
                    </div>

                </Box>
                :
                <Box sx={{}}>



                    <Container sx={{}} style={{}}>
                        <Container sx={{}} style={{
                            marginLeft: 75,
                        }}>
                            <Typography variant="h6" style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                                {title}
                            </Typography>
                        </Container>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}>


                            {data.map((option, index) => (
                                <div key={option.id} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid #ccc',
                                    borderRadius: 20,
                                    padding: 10,
                                    marginRight: 20,
                                    width: 300,
                                    backgroundColor: '#fff',
                                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    marginBottom: 20,
                                }}
                                    onClick={() => {
                                        // alert('click');
                                    }}
                                >
                                    <img src={option.imagen} alt={option.nombre} style={{
                                        width: '100%',
                                        borderRadius: 10,
                                        height: 170,
                                        objectFit: 'cover',
                                    }} />
                                    <Typography variant="h6" style={{
                                        fontSize: 18,
                                        marginTop: 10,
                                        fontWeight: 'bold',
                                    }}>
                                        {option.nombre}
                                    </Typography>

                                    <Typography variant="subtitle1" style={{
                                        fontSize: 14,
                                        marginTop: 10,
                                    }}>
                                        {recortarTexto(option.descripcion)}

                                    </Typography>

                                    <Typography variant="subtitle1" style={{ fontSize: 14, marginTop: 10, fontWeight: 'bold' }}>
                                        {option.precio} Gs.
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Box>
            }
        </Box>
    );
}

export default CardMenu;
