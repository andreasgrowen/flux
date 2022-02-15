
import React from "react"
import logo from "../assets/shared/logo.svg"
import dataTest from "../dataTest"

export default function NavBar() {

    const [menuElements, setMenuElements] = React.useState(dataTest.menuElements)

    console.log(menuElements)

    const menu = menuElements.map(menuElement => {
        return (
            <li className={menuElement.on ? "active" : ""} key={menuElement.id} >
                <a className="uppercase text-white letter-spacing-2" href={menuElement.url} onClick={() => handleClick(menuElement.id)}>
                    <span>{menuElement.id}</span>{menuElement.name}</a>
            </li >
        )
    })


    function handleClick(id) {
        console.log(id)
        setMenuElements(prevElement => {
            return prevElement.map((element) => {
                return element.id == id ? { ...element, on: !element.on } : { ...element, on: false }
            })
        })

    }


    return (
        <header className="primary-header flex">
            <div>
                <img src={logo} alt="Enter The Flux logo" className="logo" />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
            <nav>
                <ul className="primary-navigation underline-indicators flex ff-sans-cond">
                    {menu}
                </ul>
            </nav>
        </header>

    )
}



/*                  <li class="active"><a class="uppercase text-white letter-spacing-2" href="#"><span>00</span>Home</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>The Flux</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>0</span>Technology</a></li>*/