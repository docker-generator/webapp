import React, { Component } from 'react'

const MainContext = React.createContext('Main')
const MainConsummer = MainContext.Consumer

class MainProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.actions = {}
    }

    componentDidMount() {
        // TODO: Implement
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