import { useState } from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import { BurgerMenu } from "../modal/modal"
import "./navbar.css"


export const Navbar = () => {
    const [showModal, setShowModal] = useState(true)
    const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false)
    const [showIcon, setShowIcon] = useState(true)

   

    const displayBurger = () => {
        setDisplayBurgerMenu((pre) => !pre)
        setShowIcon(false)
    }

    const toggleVisibility = () => {
        setShowIcon(!showIcon)
    }

    return (
        <div className="nav-container">
            <h1 className="h1">Justin Ewelike's Portfolio</h1>
            {/* <span className="icon">
                <div>
                    {showIcon &&  <GiHamburgerMenu className="burger-icon"
                                                   onClick ={displayBurger}/> }
                    {displayBurgerMenu &&  (
                        <BurgerMenu showIcon={showIcon}
                                    toggleVisibility={toggleVisibility}
                                    displayBurgerMenu={displayBurgerMenu}
                                    setDisplayBurgerMenu={setDisplayBurgerMenu}/>
                    )}
                </div>
            </span> */}
        </div>
    )
}