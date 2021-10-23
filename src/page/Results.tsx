import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import BackToSearchButton from "../components/buttons/BackToSearchButton";

const Results: FC = () => {
    return (
        <Grid
            container
            height="100%"
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item>
                <BackToSearchButton />
            </Grid>
            <Grid item>
               <Typography variant="h1" color="#FFF">Resultados</Typography>
            </Grid>
        </Grid>
    )
}

export default Results;
