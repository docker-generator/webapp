import styled, { css } from "styled-components";
import { colors } from './constants';

const base = css`
    padding: 1rem 1.7rem;
    border-radius: 0.5rem;
    color: ${colors.white};
    cursor: pointer;
`

export const primary = styled.div`
    ${base}
    background-color: ${props => props.variant ? colors[`primary_${props.variant}`] : colors.primary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background-color: ${colors.primary_30};
    `}
`

export const secondary = styled.div`
    ${base}
    background-color: ${props => props.variant ? colors[`secondary_${props.variant}`] : colors.secondary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background-color: ${colors.secondary_30};
    `}
`