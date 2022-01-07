import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, NoMatch } from 'containers'

export default class AppRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<NoMatch />} />
            </Routes>
        )
    }
}