import React, {useState} from "react";
import './navbar.css'
import { MdOutlineLegendToggle } from "react-icons/md";

const Navbar = () => {
     const[active, setActive] = useState('navBar')
     
     const showNav = () => {
        setActive('navBar activeNavbar')
     }

    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>Venus Vacations.</h1>
                    </a>
                </div>

                <div className="active">
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navlink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navlink">Package</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navlink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navlink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navlink">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW </a>
                        </button>
                    </ul>
                </div>

                <div className="toggleNavbar">
                <MdOutlineLegendToggle className="icon"/>
                </div>


            </header>
        </section>
    )
}

export default Navbar
