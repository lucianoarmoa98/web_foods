import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Button, CircularProgress, Container, InputAdornment, LinearProgress, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import SkeletonLoading from "../../components/SkeletonLoading";
import { BackdropStyle, TEXT_HEADER } from "../../styles/styles";
import '../../styles/AppCss.css'
import ServicioComponents from "../../components/ServicioComponents";
import SaludoBienvenida from "../../components/SaludoBienvenida";
import NosotrosComponents from "../../components/NosotrosComponents";
import MasInfoComponents from "../../components/MasInfoComponents";
import CardMenu from "../../components/CardMenu";
import { burgerOptions, friesOptions, menuOptions } from "../../constantes/constantes";
import { Search } from "@mui/icons-material";




function DashboardHome() {
    const [texto, setTexto] = useState('');
    const [cargando, setCargando] = useState(false);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));




    return (
        <HeaderCustom>
            <Container sx={{}} style={{
            }}>
                <Box sx={{ marginBottom: 2 }}>
                    {mobile ?
                        <TextField
                            id="outlined-multiline-flexible"
                            // label="Buscar en el menú"
                            placeholder="Buscar en el menú"
                            variant='outlined'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: 10,
                                    backgroundColor: '#f5f5f5',
                                }
                            }}
                            style={{
                                width: '100%',
                                borderRadius: 10,
                                backgroundColor: '#f5f5f5',
                            }}
                            focused={false}
                        />
                        :

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                            <TextField
                                id="outlined-multiline-flexible"
                                // label="Buscar en el menú"
                                placeholder="Buscar en el menú"
                                variant='outlined'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        borderRadius: 10,
                                        backgroundColor: '#f5f5f5',
                                    }
                                }}
                                style={{
                                    width: '50%',
                                    borderRadius: 10,
                                    backgroundColor: '#f5f5f5',
                                }}
                                focused={false}
                            />
                        </div>
                    }
                </Box>
            </Container>

            <CardMenu data={menuOptions} title={"Lo mas pedido"} />

            <div style={{ marginTop: 30 }} />
            <CardMenu data={burgerOptions} title={"¡Descubre Nuestras Deliciosas Hamburguesas!"} />

            <div style={{ marginTop: 30 }} />
            <CardMenu data={friesOptions} title={"Papas Fritas que Te Harán Volver por Más"} />

            <Container sx={{ marginBottom: 10 }} style={{
                //agregar linear gradient
                // backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            }}>

                {/* <NosotrosComponents /> */}

                {/* <div style={{ marginTop: 50 }}>
                    <ServicioComponents data={servicios} mobile={mobile} />
                </div> */}

                {/* <MasInfoComponents /> */}
                {/* <HabilidadesCustom data={DatasKills} mobile={mobile} /> */}
            </Container>
        </HeaderCustom>
    );
}

export default DashboardHome;