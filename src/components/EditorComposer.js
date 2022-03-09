import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { MainContext } from 'stores'
import { containers, texts } from 'styles'
import ic_pencil_edit from 'assets/images/ic-pencil-edit.svg'
import { EditorComposerItem, EditorComposerHeader } from 'components'

const styles = {
    edit_button: styled.div`
        cursor: pointer;
        margin: 6px 0 0 10px;
    `,
    edit_icon: styled.img`
        width: 20px;
        height: 20px;
        object-fit: contain;
    `,
}

export default function EditorComposer() {
    const { id } = useParams()
    const { state } = useContext(MainContext)
    const [currentData, setCurrentData] = useState(state.data.find(data => data.id === id))

    useEffect(() => {
        setCurrentData(state.data.find(data => data.id === id))
    }, [state.data, id])

    return (
        <containers.col_left style={{ width: '50%', height: '90vh' }}>
            <containers.col_left style={{ flexDirection: 'row' }}>
                <texts.base as={'h1'} size={texts.sizes.title_regular} weight={texts.weights.bold} style={{ marginBottom: '60px' }}>
                    {currentData.title}
                </texts.base>
                <styles.edit_button>
                    <styles.edit_icon src={ic_pencil_edit} alt='Rename' />
                </styles.edit_button>
            </containers.col_left>

            <EditorComposerHeader type={'services'} currentData={currentData} />

            {currentData.services.map((data, index) => {
                return <EditorComposerItem key={index} data={data} type="service" />
            })}

            <EditorComposerHeader type={'volumes'} currentData={currentData} />

            {currentData.volumes.map((data, index) => {
                return <EditorComposerItem key={index} data={data} type="volumes" />
            })}
        </containers.col_left>
    )
}