import React, { Component } from 'react'
import { HomeListItem } from 'components'
import { containers } from 'styles'

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
        <containers.main>
            <h1>Home</h1>
            {mockData.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)}
        </containers.main>
    )
}
