import React, { useEffect, useState } from "react";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import Lottie from 'react-lottie';
// import imageContacto from "../../assets/lotties/contacto.json";
import imageContacto from "../../assets/empresas/contacto.png";


export default function ContactoPage() {
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <HeaderCustom>
            <div style={{
                height: '100vh',
            }}>
                <Container sx={{}} style={{}}>
                    {mobile ? (
                        <>
                            <Box sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                borderWidth: 0.1,
                                borderColor: '#c1c1c1',
                                borderStyle: 'solid',
                                borderRadius: 5,
                                overflow: 'hidden',
                                boxShadow: 2,
                                marginBottom: 5,
                            }}>
                                <img src={imageContacto} alt="contacto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // objectFit: 'contain',
                                        overflow: 'hidden',
                                    }}
                                />
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                                padding: 2,
                                background: '#eaebef',
                                borderRadius: 5,
                                boxShadow: 2,
                                // marginTop: 5,
                            }}>
                                <Typography variant="h4" component="h1" align="center" gutterBottom style={{ fontWeight: "revert", color: '#363636' }}>
                                    ¡Estamos aquí para ayudarte!
                                </Typography>

                                <Typography variant="h5" component="h2" align="center" gutterBottom style={{ color: '#676767' }}>
                                    ¿Tienes alguna pregunta o inquietud? No te preocupes, estamos a solo un mensaje de distancia. Si necesitas ayuda, contáctanos en:
                                    &nbsp;
                                    <strong>
                                        <a href="mailto:incentivacallcenter@gmail.com" style={{ color: '#dddddd', fontSize: 20, color: '#676767', }}>
                                            incentivacallcenter@gmail.com
                                        </a>
                                    </strong>
                                </Typography>

                            </Box>

                        
                        </>

                    ) : (
                        <Box sx={{
                            // display: 'flex',
                            // flexDirection: 'column',
                            // justifyContent: 'center',
                            // alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            // padding: 10,
                            // gap: 2,
                            // background: 'linear-gradient(#989898, #656565, #7c7c7c)',
                            borderRadius: 5,
                            // boxShadow: 50,
                            marginTop: 10,
                            display: 'flex',
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60%',
                                background: '#eaebef',
                                borderTopLeftRadius: 15,
                                borderBottomLeftRadius: 15,
                                padding: 2

                            }}>
                                <Box sx={{}}>
                                    <Typography variant="h2" component="h1" align="center" gutterBottom style={{ fontWeight: "revert", color: '#363636' }}>
                                        ¡Estamos aquí para ayudarte!
                                    </Typography>

                                    <Typography variant="h5" component="h2" align="center" gutterBottom style={{ color: '#676767' }}>
                                        ¿Tienes alguna pregunta o inquietud? No te preocupes, estamos a solo un mensaje de distancia. Si necesitas ayuda, contáctanos en:
                                        &nbsp;
                                        <strong>
                                            <a href="mailto:incentivacallcenter@gmail.com" style={{ color: '#676767' }}>
                                                incentivacallcenter@gmail.com
                                            </a>
                                        </strong>
                                    </Typography>
                                </Box>

                            </Box>

                            <Box sx={{
                                width: '40%',
                                display: 'flex',
                                justifyContent: 'center',
                                borderWidth: 0.1,
                                borderColor: '#c1c1c1',
                                borderStyle: 'solid',
                                borderTopRightRadius: 15,
                                borderBottomRightRadius: 15,
                            }}>
                                {/* <Lottie
                                    options={{
                                        loop: true,
                                        autoplay: true,
                                        animationData: imageContacto,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice'
                                        }
                                    }}
                                    height={400}
                                    width={400}
                                /> */}
                                <img src={imageContacto} alt="contacto"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        // objectFit: 'contain',
                                        overflow: 'hidden',
                                        borderTopRightRadius: 15,
                                        borderBottomRightRadius: 15,
                                    }}
                                />
                            </Box>
                        </Box>
                    )}
                </Container>
            </div>
        </HeaderCustom>
    )
}