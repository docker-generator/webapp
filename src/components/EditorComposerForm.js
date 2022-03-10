import React, { useContext, useState } from 'react'
import { MainContext } from 'stores'
import { inputs, containers, texts, buttons } from 'styles'
import { capitalizeFirstLetter } from 'helpers'
import ic_trash from 'assets/images/ic-trash.png'

function convertToForm(type, data) {
    if (type === 'services') {
        return [
            {
                type: 'text_string',
                name: 'name',
                label: 'Service name',
                value: data.name,
            },
            {
                type: 'text_string',
                name: 'image',
                label: 'Image name',
                value: data.image,
            },
            {
                type: 'text_list',
                name: 'ports',
                label: 'Ports',
                value: data.ports,
            },
            {
                type: 'text_list',
                name: 'volumes',
                label: 'Volumes',
                value: data.volumes,
            },
            {
                type: 'text_list',
                name: 'links',
                label: 'Links',
                value: data.links,
            },
            {
                type: 'select_from',
                name: 'networks',
                key: 'networks',
                label: 'Networks',
                value: data.networks,
            }
        ]
    } else {
        return [
            {
                type: 'text_string',
                name: 'content',
                label: 'Networks',
                value: data.content,
            }
        ]
    }
}

export default function EditorComposerForm(props) {
    const { type, configId, formData, setFormData } = props
    const { state, actions } = useContext(MainContext)
    const [form, setForm] = useState(convertToForm(type, formData))

    const currentConfig = state.data.find(config => config.id === configId)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(form.map(item => {
            if (item.name === name) {
                return { ...item, value }
            }
            return item
        }))
        setFormData({ ...formData, [name]: value })
    }

    const handleCheckbox = (e, data, index) => {
        const { checked } = e.target

        setForm(form.map((item, i) => {
            if (item.key === 'networks') {
                if (checked) {
                    item.value.push(data)
                    return { ...item }
                } else {
                    item.value.splice(index, 1)
                    return { ...item }
                }
            }
            return item
        }))
        setFormData({ ...formData })
    }

    const editTextList = (key, index, data) => {
        setForm(form.map(item => {
            if (item.name === key) {
                item.value[index] = data
                return { ...item }
            }
            return item
        }))
        setFormData({ ...formData })
    }

    const addToTextList = (key) => {
        setForm(form.map(item => {
            if (item.name === key) {
                item.value.push('')
                return { ...item }
            }
            return item
        }))
        setFormData({ ...formData })
    }

    const deleteFromTextList = (key, index) => {
        setForm(form.map(item => {
            if (item.name === key) {
                item.value.splice(index, 1)
                return { ...item }
            }
            return item
        }))
        setFormData({ ...formData })
    }

    return form.map((item, i) => {
        if (item.type === 'text_string') {
            return (
                <inputs.base
                    key={i}
                    type={'text'}
                    name={item.name}
                    placeholder={item.label}
                    value={item.value}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        maxWidth: '375px',
                    }}
                />
            )
        } else if (item.type === 'text_list') {
            return (
                <React.Fragment key={i}>
                    <containers.row_left noPadding style={{ marginBottom: '23px' }}>
                        <containers.col_left>
                            <texts.base size={texts.sizes.regular} weight={texts.weights.medium}>
                                {capitalizeFirstLetter(item.label)}
                            </texts.base>
                        </containers.col_left>
                        <containers.col_left style={{ marginLeft: '20px' }}>
                            <buttons.smallSuccess onClick={() => addToTextList(item.name)}>
                                Add
                            </buttons.smallSuccess>
                        </containers.col_left>
                    </containers.row_left>

                    {item.value.map((value, j) => (
                        <containers.row_left key={j} noPadding>
                            <inputs.base
                                type={'text'}
                                value={value}
                                onChange={(e) => editTextList(item.name, j, e.target.value)}
                                style={{
                                    width: '100%',
                                    maxWidth: '375px',
                                }}
                            />
                            <img
                                src={ic_trash}
                                alt={'Delete'}
                                onClick={() => deleteFromTextList(item.name, j)}
                                style={{
                                    margin: '-12px 0 0 5px',
                                    width: '20px',
                                    height: '20px',
                                    cursor: 'pointer',
                                }}
                            />
                        </containers.row_left>
                    ))}
                </React.Fragment>
            )
        } else if (item.type === 'select_from') {
            return (
                <React.Fragment key={i}>
                    <texts.base size={texts.sizes.regular} weight={texts.weights.medium}>
                        {capitalizeFirstLetter(item.label)}
                    </texts.base>
                    {currentConfig[item.key].map((network, j) => (
                        network?.content?.length > 0 && (
                            <label key={j}>
                                <input
                                    type="checkbox"
                                    checked={item.value.includes(network.content)}
                                    onChange={(e) => handleCheckbox(e, network.content, j)}
                                />
                                {network.content}
                            </label>
                        )
                    ))}
                </React.Fragment>
            )
        }
    })
}