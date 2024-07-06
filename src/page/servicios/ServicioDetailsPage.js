import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import Lottie from 'react-lottie';
import animationDevelop from "../../assets/lotties/developProgramming.json";
import '../../styles/AppCss.css'
import { useLocation, useParams } from 'react-router-dom';
import ServicioDetailsComponents from "../../components/ServicioDetailsComponents";



function ServicioDetailsPage() {
    const [cargando, setCargando] = useState(false);
    const [dataDetails, setDataDetails] = useState([]);
    const [titleInfo, setTitleInfo] = useState('');

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    let { id } = useParams();
    console.log("info data", id);

    //valido si el id viene "marketing_digital", "desarrollo_sistemas", "consultoria_estrategia"



//   planesMarketingDigital
//   planesDesarrolloSistemas
//   planesConsultoriaEstrategia

    return (
        <HeaderCustom>
            <Container sx={{}} style={{}}>
                <div style={{ marginTop: 15 }}>
                    <ServicioDetailsComponents data={dataDetails} mobile={mobile} titleInfo={titleInfo}/>
                </div>
            </Container>
        </HeaderCustom>
    );
}

export default ServicioDetailsPage;