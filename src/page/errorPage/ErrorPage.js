import React from "react";
import Lottie from 'react-lottie';
import animation from "../../assets/animation.json";
import { Box, Button, Typography } from "@mui/material";
import { DivnotPageStyles } from "../../styles/styles";

function ErrorPage() {

    return (
        <DivnotPageStyles>
            <Box>
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: animation,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice"
                        }
                    }}
                    height={'50vh'}
                    width={'50vh'}
                />
            </Box>

            <Typography variant="h6" gutterBottom align="center">
                ¡Ups! No encontramos la página que buscas
            </Typography>

            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    href="/"
                    style={{ backgroundColor: '#07bc7d' }}
                >
                    Ir al inicio
                </Button>
            </Box>

        </DivnotPageStyles>
    );
}

export default ErrorPage;