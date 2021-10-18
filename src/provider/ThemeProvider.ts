import { createTheme, makeStyles } from "@mui/material";

const MarvelTheme = createTheme({
    palette: {
        background: {
            paper: '#121212',
            default: '#121212'
        },
        mode: 'dark',
        primary: {
            main: '#BB86FC',
            light: '#DBB2FF',
            dark: '#7F39FB',
            contrastText: '#000000'
        },
        secondary: {
            main: '#03DAC5',
            light: '#70EFDE',
            dark: '#00B3A6',
            contrastText: '#000000'
        }        
    },
    typography: {
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        h1: {
            fontFamily: 'Bungee',
            fontSize:  '96px',
            fontStyle: 'light',
            fontWeight: 400,
            letterSpacing:  '-1.5px',
            textAlign: 'left'
        },
        h2: {
            fontSize: '60px',
            fontWeight: 'lighter'
        },
        h3: {
            fontSize: '48px'
        },
        h4: {
            fontSize: '34px'
        },
        body1: {
            fontSize: '16px'
        },
        body2: {
            fontSize: '14px'
        },
        button: {
            fontSize: '14px',
            fontWeight: 500
        },
        caption: {
            fontSize: '12px'
        },
        overline: {
            fontSize: '10px'
        }
    }
});

export default MarvelTheme;
