import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";


function HabilidadesCustom({ data, mobile }) {


    const mobileStyle = {
        borderRadius: 10,
        height: 100,
        width: 80,
        objectFit: 'contain'
    };

    const desktopStyle = {
        borderRadius: 10,
        height: 90,
        width: 90,
        objectFit: 'contain',
    };



    return (
        <Box>
            <Box sx={{}} className="animate__animated animate__backInLeft">
                <Typography variant={mobile ? "h4" : 'h3'} style={{ textAlign: 'center' }}>
                    Mis habilidades
                </Typography>
            </Box>

            {mobile ?
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center'
                }}
                >
                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    marginBottom: 5,
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.1)'
                                    }

                                }}>
                                    <img src={item.image} alt={item.name} style={{ ...  (mobileStyle), pointerEvents: 'none' }} draggable="false" />
                                </Box>
                            )
                        })
                    }
                </Box>

                :
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginTop: 3,
                }}
                    className="animate__animated animate__backInRight"
                >

                    {
                        data.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    padding: 2,
                                    transition: 'transform 0.3s', // Añadir transición solo para la propiedad transform
                                    '&:hover': {
                                        transform: 'scale(1.1)' // Aumentar el tamaño en un 10% al pasar el cursor
                                    }
                                }}>
                                    <img src={item.image} alt={item.name} style={desktopStyle} draggable="false" />
                                </Box>
                            )
                        })
                    }
                </Box>
            }

            </Box>
    )
}

export default HabilidadesCustom;