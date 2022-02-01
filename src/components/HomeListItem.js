import React from 'react'
import styled from 'styled-components'
import { constants, texts, buttons } from 'styles'

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 70px;
    width: 100%;
    background-color: ${constants.colors.secondary_10};
    border-radius: 0.57rem;
    margin-bottom: 1rem;
`

const ItemInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
`

const ItemButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100%;

    & > * {
        margin-right: 1rem;
    }
`

export default function HomeListItem(props) {
    const { id, title, description } = props

    return (
        <ItemContainer>
            <ItemInfos>
                <texts.base>{title}</texts.base>
                <texts.base size={texts.sizes.small}>{description}</texts.base>
            </ItemInfos>
            <ItemButtons>
                <buttons.primary>Download</buttons.primary>
                <buttons.secondaryLink to={`/edit/${id}`}>
                    Edit
                </buttons.secondaryLink>
            </ItemButtons>
        </ItemContainer>
    )
}