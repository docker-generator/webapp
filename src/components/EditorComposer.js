import React from 'react'
import { buttons, containers, texts } from 'styles'
import ic_pencil_edit from 'assets/images/ic-pencil-edit.svg'
import { EditorComposerItem } from 'components'

export default function EditorComposer(props) {
    const { data } = props

    return (
        <containers.col_left style={ { width: '50%', height: '90vh' } }>
            <containers.col_left style={{flexDirection: 'row'}}>
                <texts.base as={ 'h1' } size={ texts.sizes.title_regular } weight={ texts.weights.bold } style={ { marginBottom: '60px' } }>
                    { data.title }
                </texts.base>
                <a href='#' style={{margin: '6px 0 0 10px'}}><img src={ic_pencil_edit} alt='Rename' style={{height: '20px'}} /></a>
            </containers.col_left>

            <containers.row_left className='network_container' noPadding style={ { marginBottom: '23px' } }>
                <containers.col_left>
                <texts.base as={ 'h3' } size={ texts.sizes.title_small } weight={ texts.weights.medium }>
                    Network
                </texts.base>
                </containers.col_left>
                <containers.col_left style={ { marginLeft: '40px' } }>
                <buttons.smallSuccess>
                    Add
                </buttons.smallSuccess>
                </containers.col_left>
            </containers.row_left>

            {/* EditorComposerItem list */}

            <containers.row_left className='docker_container' noPadding style={ { marginBottom: '23px' } }>
                <containers.col_left>
                <texts.base as={ 'h3' } size={ texts.sizes.title_small } weight={ texts.weights.medium }>
                    Containers
                </texts.base>
                </containers.col_left>
                <containers.col_left style={ { marginLeft: '40px' } }>
                <buttons.smallSuccess>
                    Add
                </buttons.smallSuccess>
                </containers.col_left>
            </containers.row_left>

            {/* EditorComposerItem list */}
        </containers.col_left>
    )
}