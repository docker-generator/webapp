import React, { useContext } from 'react'
import styled from 'styled-components'
import { constants, texts } from 'styles'
import { MainContext } from 'stores'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.svg'

const Nav = styled.div`
    width: 100%;
    height: 80px;
`

const NavContainer = styled.div`
    width: 100%;
    max-width: ${constants.sizes.laptopL};
    padding: 0 1rem;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const NavCol = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`

// TODO: Add user dropdown functions and styles
function UserDropDown() {
    // const { state, actions } = useContext(MainContext)

    return (
        <div>
            <p>Settings</p>
            <p>Logout</p>
        </div>
    )
}

export default function Navbar() {
    const { state } = useContext(MainContext)

    return (
        <Nav>
            <NavContainer>
                <NavCol>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                </NavCol>
                <NavCol>
                    <texts.base>
                        <Link to='/'>Dashboard</Link>
                    </texts.base>
                    {state.loggedIn && <UserDropDown />}
                </NavCol>
            </NavContainer>
        </Nav>
    )
}