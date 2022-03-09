import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, NoMatch } from 'containers'
import { Navbar } from 'components'

export default class AppRoutes extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route element={<NoMatch />} />
                </Routes>
            </>
        )
    }
}