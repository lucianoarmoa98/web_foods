import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import animationDevelop from "../assets/lotties/developProgramming.json";
import { MessageDev, Nosotros, datosAdicionales, porQueElegirnos } from "../constantes/constantes";
import Lottie from 'react-lottie';
import animationDevelopPhone from "../assets/lotties/phonedeveloper.json";
import animationMkt from "../assets/lotties/mkt.json";

function MasInfoComponents() {


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

    const desktopStyle = {
        borderRadius: 10,
        height: 90,
        width: 90,
        objectFit: 'contain',
    };



    return (
        <Box sx={{ marginTop: 5 }}>
            {mobile ?
                <Box sx={{}} >
                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                    }} className="animate__animated animate__backInLeft">
                        <Typography variant="h6" style={{ textAlign: "left" }}>
                            {datosAdicionales.titleMobileDeveloper}
                        </Typography>

                        <div>
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationDevelopPhone,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                                height={200}
                                width={200}
                            />
                        </div>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                    }} className="animate__animated animate__backInRight">
                        <div>
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationMkt,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                                height={200}
                                width={200}
                            />
                        </div>

                        <Typography variant="h6" style={{ textAlign: "right" }}>
                            {datosAdicionales.titleMarketingDigital}
                        </Typography>
                    </Box>

                </Box>
                :
                <Box sx={{}}  >
                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}
                        className="animate__animated animate__backInLeft"
                    >
                        <div>
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationDevelopPhone,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                                height={mobile ? '50%' : '40vh'}
                                width={mobile ? '90%' : '50vh'}
                            />
                        </div>

                        <Typography variant="h5" style={{
                            width: '50%',
                            textAlign: "center"
                        }}>
                            {datosAdicionales.titleMobileDeveloper}
                        </Typography>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                        className="animate__animated animate__backInRight"
                    >

                        <Typography variant="h5" style={{
                            width: '50%',
                            textAlign: "center"
                        }}>
                            {datosAdicionales.titleMarketingDigital}
                        </Typography>

                        <div>
                            <Lottie
                                options={{
                                    loop: true,
                                    autoplay: true,
                                    animationData: animationMkt,
                                    rendererSettings: {
                                        preserveAspectRatio: "xMidYMid slice"
                                    }
                                }}
                                height={mobile ? '50%' : '40vh'}
                                width={mobile ? '90%' : '50vh'}
                            />
                        </div>



                    </Box>
                </Box>
            }
        </Box>
    );
}

export default MasInfoComponents;