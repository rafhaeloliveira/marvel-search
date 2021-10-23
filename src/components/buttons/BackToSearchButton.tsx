import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BackToSearchButton = styled(props => (
    <Button {...props} endIcon={<Search />} component={Link} to="/">
        Voltar para a busca
    </Button>
))`
    && {
        font-family: var(--font-family-bungee);
        color: #FFFFFF;
    }
`

export default BackToSearchButton
