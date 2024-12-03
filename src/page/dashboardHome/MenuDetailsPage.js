import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, LinearProgress, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle } from "../../styles/styles";
import '../../styles/AppCss.css'
import { useLocation, useParams } from 'react-router-dom';
import MenuDetailsComponents from "../../components/MenuDetailsComponents";
import { getAumentarVista, postDetalleProducto } from "../../api/ApiService";



function MenuDetailsPage() {
    const [cargando, setCargando] = useState(false);
    const [dataHome, setDataHome] = useState(null);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    let { id } = useParams();
    // console.log("info data", id);

    useEffect(() => {
        handleListarProductos();
        handleAumentarVista();
    }, []);

    const handleListarProductos = () => {

        postDetalleProducto(id)
            .then((response) => {
                console.log("response-postDetalleProducto", response);
                if (response.body) {
                    setDataHome(response.body);
                    setCargando(true);
                } else {
                    setDataHome(null);
                    setCargando(true);
                }


            })
            .catch((error) => {
                console.log("error-postDetalleProducto", error);
                
                setDataHome(null);
                setCargando(true);
            });
    };

    const handleAumentarVista = () => {
        getAumentarVista(id)
            .then((response) => {
                console.log("response-getAumentarVista", response);
              


            })
            .catch((error) => {
                console.log("error-getAumentarVista", error);
            });
    };



    return (
        <HeaderCustom>
            <Container sx={{}} style={{}}>
                <div style={{ marginTop: 15 }}>
                    {dataHome !== null ? (
                        <MenuDetailsComponents data={dataHome} mobile={mobile} titleInfo={dataHome?.nombre} />
                    ) : <SkeletonLoading />
                    }
                </div>
            </Container>
        </HeaderCustom>
    );
}

export default MenuDetailsPage;