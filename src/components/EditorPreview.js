import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from 'stores'
import { EditorPreviewContent } from 'components'
import { downloadYaml, formatToYaml } from 'helpers'
import { buttons, containers } from 'styles'
import { colors } from 'styles/constants'
import styled from 'styled-components'

const styles = {
	editor_container: styled(containers.col_left)`
		padding: 20px 25px;
		margin: 20px;
		color: white;
		box-sizing: border-box;
		width: 93%;
		min-height: 680px;
		background-color: #626262;
		border-radius: 8px;
	`
}

export default function EditorPreview() {
	const { id } = useParams()
	const { state } = useContext(MainContext)
	const [data, setData] = useState(state.data.find(config => config.id === id))

	useEffect(() => {
		setData(state.data.find(config => config.id === id))
	}, [state, id])

	const download = () => {
		const yml = formatToYaml(data)
		downloadYaml(`${data.name.replace(' ', '_')}.yml`, yml)
	}

    return (
        <containers.col_right style={ { width: '50%', height: '90vh', backgroundColor: colors.secondary_20, borderRadius: '8px' } }>
			<containers.row_center noPadding style={ { marginBottom: '15px' } }>
				<styles.editor_container>
					<EditorPreviewContent data={data} />
				</styles.editor_container>
			</containers.row_center>
			<containers.row_left noPadding style={ { backgroundColor: colors.primary_70, height: '100%', borderRadius: '8px' } }>
				<containers.col_left style={ { marginLeft: '40px' } }>
					<buttons.white style={{background: 'white'}} onClick={download}>Download</buttons.white>
				</containers.col_left>
				<containers.col_left style={ { marginLeft: '40px' } }>
					{state.loggedIn && <buttons.white style={{background: 'white'}}>Save</buttons.white>}
				</containers.col_left>
			</containers.row_left>
        </containers.col_right>
    )
}