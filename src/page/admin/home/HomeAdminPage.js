import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../../components/HeaderCustom";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../../components/SkeletonLoading";
import { BackdropStyle } from "../../../styles/styles";
import { servicios } from "../../../constantes/constantes";
import Lottie from 'react-lottie';
import '../../../styles/AppCss.css'
import ServicioComponents from "../../../components/ServicioComponents";




function HomeAdminPage() {
    const [texto, setTexto] = useState('');
    const [cargando, setCargando] = useState(false);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));




    return (
        <HeaderCustom>
            <Container sx={{}} style={{}}>
                <div style={{
                    // marginTop: 15,
                    // height: mobile ? 'auto' : '100vh',
                }}>
                    <ServicioComponents data={servicios} mobile={mobile} />
                </div>
            </Container>
        </HeaderCustom>
    );
}

export default HomeAdminPage;