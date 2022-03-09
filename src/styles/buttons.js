import styled, { css } from 'styled-components';
import { colors } from './constants';

const base = css`
    padding: .9rem 1.7rem;
    border-radius: 0.5rem;
    color: ${colors.white};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    appearance: none;
    outline: none;
    border: none;
    
    & > a {
        color: ${colors.white};
    }
`

const smallBase = css`
    padding: .6rem 1rem;
    border-radius: 0.5rem;
    color: ${colors.white};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    appearance: none;
    outline: none;
    border: none;
    
    & > a {
        color: ${colors.white};
    }
`

const invertedBase = css`
    padding: .9rem 1.7rem;
    border-radius: 0.5rem;
    color: ${colors.black};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    appearance: none;
    outline: none;
    border: none;
    
    & > a {
        color: ${colors.black};
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

const successBase = css`
    background: ${props => props.variant ? colors[`green`] : colors.green};

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

export const smallPrimary = styled.div`
    ${smallBase}
    ${primaryBase}
`

export const secondary = styled.div`
    ${base}
    ${secondaryBase}
`

export const smallSecondary = styled.div`
    ${smallBase}
    ${secondaryBase}
`

export const success = styled.div`
    ${base}
    ${successBase}
`

export const smallSuccess = styled.div`
    ${smallBase}
    ${successBase}
`

export const white = styled.div`
    ${base}
    ${invertedBase}
`
