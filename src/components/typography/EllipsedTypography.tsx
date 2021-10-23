import { Typography, TypographyProps } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

interface EllipsedTypographyProps extends TypographyProps {
    lineClamp?: string
}

const EllipsedTypography: FC<EllipsedTypographyProps> = styled<FC<EllipsedTypographyProps>>(Typography)`
    && {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${props => props.lineClamp ? props.lineClamp : 1};
    }
`

export default EllipsedTypography; 
