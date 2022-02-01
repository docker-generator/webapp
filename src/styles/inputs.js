import styled, { css } from 'styled-components'
import { constants } from 'styles'

export const base = styled.input`
    width: 100%;
    max-width: ${props => props.maxWidth || '100%'};
    background: ${constants.colors.grey};
    border: none;
    padding: 0.8rem 1.4rem;
    outline: none;
    border-radius: 0.9rem;
    ${props => !props.noMargin && css`margin-bottom: 1rem;`}

    ${props => props.icon && css`
        padding-left: 2.8rem;
    `}
`