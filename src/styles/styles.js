import { Backdrop, TextField, Typography, styled } from "@mui/material";
// import fontTitle from '../../src/assets/fonts/Poppins-Regular.ttf';
import { brown } from "@mui/material/colors";

export const COLOR_BACKGROUND_VERDER_AGUA = '#48c590';
export const COLOR_BACKGROUND_BLANCO = "#ffffff";
export const COLOR_BACKGROUND_VERDE_CLARO = "#e2f7ed";
export const COLOR_BACKGROUND_AZUL_CLARO = "#4962c7";
export const COLOR_BACKGROUND_GRIS = "#ebeef1";
export const COLOR_BACKGROUND_GRIS_OSCURO = "#c1c1c1";
export const TEXT_HEADER = "#008001";//#262626
export const ICON_COLOR_BLACK = "#0d1217";

let altoPantalla = window.innerHeight;

//---------------------------------------------Estilo para page 404
// export const notPageStyles = makeStyles(theme => ({
//     root: {
//         // height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// }));


export const DivnotPageStyles = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

//-----------------------------contenedor de color
export const CssTextField = styled(TextField)({


    '& .MuiOutlinedInput-root': {
        "&.Mui-focused fieldset": {
            // borderColor: brown[600],
            borderColor: COLOR_BACKGROUND_VERDER_AGUA,
        },
        '&:hover fieldset': {
            // borderColor: brown[600],
            borderColor: COLOR_BACKGROUND_VERDER_AGUA,
        },
    },
    //agregar color al label
    '& .MuiInputLabel-outlined': {
        color: COLOR_BACKGROUND_GRIS_OSCURO,
    },
});

//--------------------------------------estilo de Backdrop
export const BackdropStyle = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
}));

//-----------------------------------------estilo de Drawer
export const DrawerHeader = styled('div')(({ theme }) => ({
    // display: 'flex',
    // alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
}));
