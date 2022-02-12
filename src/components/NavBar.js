
import React from "react"
import logo from "../assets/shared/logo.svg"

export default function NavBar() {
    return (
        <header className="primary-header flex">
            <div>
                <img src={logo} alt="Enter The Flux logo" className="logo" />
            </div>
            <nav>
                <ul class="primary-navigation underline-indicators flex ff-sans-cond">
                    <li class="active"><a class="uppercase text-white letter-spacing-2"
                        href="#"><span>00</span>Home</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>01</span>The Flux</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>02</span>Crew</a></li>
                    <li><a class="uppercase text-white letter-spacing-2" href="#"><span>0</span>Technology</a></li>
                </ul>
            </nav>
        </header>

    )
}

