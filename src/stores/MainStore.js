import React, { Component } from 'react'
import mockData from 'helpers/mockData'
import { v4 as uuid } from 'uuid';

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            loggedIn: false,
            data: mockData, // TODO: change with API data
        }

        this.actions = {
            createNewConfig: this.createNewConfig.bind(this),
            updateConfig: this.updateConfig.bind(this),
            deleteConfig: this.deleteConfig.bind(this),
        }
    }

    componentDidMount() {
        // TODO: Implement API fetching
    }

    createNewConfig() {
        const randomName = Array(4).fill(null).map(() => Math.floor(Math.random() * 10)).join('')
        const newConfig = {
            id: uuid(),
            title: `My config #${randomName}`,
            description: 'Description 1',
            created_at: Date.now(),
            last_edited: Date.now(),
            services: [],
            volumes: [],
        }

        this.setState({ data: [...this.state.data, newConfig] })

        return newConfig.id
    }

    updateConfig(config) {
        console.log('updateConfig', config)
        const newData = this.state.data.map(item => {
            if (item.id === config.id) {
                return config
            }
            return item
        })

        this.setState({ data: newData })
    }

    deleteConfig(config) {
        const newData = this.state.data.filter(item => item.id !== config.id)
        this.setState({ data: newData })
    }

    render() {
        return (
            <MainContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainContext,
    MainProvider,
    MainConsummer
}