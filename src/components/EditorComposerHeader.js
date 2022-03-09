import React, { useContext } from 'react'
import { MainContext } from 'stores'
import { buttons, containers, texts } from 'styles'

export default function EditorComposerHeader(props) {
    const { type, currentData } = props
    const { actions } = useContext(MainContext)
    const addNewItem = () => {
        const data = {
            ...currentData,
            [type]: [
                ...currentData[type],
                {
                    name: 'test'
                }
            ]
        }

        actions.updateConfig(data)
    }

    return (
        <containers.row_left noPadding style={{ marginBottom: '23px' }}>
            <containers.col_left>
                <texts.base as={'h3'} size={texts.sizes.title_small} weight={texts.weights.medium}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </texts.base>
            </containers.col_left>
            <containers.col_left style={{ marginLeft: '40px' }}>
                <buttons.smallSuccess onClick={addNewItem}>
                    Add
                </buttons.smallSuccess>
            </containers.col_left>
        </containers.row_left>
    )
}