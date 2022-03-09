import React from 'react'
import { buttons, containers } from 'styles'
import { colors } from 'styles/constants'

export default function EditorComposerItem(props) {
    return (
        <containers.row_wide style={{ padding: 0}}>
            <containers.col_left style={{ backgroundColor: colors.secondary_10, width: '480px', minHeight: '100px', marginBottom: '75px', borderRadius: '8px' }}>
            <containers.row_wide style={ { marginTop: '20px' } }>
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
            </containers.col_left>
        </containers.row_wide>
    )
}