import React from 'react'
import { formatToYaml } from 'helpers'

export default function EditorPreviewContent(props) {
    const { data } = props
    const yml = formatToYaml(data)
    return yml.split('\n').map((line, index) => {
        let spaces = 0
        for (let i = 0; i < line.length; i++) {
            if (line[i] === ' ') spaces++
            else break
        }

        return <div key={index} style={{ marginLeft: `${spaces * 10}px` }}>{line}</div>
    })
}