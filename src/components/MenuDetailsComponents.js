import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { COLOR_INITIAL } from "../styles/StylesConstantes";



function MenuDetailsComponents({ data, mobile, titleInfo }) {
    const [imageSelected, setImageSelected] = useState(0);

    const matchesMobile = useMediaQuery('(min-width:1200px)');


    let history = useNavigate();


    //si hay imagenes, se selecciona la primera por defecto
    useEffect(() => {
        if (data !== null) {
            setImageSelected(0);
        } else {
            history('/');
        }
    }, [data]);

    const handleImageSelected = (index) => {
        setImageSelected(index);
    }



    return (
        <Box>
            {!matchesMobile ?
                <Box sx={{ marginBottom: 5 }} >
                    <img
                        //si no hay imagenes, se muestra una imagen por defecto
                        src={data?.imagenesPublicaciones[imageSelected]?.imagen ? data?.imagenesPublicaciones[imageSelected]?.imagen : data?.imagen}
                        alt={data?.categoria}
                        style={{
                            width: '100%',
                            // height: 350,
                            borderRadius: 15,
                            // objectFit: 'cover',
                            aspectRatio: '1',

                        }}
                    />

                    {
                        data.imagenesPublicaciones && data.imagenesPublicaciones.length > 1 &&
                        <Box sx={{
                            // marginTop: 3,
                            display: 'flex',
                            flexWrap: 'wrap',
                            // justifyContent: 'flex-start'
                        }}
                        >
                            {
                                data.imagenesPublicaciones && data.imagenesPublicaciones.map((item, index) => {
                                    return (
                                        <Box key={index} sx={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 5,
                                            marginLeft: index === 0 ? 0 : 2,
                                            marginTop: 2,
                                        }}>
                                            <Box sx={{
                                                width: '100%',
                                                height: '100%',
                                                //agregar cursor pointer
                                                cursor: 'pointer',
                                            }}
                                                onClick={() => handleImageSelected(index)}
                                            >
                                                <img
                                                    src={item?.imagen}
                                                    alt={item}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        borderRadius: 5,
                                                        objectFit: 'cover',

                                                    }} />
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                    }

                    <div style={{ marginTop: 10 }}>
                        <Typography
                            variant={"h4"}
                            style={{ fontWeight: 'bold' }}
                            color={COLOR_INITIAL.NEGRO}
                        >
                            {titleInfo}
                        </Typography>


                        <Typography variant={"body1"} color={COLOR_INITIAL.COLOR_BACKGROUND_GRIS}>
                            {data?.descripcion}
                        </Typography>

                        <div style={{ marginTop: 10 }}>
                            <Typography variant={"h4"} color={COLOR_INITIAL.NEGRO} sx={{ fontWeight: 'bold' }} >
                                Gs. {data?.precio}
                            </Typography>
                        </div>
                    </div>
                </Box>

                :
                <Box sx={{}}>
                    <Box sx={{
                        display: 'flex',
                    }}>
                        <div style={{}}>
                            <img
                                //si no hay imagenes, se muestra una imagen por defecto
                                src={data?.imagenesPublicaciones[imageSelected]?.imagen ? data?.imagenesPublicaciones[imageSelected]?.imagen : data?.imagen}
                                alt={data?.categoria}
                                style={{
                                    width: 500,
                                    height: 500,
                                    borderRadius: 25,
                                    objectFit: 'cover',

                                }}
                            />
                            <Box sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}
                            >
                                {
                                    data.imagenesPublicaciones && data.imagenesPublicaciones.map((item, index) => {
                                        return (
                                            <Box key={index} sx={{
                                                width: 70,
                                                height: 70,
                                                borderRadius: 5,
                                                //dar marginLeft desde la segunda imagen
                                                marginLeft: index === 0 ? 0 : 5,
                                            }}>
                                                <Box sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    //agregar cursor pointer
                                                    cursor: 'pointer',
                                                }}
                                                    onClick={() => handleImageSelected(index)}
                                                >
                                                    <img
                                                        src={item?.imagen}
                                                        alt={item}
                                                        style={{
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: 5,
                                                            objectFit: 'cover',

                                                        }} />
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>


                        </div>

                        <div style={{
                            // marginLeft: 20,
                            width: '100%',
                            paddingLeft: 20,
                        }}>
                            <Typography
                                variant={mobile ? "h4" : "h3"}
                                style={{ fontWeight: 'bold' }}
                            >
                                {titleInfo}
                            </Typography>


                            <Typography variant={"h6"} color={COLOR_INITIAL.COLOR_BACKGROUND_GRIS}>
                                {data?.descripcion}
                            </Typography>

                            <Typography variant={"h4"} color={COLOR_INITIAL.NEGRO} sx={{ fontWeight: 'bold' }} >
                                Gs. {data?.precio}
                            </Typography>
                        </div>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default MenuDetailsComponents;