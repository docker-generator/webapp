import React, { useContext } from 'react'
import { MainContext } from 'stores'
import { downloadYaml, formatToYaml } from 'helpers'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { constants, texts, buttons } from 'styles'

const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.6rem;
	box-sizing: border-box;
	height: 70px;
	width: 100%;
	background-color: ${ constants.colors.secondary_10 };
	border-radius: 0.57rem;
	margin-bottom: 1rem;
`

const ItemInfos = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
`

const ItemButtons = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	height: 100%;

	& > * {
		margin-left: 1rem;
	}
`

export default function HomeListItem(props) {
	const { id, name } = props;
	const { state } = useContext(MainContext)
	const data = state.data.find(config => config.id === id)

	const download = () => {
		const yml = formatToYaml(data)
		downloadYaml(`${data.name.replace(' ', '_')}.yml`, yml)
	}

	return (
		<ItemContainer>
			<ItemInfos to={ `/edit/${ id }` }>
				<texts.base>{ name }</texts.base>
			</ItemInfos>
			<ItemButtons>
				<buttons.primary onClick={download}>Download</buttons.primary>
				<buttons.secondary as={ Link } to={ `/edit/${ id }` }>Edit</buttons.secondary>
			</ItemButtons>
		</ItemContainer>
	);
}