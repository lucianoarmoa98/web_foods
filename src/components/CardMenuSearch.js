import React from "react";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SkeletonLoading from "./SkeletonLoading";
import '../index.css';
import { COLOR_INITIAL } from "../styles/StylesConstantes";



function CardMenuSearch({ data, title, cargando }) {

    const matchesMobile = useMediaQuery('(min-width:1200px)');

    let history = useNavigate();



    //funcion para recortar el texto, si es muy largo
    const recortarTexto = (texto, size) => {
        if (texto.length > size) {
            return texto.substring(0, size) + '...';
        } else {
            return texto;
        }
    };

    const handelVerMas = (item) => {
        // console.log('item', item);
        history(`/app/menu-detalle/${item.id}`, { state: item });
    };

    return (
        <Box sx={{}}>
            {!matchesMobile ?
                <Box sx={{ marginBottom: 20 }}>
                    {cargando ? (
                        <div>
                            <Container sx={{}} style={{}}>
                                <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: 10 }}>
                                    {title}
                                </Typography>
                            </Container>

                            <div style={{
                                display: 'flex',
                                overflowX: 'scroll',
                                scrollbarWidth: 'none', // Para Firefox
                                WebkitOverflowScrolling: 'touch' // Para iOS
                            }} className="no-scrollbar">

                                {data.length > 0 ? data.map((option, index) => (
                                    <div key={option.id} style={{
                                        border: '1px solid #ccc',
                                        borderRadius: 20,
                                        padding: 10,
                                        marginRight: 20,
                                        minWidth: 300,
                                        backgroundColor: '#fff',
                                        marginLeft: index === 0 ? 10 : 0,
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                    }}>
                                        <img src={option.imagen} alt={option.nombre} style={{
                                            width: '100%',
                                            borderRadius: 10,
                                            aspectRatio: '1',
                                        }} />
                                        <div style={{
                                            height: 150,
                                            marginTop: 10,
                                        }}>
                                            <div style={{
                                                height: 80,
                                            }}>
                                                <Typography variant="h6" style={{
                                                    fontSize: 18,
                                                    fontWeight: 'bold',
                                                }}>
                                                    {option.nombre}
                                                </Typography>
                                                <Typography variant="subtitle1" style={{
                                                    fontSize: 14,
                                                }}>
                                                    {recortarTexto(option.descripcion, 45)}
                                                </Typography>
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                height: '50%',
                                            }}>
                                                <Typography variant="subtitle1" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                                    Gs. {option.precio}
                                                </Typography>
                                                <Button variant="contained" style={{ backgroundColor: COLOR_INITIAL.NEGRO, color: '#fff', borderRadius: 10 }} onClick={() => handelVerMas(option)}>
                                                    Ver más
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 200,
                                        width: '100%',
                                    }}>
                                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                            No hay resultados
                                        </Typography>
                                    </div>
                                )}
                            </div>

                        </div>
                    ) : (
                        <Container sx={{}} style={{}}>
                            <SkeletonLoading />
                        </Container>
                    )}



                </Box>
                :
                <Box sx={{ marginBottom: 20 }}>
                    {cargando ? (
                        <Container sx={{}} style={{}}>
                            <Typography variant="h3" style={{ fontWeight: 'bold' }}>
                                {title}
                            </Typography>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                // justifyContent: 'center',
                            }}>

                                {data.length > 0 ? data.map((option, index) => (
                                    <div key={option.id} style={{
                                        // display: 'flex',
                                        // flexDirection: 'column',
                                        marginTop: 20,
                                        border: '1px solid #ccc',
                                        borderRadius: 20,
                                        padding: 10,
                                        marginRight: 20,
                                        width: 360,
                                        backgroundColor: '#fff',
                                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                        // marginBottom: 20,
                                    }}
                                        onClick={() => {
                                            // alert('click');
                                        }}
                                    >
                                        <img src={option.imagen} alt={option.nombre} style={{
                                            // width: '100%',
                                            // borderRadius: 10,
                                            // height: 200,
                                            // objectFit: 'cover',
                                            width: '100%',
                                            borderRadius: 10,
                                            aspectRatio: '1',
                                        }} />

                                        <div style={{
                                            height: 120,
                                        }}>
                                            <Typography variant="h6" style={{
                                                fontSize: 18,
                                                // marginTop: 10,
                                                fontWeight: 'bold',
                                            }}>
                                                {option.nombre}
                                            </Typography>

                                            <Typography variant="subtitle1" style={{
                                                fontSize: 14,
                                            }}>
                                                {recortarTexto(option.descripcion, 45)}
                                            </Typography>

                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                height: '50%',
                                            }}>
                                                <Typography variant="subtitle1" style={{ fontSize: 18, fontWeight: 'bold' }}>
                                                    Gs. {option.precio}
                                                </Typography>

                                                <Button variant="contained" style={{ backgroundColor: COLOR_INITIAL.NEGRO, color: '#fff', borderRadius: 10 }} onClick={() => handelVerMas(option)}>
                                                    Ver más
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 200,
                                        width: '100%',
                                    }}>
                                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                            No hay resultados
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        </Container>
                    ) : (
                        <Container sx={{}} style={{}}>
                            <SkeletonLoading />
                        </Container>
                    )}
                </Box>
            }
        </Box>
    );
}

export default CardMenuSearch;
