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
    const types = ['services', 'networks']
    const { id } = useParams()
    const { state, actions } = useContext(MainContext)

    const [currentData, setCurrentData] = useState(state.data.find(data => data.id === id))
    const [editTitle, setEditTitle] = useState({
        value: currentData.title,
        isEditing: false,
    })

    useEffect(() => {
        setCurrentData(state.data.find(data => data.id === id))
    }, [state.data, id])

    const saveTitle = () => {
        const data = { ...currentData, title: editTitle.value }
        actions.updateConfig(data)
    }

    return (
        <containers.col_left style={{ width: '50%', height: '90vh' }}>
            <containers.col_left style={{ flexDirection: 'row' }}>
                {editTitle.isEditing ? (
                    <texts.base
                        as={'input'}
                        size={texts.sizes.title_regular}
                        weight={texts.weights.bold}
                        style={{ marginBottom: '60px' }}
                        value={editTitle.value}
                        onChange={(e) => setEditTitle({ value: e.target.value, isEditing: true })}
                    />
                ) : (
                    <texts.base as={'h2'} size={texts.sizes.title_regular} weight={texts.weights.bold} style={{ marginBottom: '60px' }}>
                        {currentData.title}
                    </texts.base>
                )}
                <styles.edit_button
                    onClick={() => {
                        if (editTitle.isEditing) saveTitle()
                        setEditTitle({ ...editTitle, isEditing: !editTitle.isEditing })
                    }}
                >
                    <styles.edit_icon src={ic_pencil_edit} alt='Rename' />
                </styles.edit_button>
            </containers.col_left>

            {types.map((type, i) => (
                <React.Fragment key={i}>
                    <EditorComposerHeader type={type} currentData={currentData} />
                    {currentData[type].map((data, index) => {
                        return <EditorComposerItem key={index} data={data} configId={currentData.id} type={type} />
                    })}
                </React.Fragment>
            ))}
        </containers.col_left>
    )
}