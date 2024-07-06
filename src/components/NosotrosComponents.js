import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import animationDevelop from "../assets/lotties/developProgramming.json";
import { Nosotros, fortalezas } from "../constantes/constantes";
import { COLOR_INITIAL } from "../styles/StylesConstantes";




function NosotrosComponents() {


    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <Box sx={{  }}>
            {mobile ?
                <Box sx={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#eaebef',
                    padding: 3,
                    borderRadius: 5,
                }}
                    className="animate__animated animate__backInLeft"
                >

                    <Box sx={{}}>
                        <Typography variant={mobile ? "h3" : 'h2'} style={{ textAlign: 'center', fontWeight: 500, marginTop: mobile ? 20 : 50 }}>
                            Acerca de Nosotros
                        </Typography>

                        <Typography variant="h5" style={{ textAlign: 'center', fontWeight: 100, marginTop: 5 }}>
                            {Nosotros.titlePrincipal}
                        </Typography>
                    </Box>

                </Box>
                :
                <Box sx={{
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignContent: 'center',
                    // alignItems: 'center',
                    // backgroundColor: '#eaebef',
                    // padding: 10,
                    // borderRadius: 5,
                    marginTop: 5,
                }}
                >
                    <Typography variant={'h4'} style={{ fontWeight: 500 }} align="center">
                        Nuestras Fortalezas
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        marginTop: 3,
                        //si no cabe en el ancho, se pone en columna
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%',
                    }}>
                        {fortalezas.map((fortaleza, index) => (
                            <div key={index} style={{
                                backgroundColor: COLOR_INITIAL.COLOR_BACKGROUND_BLANCO,
                                margin: 10,
                                padding: 10,
                                borderTopWidth: 3,
                                borderTopStyle: 'solid',
                                borderTopColor: COLOR_INITIAL.COLOR_AMARILLO,
                                borderLeftWidth: 3,
                                borderLeftStyle: 'solid',
                                borderLeftColor: COLOR_INITIAL.COLOR_AMARILLO,
                                borderRadius: 10,
                                width: 250,
                                //agregar sombra por debajo
                                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                            }}>
                                <Typography variant={'h4'} style={{ fontWeight: 500 }} align="center">
                                    {fortaleza.title}
                                </Typography>

                                <Box sx={{
                                }}>
                                    <Typography variant="subtitle1" style={{ fontWeight: 100, marginTop: 5 }} align="center">
                                        {fortaleza.descripcion}
                                    </Typography>
                                </Box>
                            </div>
                        ))}

                    </Box>
                </Box>
            }
        </Box>
    );
}

export default NosotrosComponents;