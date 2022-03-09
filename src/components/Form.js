import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { buttons, containers, texts, inputs } from 'styles'

export default function Form(props) {
    const { onSubmit, buttonType } = props
    const [formData, setFormData] = useState([...props.formData])

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setFormData(formData.map(item => {
            if (item.name === name) {
                item.value = value
            }

            return item
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    const SubmitButton = buttonType ? buttons[buttonType] : buttons.primary

    return (
        <containers.col_left as={'form'} onSubmit={handleSubmit}>
            {formData.map(({ name, label, type, placeholder, ...rest }) => (
                <containers.col_left key={name}>
                    {label && (
                        <texts.base
                            as={'label'}
                            htmlFor={name}
                            style={{ marginBottom: '0.5rem' }}
                        >{label}</texts.base>
                    )}

                    <inputs.base
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        onChange={handleChange}
                        {...rest}
                    />
                </containers.col_left>
            ))}

            <SubmitButton as={'button'} type="submit">Submit</SubmitButton>
        </containers.col_left>
    )
}
