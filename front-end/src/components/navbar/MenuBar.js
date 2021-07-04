import React from "react"
import { Link } from "react-router-dom"



const MenuBar = () => {
    return (
        <div className = "menu-bar">
            <ul className = "menu-bar-items">
                <li style = {{float : "left"}}>
                    <Link to = "/">
                        AnimeSearch
                    </Link>
                </li>
                <li> <a href ="https://ongaku.js.org/">Anime Radio </a> </li>
                <li>
                    <Link to = "/home">
                        Database
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuBar
