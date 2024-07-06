import React, { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LinkedIn, WhatsApp } from "@mui/icons-material";
import { COLOR_BACKGROUND_VERDER_AGUA } from "../styles/styles";


const Footers = ({ handlePhoneWhatsApp }) => {

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            {mobile ? <FootersMobile /> : <FootersWeb handlePhoneWhatsApp={handlePhoneWhatsApp} />}
        </div>
    );
}

export default Footers;


const FootersMobile = () => {

    return (
        <footer style={{
            flexShrink: 0,
            padding: '10px 0',
            backgroundColor: '#f2f7fb',
        }}>
            <Typography variant="caption" display="block" gutterBottom align="center">
                © 2024 Incentiva Groups. Todos los derechos reservados.
            </Typography>
        </footer>
    );
}

const FootersWeb = ({ handlePhoneWhatsApp }) => {
    return (
        <footer style={{
            position: 'absolute',
            width: '100%',
            backgroundColor: '#f2f7fb',
            borderTop: '0.1px solid #e0e0e0',
            padding: '10px 0'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px'
            }}>
                <div>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        color="secondary"
                        onClick={() => handlePhoneWhatsApp()}
                    >
                        {/*agregar icono de whatsapp*/}
                        <WhatsApp style={{ color: COLOR_BACKGROUND_VERDER_AGUA }} />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    // onClick={handleUrlInstagram}
                    // style={{ marginLeft: 10 }}
                    >
                        {/*agregar icono de linkedin*/}
                        <LinkedIn style={{ color: '#0077b5' }} />
                    </IconButton>
                </div>



                <Typography variant="caption" display="block" gutterBottom>
                    © 2024 Incentiva Groups. Todos los derechos reservados.
                </Typography>
            </div>


        </footer>
    )
}
