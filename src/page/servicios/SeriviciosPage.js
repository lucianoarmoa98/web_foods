import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import { DatasKills, ExperienciaLaboral, MessageDev, servicios } from "../../constantes/constantes";
import Lottie from 'react-lottie';
import animationDevelop from "../../assets/lotties/developProgramming.json";
import '../../styles/AppCss.css'
import HabilidadesCustom from "../../components/HabilidadesCustom";
import ServicioComponents from "../../components/ServicioComponents";
import SaludoBienvenida from "../../components/SaludoBienvenida";
import NosotrosComponents from "../../components/NosotrosComponents";
import MasInfoComponents from "../../components/MasInfoComponents";




function SeriviciosPage() {
    const [texto, setTexto] = useState('');
    const [cargando, setCargando] = useState(false);

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
        <HeaderCustom>
            <Container sx={{}} style={{}}>
                <div style={{
                    // marginTop: 15,
                    height: mobile ? 'auto' : '100vh',
                }}>
                    <ServicioComponents data={servicios} mobile={mobile} />
                </div>
            </Container>
        </HeaderCustom>
    );
}

export default SeriviciosPage;