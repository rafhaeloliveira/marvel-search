import { OpenInNew } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography, TypographyProps } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import EllipsedTypography from "../typography/EllipsedTypography";

interface HeroCardProps {
    name?: string
}

const HeroCard: FC<HeroCardProps> = props => {
    return (
        <Card sx={{ display: 'flex', maxWidth: 400, flexDirection: 'row' }}>
            <CardMedia height="150" image="https://pbs.twimg.com/profile_images/1094413755637735425/wnAwaeXh_400x400.jpg" component="img" alt="Miranha" />
            <CardContent component="div" sx={{ width: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <EllipsedTypography
                    variant="h1"
                    fontSize="16px"
                    lineClamp="1"
                >
                    Miranha no miranha-verso
                </EllipsedTypography>
                <EllipsedTypography
                    variant="body1"
                    fontSize="14px"
                    lineClamp="3"                 
                >
                    Miranha é um cara bem legal, pena que não pode ver a Mary Jane! Leiê, Leiê, Leiê, Leiê, Leiê, Leiê, Leiê, Leiê, Leiê!
                </EllipsedTypography>
                <Button sx={{ marginLeft: 'auto' }} size="small" endIcon={<OpenInNew />} component={Link} to="/miranha">Ver mais</Button>
            </CardContent>
        </Card>
    )
}

export default HeroCard
