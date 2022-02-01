import react, { useContext } from 'react'
import styled from 'styled-components'
import { buttons, constants, texts } from 'styles'
import { MainContext } from 'stores'

import logo from 'assets/logo.svg'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    width: 100%;
    height: 70px;
`

const NavContainer = styled.div`
    max-width: ${constants.sizes.laptopL};
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`

const NavCol = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }
`

// TODO: Add user dropdown functions and styles
function UserDropDown() {
    const { state, actions } = useContext(MainContext)

    return (
        <div>
            <p>Settings</p>
            <p>Logout</p>
        </div>
    )
}

export default function Navbar() {
    const { state, actions } = useContext(MainContext)

    return (
        <Nav>
            <NavContainer>
                <NavCol>
                    <img src={logo} alt="logo" />
                </NavCol>
                <NavCol>
                    <texts.base>
                        <Link to="/">Dashboard</Link>
                    </texts.base>
                </NavCol>
            </NavContainer>
        </Nav>
    )
}