import React, { useState, useContext, useEffect } from 'react'
import { MainContext } from 'stores'
import { EditorComposerForm } from 'components'
import styled from 'styled-components'
import { capitalizeFirstLetter } from 'helpers'
import { buttons, containers, texts } from 'styles'
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

function getFormFromType(type, data) {
    if (type === 'services') {
        return {
            name: data.name,
            image: data.image,
            ports: data.ports,
            volumes: data.volumes,
            links: data.links,
            networks: data.networks,
        }
    } else {
        return {
            content: data.content,
        }
    }
}

export default function EditorComposerItem(props) {
    const { actions } = useContext(MainContext)
    const { data, configId, type } = props

    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState(getFormFromType(type, data))

    useEffect(() => {
        setFormData(getFormFromType(type, data))
    }, [data, configId, type])

    return (
        <containers.row_wide style={{ padding: 0 }}>
            <styles.editor_item_card>
                <containers.row_wide style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <containers.col_left>
                        {!isEditing ? (
                            Object.keys(formData).map((key, i) => {
                                if (typeof formData[key] === 'string') {
                                    return <texts.base key={i}>{`${capitalizeFirstLetter(key)}: ${formData[key]}`}</texts.base>
                                } else {
                                    return <texts.base key={i}>{`${capitalizeFirstLetter(key)}: ${formData[key].join(', ')}`}</texts.base>
                                }
                            })
                        ) : (
                            <EditorComposerForm
                                type={type}
                                configId={configId}
                                formData={formData}
                                setFormData={setFormData}
                            />
                        )}
                    </containers.col_left>

                    <containers.col_right style={{ minWidth: '140px', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <buttons.smallSecondary onClick={() => {
                            if (isEditing) actions.updateConfigData(configId, type, { ...formData, id: data.id })
                            setIsEditing(!isEditing)
                        }}>
                            {isEditing ? 'Save' : 'Edit'}
                        </buttons.smallSecondary>
                        {!isEditing && (
                            <buttons.smallSecondary onClick={() => actions.deleteConfigData(configId, type, data.id)}>
                                Remove
                            </buttons.smallSecondary>
                        )}
                    </containers.col_right>
                </containers.row_wide>
            </styles.editor_item_card>
        </containers.row_wide>
    )
}