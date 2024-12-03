import React, { useEffect, useState } from "react";
import HeaderCustom from "../../components/HeaderCustom";
import { Box, Container, InputAdornment, TextField, useMediaQuery, useTheme } from "@mui/material";
import '../../styles/AppCss.css'
import CardMenu from "../../components/CardMenu";
import { Search } from "@mui/icons-material";
import BannerPublicidad from "../../components/BannerPublicidad";
import { getBanners, postProductosNombre } from "../../api/ApiService";
import CardMenuSearch from "../../components/CardMenuSearch";




function DashboardHome() {
    const [dataBanner, setDataBanner] = useState([]);
    const [viewSeacrh, setViewSearch] = useState(false);
    const [textSearch, setTextSearch] = useState('');
    const [dataHome, setDataHome] = useState([]);
    const [cargando, setCargando] = useState(false);

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));


    useEffect(() => {
        handleListarBanners();
    }, []);

    const handleListarBanners = () => {

        getBanners()
            .then((response) => {
                console.log("response-getBanners", response);
                if (response.body.length > 0) {
                    setDataBanner(response.body);
                } else {
                    setDataBanner([]);
                }


            })
            .catch((error) => {
                console.log("error-getBanners", error);
                setDataBanner([]);
            });
    };

    const handleListarProductos = () => {
        let body = {
            nombre: textSearch
        };

        postProductosNombre(body, 1, 10)
            .then((response) => {
                console.log("response-postProductosNombre", response);
                if (response.body.length > 0) {
                    setDataHome(response.body);
                    setCargando(true);
                } else {
                    setDataHome([]);
                    setCargando(true);
                }


            })
            .catch((error) => {
                setDataHome([]);
                setCargando(true);
                console.log("error-postProductosNombre", error);
            });
    };

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
                            onChange={(e) => {
                                setTextSearch(e.target.value);
                            }}
                            value={textSearch}
                            //detecta el enter
                            onKeyDown={(ev) => {
                                console.log(`Pressed keyCode ${ev.key}`);
                                if (ev.key === 'Enter') {
                                    handleListarProductos();
                                    setViewSearch(true);
                                }
                            }}
                        />
                        :

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                            <TextField
                                id="outlined-multiline-flexible"
                                // label="Buscar en el menú"
                                placeholder="Buscar en el menú"
                                onChange={(e) => {
                                    setTextSearch(e.target.value);
                                }}
                                value={textSearch}
                                //detecta el enter
                                onKeyDown={(ev) => {
                                    console.log(`Pressed keyCode ${ev.key}`);
                                    if (ev.key === 'Enter') {
                                        handleListarProductos();
                                        setViewSearch(true);
                                    }
                                }}
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

            {!viewSeacrh &&
                <div>
                    {dataBanner.length > 0 &&
                        <BannerPublicidad data={dataBanner} />
                    }

                    <CardMenu title={"Lo mas pedido"} busqueda={"papas"} />

                    <div style={{ marginTop: 30 }} />
                    <CardMenu title={"¡Descubre Nuestras Deliciosos Lomitos!"} busqueda={"lomito"} />

                    <div style={{ marginTop: 30 }} />
                    <CardMenu title={"Hamburguesas que Te Harán Volver por Más"} busqueda={"hamburguesa"} />
                    <div style={{ marginTop: 30 }} />
                </div>
            }

            {viewSeacrh &&
                <div>
                    <CardMenuSearch title={"Resultado de la busqueda"} data={dataHome} cargando={cargando}/>
                </div>
            }


            {/* <Container sx={{ marginBottom: 10 }} style={{
                //agregar linear gradient
                // backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            }}>

                <NosotrosComponents />

                <div style={{ marginTop: 50 }}>
                    <ServicioComponents data={servicios} mobile={mobile} />
                </div>

                <MasInfoComponents />
                <HabilidadesCustom data={DatasKills} mobile={mobile} />
            </Container> */}
        </HeaderCustom>
    );
}

export default DashboardHome;