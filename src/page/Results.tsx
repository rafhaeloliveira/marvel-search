import { Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import BackToSearchButton from "../components/buttons/BackToSearchButton";
import HeroCard from "../components/cards/HeroCard";

const Results: FC = () => {
    const heroList = ['', '', '', '','', '','', '','', '','', '','', '']

    console.log('heroList =>', heroList)

    return (
        <Grid
            container
            height="100%"
            display="flex"
            direction="column"
        >
            <Grid item height="52px" p={1}>
                <BackToSearchButton />
            </Grid>
            <Grid 
                item
                container
                height="calc(100% - 52px)"
                p={2}
                sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
                spacing={2}
            >
                {heroList.map(hero => {
                    return (
                        <Grid item>
                            <HeroCard name="Miranha" />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Results;
