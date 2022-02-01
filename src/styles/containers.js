import styled, { css } from 'styled-components'
import { sizes } from './constants'

export const main = styled.div`
    max-width: ${sizes.laptop};
    margin: 0 auto;
    padding: 0 1rem;

    ${props => props.styles && css`${props.styles}`}
`