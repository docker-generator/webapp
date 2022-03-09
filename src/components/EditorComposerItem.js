import React from 'react'
import styled from 'styled-components'
import { buttons, containers } from 'styles'
import { colors } from 'styles/constants'

const styles = {
    editor_item_card: styled(containers.col_left)`
        background-color: ${colors.secondary_10};
        max-width: 480px;
        width: 100%;
        min-height: 100px;
        margin-bottom: 15px;
        border-radius: 8px;
    `,
}

export default function EditorComposerItem(props) {
    const { data, type } = props

    return (
        <containers.row_wide style={{ padding: 0}}>
            <styles.editor_item_card>
                <containers.row_wide style={{ marginTop: '20px' }}>
                    <containers.col_left>main:</containers.col_left>
                    <containers.col_right style={{ minWidth: '140px', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <buttons.smallSecondary>
                            Edit
                        </buttons.smallSecondary>
                        <buttons.smallSecondary>
                            Remove
                        </buttons.smallSecondary>
                    </containers.col_right>
                </containers.row_wide>
            </styles.editor_item_card>
        </containers.row_wide>
    )
}