import styled, { css } from 'styled-components'
import { sizes } from './constants'

const base = css`
    width: 100%;
    max-width: ${sizes.laptop};
    margin: 0 auto;
    ${props => !props.noPadding && css`
        padding: 0 1rem;
    `}
    box-sizing: border-box;
`

const col = css`
    display: flex;
    flex-direction: column;
`

const row = css`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const main = styled.div`
    ${base}
`

export const row_wide = styled.div`
    ${base}
    ${row}
    justify-content: space-between;
`

export const row_center = styled.div`
    ${base}
    ${row}
    justify-content: center;
`

export const row_left = styled.div`
    ${base}
    ${row}
    justify-content: flex-start;
`

export const row_right = styled.div`
    ${base}
    ${row}
    justify-content: flex-end;
`

export const col_center = styled.div`
    ${col}
    align-items: center;
`

export const col_left = styled.div`
    ${col}
    align-items: flex-start;
`

export const col_right = styled.div`
    ${col}
    align-items: flex-end;
`