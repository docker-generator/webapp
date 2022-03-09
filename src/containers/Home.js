import React from 'react'
import { HomeListItem, IconInput } from 'components'
import { buttons, containers, texts, inputs } from 'styles'
import ic_search from 'assets/images/ic-search.svg'

const mockData = [
    {
        id: 1,
        title: 'Setup #1274',
        description: 'Description 1',
        last_edited: '02/03/2022'
    },
    {
        id: 2,
        title: 'Setup #1275',
        description: 'Description 2',
        last_edited: '12/02/2022'
    },
    {
        id: 3,
        title: 'Setup #1276',
        description: 'Description 3',
        last_edited: '14/02/2022'
    },
    {
        id: 4,
        title: 'Setup #1277',
        description: 'Description 4',
        last_edited: '21/02/2022'
    },
    {
        id: 5,
        title: 'Setup #1278',
        description: 'Description 5',
        last_edited: '18/02/2022'
    },
]

export default function Home() {
    return (
        <containers.main style={{ marginTop: '45px' }}>
            <containers.row_wide noPadding style={{ marginBottom: '50px' }}>
                <containers.col_left>
                    <texts.base
                        as={'h1'}
                        size={texts.sizes.title_regular}
                        weight={texts.weights.bold}
                        style={{ marginBottom: '20px' }}
                    >My setups</texts.base>

                    <IconInput icon={ic_search}>
                        <inputs.base
                            type={'text'}
                            name={'search'}
                            placeholder={'Search'}
                            style={{
                                width: '100%',
                                maxWidth: '375px',
                            }}
                        />
                    </IconInput>
                </containers.col_left>

                <buttons.success>Create new configuration</buttons.success>
            </containers.row_wide>

            {mockData.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)}
        </containers.main>
    )
}
