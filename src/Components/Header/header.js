import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { ReactComponent as Logo} from '../../assets/images/crown.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo_container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    SHOP
                </Link>
            </div>
        </div>
    )
}

export default Header