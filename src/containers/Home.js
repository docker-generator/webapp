import React, { useContext } from 'react'
import { MainContext } from 'stores'
import { useNavigate } from 'react-router-dom'
import { HomeListItem, HomeHeader } from 'components'
import { buttons, containers, texts } from 'styles'

export default function Home() {
    const { state, actions } = useContext(MainContext)
    const navigate = useNavigate()

    const createNewConfig = () => {
        const id = actions.createNewConfig()
        navigate(`/edit/${id}`)
    }

    return (
        <containers.main style={{ marginTop: '45px' }}>
            <HomeHeader createNewConfig={createNewConfig} />

            {state.data.length ? (
                state.data.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)
            ) : (
                <containers.col_center>
                    <texts.base as={'p'} size={texts.sizes.title_regular}>
                        You don't have any configurations yet.
                    </texts.base>
                    <buttons.success
                        style={{ marginTop: '20px' }}
                        onClick={createNewConfig}
                    >
                        Create a new configuration
                    </buttons.success>
                </containers.col_center>
            )}
        </containers.main>
    )
}
