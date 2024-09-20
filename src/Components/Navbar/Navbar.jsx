import React, {useState} from "react";
import './navbar.css'
import { MdTravelExplore } from "react-icons/md"
import { MdOutlineLegendToggle } from "react-icons/md"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
     const[active, setActive] = useState('navBar')
     //function to toggle navbar 
     const showNav = ()=>{
        setActive('navBar activeNavbar')
     }

     //function to remove navbar 
     const removeNavbar = ()=>{
        setActive('navBar')
     }

    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdTravelExplore className="icon"/> Safar</h1>
                    </a>
                </div>

                <div className={active}>
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

                    <div onClick={removeNavbar} className="closeNavbar">
                        <IoMdClose className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <MdOutlineLegendToggle className="icon"/>
                </div>


            </header>
        </section>
    )
}

export default Navbar
