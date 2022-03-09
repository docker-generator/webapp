import React from 'react'
import { buttons, containers } from 'styles'
import { colors } from 'styles/constants'

export default function EditorPreview(props) {
    return (
        <containers.col_right style={ { width: '50%', height: '90vh', backgroundColor: colors.secondary_20, borderRadius: '8px' } }>
          <containers.row_center noPadding style={ { marginBottom: '15px' } }>
            <containers.col_center style={ { padding: '25px', margin: '20px', color: 'white', boxSizing: 'border-box', width: '93%', minHeight: '680px', backgroundColor: '#626262', borderRadius: '8px' } }>
              <p>Yaml content here</p>
            </containers.col_center>
          </containers.row_center>
          <containers.row_left noPadding style={ { backgroundColor: colors.primary_70, height: '100%', borderRadius: '8px' } }>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.white style={{background: 'white'}}>Download</buttons.white>
            </containers.col_left>
            <containers.col_left style={ { marginLeft: '40px' } }>
              <buttons.white style={{background: 'white'}}>Save</buttons.white>
            </containers.col_left>
          </containers.row_left>
        </containers.col_right>
    )
}