import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from './constants';

const base = css`
    padding: 1rem 1.7rem;
    border-radius: 0.5rem;
    color: ${colors.white};
    cursor: pointer;
    
    & > a {
        color: ${colors.white};
    }
`

const primaryBase = css`
    background-color: ${props => props.variant ? colors[`primary_${props.variant}`] : colors.primary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background-color: ${colors.primary_30};
    `}
`

const secondaryBase = css`
    background-color: ${props => props.variant ? colors[`secondary_${props.variant}`] : colors.secondary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background-color: ${colors.secondary_30};
    `}
`

export const primary = styled.div`
    ${base}
    ${primaryBase}   
`

export const secondary = styled.div`
    ${base}
    ${secondaryBase}
`

export const primaryLink = styled(Link)`
    ${base}
    ${primaryBase}
`

export const secondaryLink = styled(Link)`
    ${base}
    ${secondaryBase}
`