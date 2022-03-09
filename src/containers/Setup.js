import React, { useContext } from 'react'
import { MainContext } from 'stores'
import { containers } from 'styles'
import { EditorComposer, EditorPreview } from 'components'
import { useParams } from 'react-router-dom'

export default function Setup() {
	const { id } = useParams()
	const { state } = useContext(MainContext)

	return (
		<containers.main style={{ marginTop: '45px' }}>
			<containers.row_wide noPadding style={ { marginBottom: '50px' } }>
				<EditorComposer data={state.data.find(data => data.id === id)} />
				<EditorPreview />
			</containers.row_wide>
		</containers.main>
	);
}
