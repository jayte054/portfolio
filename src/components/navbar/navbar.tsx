import { useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import "./navbar.css"


export const Navbar = () => {
    const [showModal, setShowModal] = useState(true)
    const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
    const [showIcon, setShowIcon] = useState(true)

    const openModal = () => {
        setShowModal(!showModal)
    }

    const displayBurger = () => {
        setDisplayBurgerMenu((pre) => !pre)
        setShowIcon(false)
    }

    return (
        <div className="nav-container">
            <h1 className="h1">Justin Ewelike's Portfolio</h1>
            <span className="icon">
                <div>
                    {showIcon &&  <GiHamburgerMenu className="burger-icon"
                                                   onClick ={displayBurger}/> }
                    {displayBurgerMenu}
                </div>
            </span>
        </div>
    )
}