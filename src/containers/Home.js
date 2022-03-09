import React, { useContext } from 'react'
import { MainContext } from 'stores'
import { HomeListItem, IconInput } from 'components'
import { buttons, containers, texts, inputs } from 'styles'
import ic_search from 'assets/images/ic-search.svg'

export default function Home() {
    const { state } = useContext(MainContext)

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

            {state.data.map(item => <HomeListItem key={`li_${item.id}`} {...item} />)}
        </containers.main>
    )
}
