import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from './constants';

const base = css`
    padding: 1rem 1.7rem;
    border-radius: 0.5rem;
    color: ${colors.white};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    
    & > a {
        color: ${colors.white};
    }
`

const primaryBase = css`
    background: ${props => props.variant ? colors[`primary_${props.variant}`] : colors.primary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background: ${colors.primary_30};
        pointer-events: none;
    `}

    ${props => !props.disabled && css`
        &:hover {
            background: ${props => (
                (props.variant ? 
                    props.variant > 30 ?
                        colors[`primary_${props.variant - 30}`]
                    :
                        colors[`primary_${props.variant + 30}`]
                :
                    colors.primary_70
                )
            )};
        }
    `}
`

const secondaryBase = css`
    background: ${props => props.variant ? colors[`secondary_${props.variant}`] : colors.secondary};

    ${props => props.disabled && css`
        cursor: not-allowed;
        background: ${colors.secondary_30};
        pointer-events: none;
    `}

    ${props => !props.disabled && css`
        &:hover {
            background: ${props => (
                (props.variant ? 
                    props.variant > 30 ?
                        colors[`secondary_${props.variant - 30}`]
                    :
                        colors[`secondary_${props.variant + 30}`]
                :
                    colors.secondary_70
                )
            )};
        }
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