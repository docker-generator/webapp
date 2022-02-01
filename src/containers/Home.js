import React from 'react'
import { HomeListItem } from 'components'
import { containers, texts } from 'styles'

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
        <containers.main styles={{ marginTop: '45px' }}>
            <texts.base
                size={texts.sizes.title_regular}
                weight={texts.weights.bold}
                styles={{ marginBottom: '22px' }}
            >My setups</texts.base>
            {mockData.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)}
        </containers.main>
    )
}
