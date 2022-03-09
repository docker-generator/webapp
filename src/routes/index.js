import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, NoMatch, Setup } from 'containers'
import { Navbar } from 'components'

export default class AppRoutes extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path='/edit/:id' element={<Setup />} />
                    <Route element={<NoMatch />} />
                </Routes>
            </>
        )
    }
}
