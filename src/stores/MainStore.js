import React, { Component } from 'react'
import { mockData, getNewConfig, Requests } from 'helpers'
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
            updateConfigData: this.updateConfigData.bind(this),
            deleteConfigData: this.deleteConfigData.bind(this),
            login: this.login.bind(this),
        }
    }

    componentDidMount() {
        // TODO: Implement API fetching
    }

    async login(data) {
      console.log(data)
      const user = {
        'email': data[0].value,
        'password': data[1].value
      }

      this.setState({ data: [...this.state.data] })
      const res = await this.requests.post(`/authentication/login`, user)
      localStorage.setItem('jwt', res);
    }

    createNewConfig() {
        const newConfig = getNewConfig()
        this.setState({ data: [...this.state.data, newConfig] })
        return newConfig.id
    }

    updateConfig(config) {
        const newData = this.state.data.map(item => {
            if (item.id === config.id) return config
            return item
        })

        this.setState({ data: newData })
    }

    deleteConfig(config) {
        const newData = this.state.data.filter(item => item.id !== config.id)
        this.setState({ data: newData })
    }

    updateConfigData(configId, type, data) {
        const newData = this.state.data.map(item => {
            if (item.id === configId) {
                const newConfigData = item[type].map(configData => {
                    if (configData.id === data.id) return data
                    return configData
                })
                return { ...item, [type]: newConfigData }
            }
            return item
        })

        this.setState({ data: newData })
    }

    deleteConfigData(configId, type, configDataId) {
        const newData = this.state.data.map(item => {
            if (item.id === configId) {
                const newConfigData = item[type].filter(configData => configData.id !== configDataId)
                return { ...item, [type]: newConfigData }
            }
            return item
        })

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
