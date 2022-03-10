import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from 'stores'
import { inputs } from 'styles'

export default function EditorComposerForm(props) {
    const { type, configId, formData } = props
    const { state, actions } = useContext(MainContext)

    console.log(formData)

    return (
        <inputs.base
            type={'text'}
            name={'search'}
            placeholder={'Search'}
            style={{
                width: '100%',
                maxWidth: '375px',
            }}
        />
    )
}