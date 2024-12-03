import React, { useState } from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../index.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader


function BannerPublicidad({ data }) {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    let history = useNavigate();



    const handelVerMas = (item) => {
        // console.log('item', item);
        history(`/app/menu-detalle/${item.id}`, { state: item });
    };

    const openBannerDialog = (item) => {
        console.log('item', data[item]);

    }

    return (
        <Box sx={{}}>
            {mobile ?
                <Box sx={{}}>

                    <div style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginBottom: 20,
                    }}>

                        <Carousel
                            // onChange={onChange}
                            infiniteLoop
                            autoPlay
                            showStatus={false}
                            showThumbs={false}
                            interval={5000}
                            useKeyboardArrows
                            showArrows={false}
                            dynamicHeight={false}
                            autoFocus
                            onClickItem={(item) => openBannerDialog(item)}
                        >
                            {
                                data.map((option, index) => (
                                    <div key={index}>
                                        <img
                                            src={option.imagen}
                                            alt={option.nombre}
                                            style={{
                                                width: '100%',
                                                borderRadius: 10,
                                                height: undefined,
                                                // objectFit: 'cover',
                                                aspectRatio: '1',
                                            }}
                                        />
                                    </div>

                                ))
                            }
                        </Carousel>
                    </div>

                </Box>
                :
                <Box sx={{}}>
                    <div style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginBottom: 20,
                    }}>

                        <Carousel
                            // onChange={onChange}
                            infiniteLoop
                            autoPlay
                            showStatus={false}
                            showThumbs={false}
                            interval={5000}
                            useKeyboardArrows
                            showArrows={false}
                            dynamicHeight={false}
                            autoFocus
                            onClickItem={(item) => openBannerDialog(item)}
                        >
                            {
                                data.map((option, index) => (
                                    <div key={index}>
                                        <img
                                            src={option.imagen}
                                            alt={option.nombre}
                                            style={{
                                                width: '80%',
                                                borderRadius: 10,
                                                height: 400,
                                                objectFit: 'cover',
                                                // objectFit: 'contain',
                                            }}
                                        />
                                    </div>

                                ))
                            }
                        </Carousel>
                    </div>
                </Box>
            }
        </Box>
    );
}

export default BannerPublicidad;
