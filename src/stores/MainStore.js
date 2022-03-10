import React, { Component } from 'react'
import { mockData, getNewConfig, Requests } from 'helpers'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.requests = new Requests()

        this.state = {
            loading: false,
            loggedIn: false,
            // data: mockData, // In case API is broken, uncomment this line and comment the next one
            data: [],
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
        this.checkLogin()

        if (this.loggedIn) {
            this.requests.get('/docker-compose/get-all/0').then(res => {
                const parsedData = res.data.map(item => {
                    return JSON.parse(item.dockerData)
                })
                this.setState({ data: parsedData })
            }).catch(err => {
                this.setState({ data: [], loggedIn: false })
                console.error(err)
            })
        }
    }

    checkLogin() {
        const jwt = localStorage.getItem('jwt')

        if (jwt) {
            this.requests = new Requests({token: jwt})
            this.setState({ loggedIn: true })
        } else {
            this.requests = new Requests()
            this.setState({ loggedIn: false })
        }
    }
  
    async login(data) {
        const user = { 'email': data[0].value, 'password': data[1].value }

        this.requests.post('/authentication/login', user).then(res => {
            this.requests = new Requests({token: res.data}) // TODO: check with API response
            localStorage.setItem('jwt', res.data)
            this.setState({ loggedIn: true })
        }).catch(err => {
            this.setState({ loggedIn: false })
            localStorage.removeItem('jwt')
            console.error(err)
        })
    }

    createNewConfig() {
        const newConfig = getNewConfig()
        this.setState({ data: [...this.state.data, newConfig] })

        this.createOnServer({
            id: newConfig.id,
            name: newConfig.name,
            dockerData: JSON.stringify(newConfig),
        })

        return newConfig.id
    }

    updateConfig(config) {
        const newData = this.state.data.map(item => {
            if (item.id === config.id) return config
            return item
        })

        const item = newData.find(item => item.id === config.id)

        this.setState({ data: newData })
        this.updateOnServer({
            id: item.id,
            name: item.name,
            dockerData: JSON.stringify(item),
        })
    }

    deleteConfig(config) {
        const newData = this.state.data.filter(item => item.id !== config.id)
        this.setState({ data: newData })
        this.deleteOnServer(config.id)
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

        const item = newData.find(item => item.id === configId)

        this.setState({ data: newData })
        this.updateOnServer({
            id: item.id,
            name: item.name,
            dockerData: JSON.stringify(item),
        })
    }

    deleteConfigData(configId, type, configDataId) {
        const newData = this.state.data.map(item => {
            if (item.id === configId) {
                const newConfigData = item[type].filter(configData => configData.id !== configDataId)
                return { ...item, [type]: newConfigData }
            }
            return item
        })

        const item = newData.find(item => item.id === configId)

        this.setState({ data: newData })
        this.updateOnServer({
            id: item.id,
            name: item.name,
            dockerData: JSON.stringify(item),
        })
    }

    updateOnServer(data) {
        if (this.state.loggedIn) {
            this.requests.put('/docker-compose', data).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        }
    }

    createOnServer(data) {
        if (this.state.loggedIn) {
            this.requests.post('/docker-compose', data).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        }
    }

    deleteOnServer(data) {
        if (this.state.loggedIn) {
            this.requests.delete(`/docker-compose/${data.id}`).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            })
        }
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