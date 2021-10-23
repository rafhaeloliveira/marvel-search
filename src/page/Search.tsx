import { Search as SearchIcon } from "@mui/icons-material";
import { Button, Grid, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";

import { makeStyles  } from '@mui/styles';

// Image
import Background from './../assets/imgs/background.png';
import { useTheme } from "@emotion/react";
import { Theme } from "@mui/system";

const useStyles = makeStyles({
    container: (props: any) => ({
        background: `url(${Background})`,
        [props.breakpoints.down('768')]: {
            backgroundPosition: '52% 0',
            backgroundSize: 'auto 120%'
        }
    }),
    paper: {
        '&&': {
            padding: 40,
            opacity: '0.8',
        }
    },
    inputLabelNoShrink: {
        backgroundColor: 'transparent',
        '& .MuiFilledInput-root, & .MuiOutlinedInput-root' : {
            backgroundColor: (props: any) => props.palette.background.default + ' !important'
        },
        '& .MuiInputLabel-root': {
            width: 'calc(100% - 50px)',
            marginLeft: '30px'
        },
        '& .MuiInputLabel-shrink': {
            width: '100%',
            marginLeft: '0'
        }
    }
})

const Search: FC = () => {
    const [name, setName] = useState();

    const theme = useTheme()
    const classes = useStyles(theme)

    const handleName = (element: any) => {
        const { value } = element.target

        setName(value)
    }

    return (
        <Grid 
            container 
            height="100%" 
            display="flex"
            direction="column" 
            justifyContent="center" 
            alignItems="center"
            sx={{
                background: `url(${Background})`,
                backgroundSize: {
                    xs: 'auto 100%',
                    md: 'cover'
                },
                backgroundPosition: {
                    xs: '52% 15%',
                    md: 'initial'
                },
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Typography variant="h1" color="rgba(255, 255, 255, 0.87)">MYSUPERHERO</Typography>
            <Paper 
                elevation={2} 
                sx={{
                    width: {
                        xs: 'calc(100% - 10px)',
                        md: '400px'
                    },
                    p: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'transparent',
                    mt: {
                        xs: '70%',
                        md: 0
                    },
                    ":before": {
                        content: '""',
                        backgroundColor: (theme: Theme) => theme.palette.background.default,
                        opacity: '0.8',
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    }
                }}
            >
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Digite o nome do personagem"
                            variant="outlined"
                            className={classes.inputLabelNoShrink}
                            InputLabelProps={{ shrink: Boolean(name) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )                        
                            }}
                            onChange={handleName}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" fullWidth>Buscar</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Search
