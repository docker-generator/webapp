import styled, { css } from 'styled-components';
import { colors } from './constants';

export const sizes = {
    small: '0.8rem',
    regular: '1rem',
    medium: '1.25rem',
    title_small: '1.563rem',
    title_regular: '1.953rem',
    title_big: '2.441rem',
}

export const weights = {
    regular: '400',
    medium: '500',
    bold: '700',
}

export const base = styled.p`
    font-size: ${props => props.size ? sizes[props.size] : sizes.regular};
    font-weight: ${props => props.weight ? weights[props.weight] : weights.regular};
    color: ${props => props.color ? props.color : colors.black};
    margin: 0;
    padding: 0;

    ${props => props.center && css`text-align: center;`}
    ${props => props.styles && css`${props.styles}`}
`