//import { Link } from "react-router-dom"

export const BurgerMenu = (props: {
        displayBurgerMenu: any,
        setDisplayBurgerMenu: any,
        showIcon: any,
        toggleVisibility: any
}) => {
    const {setDisplayBurgerMenu, toggleVisibility} = props

    const closeMenu = () => {
        setDisplayBurgerMenu((pre:any) => !pre)
        toggleVisibility()
    }
    return (
        <div className="burgerMenu-container">
            <div className="closeMenu">
                <span onClick={closeMenu}>
                    X
                </span>
            </div>
            <div className="link-container">
                {/* <Link className="link" to ="/auth">
                    Auth
                </Link> */}
                {/* <Link className="link" to ="/auth">
                    Download Resume
                </Link> */}
            </div>
        </div>
    )

}