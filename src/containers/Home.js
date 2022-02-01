import React from 'react'
import { HomeListItem, IconInput } from 'components'
import { buttons, containers, texts, inputs } from 'styles'
import logo from 'assets/logo.svg'

const mockData = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Description 2',
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

                    <IconInput icon={logo}>
                        <inputs.base
                            icon={true}
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

                <buttons.primary>Create a new configuration</buttons.primary>
            </containers.row_wide>

            {mockData.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)}
        </containers.main>
    )
}
