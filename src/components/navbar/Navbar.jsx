
import "./navbar.css"
import { FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"

const Navbar = ({ navbarLinks }) => {

    const [menuClicked, setMenuClicked] = useState(false)

    const toggleMenuClicked = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <nav className="navbar">
            <span className="navbar-logo">Travel</span>
            {menuClicked ? (
                <FiMenu size={25} className="navbar-menu" onClick={toggleMenuClicked} />) : (
                <FiX size={25} className="navbar-menu" onClick={toggleMenuClicked} />)
            }
            <ul ul className={menuClicked ? "navbar-list" : "navbar-list navbar-list-active"}>
                {navbarLinks.map((item) => (
                    <li className="navbar-item" key={item.title}>
                        <a className="navbar-link" href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Navbar