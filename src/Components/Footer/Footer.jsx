import React, {useEffect} from "react";
import './footer.css'
import video from '../../Assets/Lakshadweep.mp4'
import { FiChevronRight, FiSend } from "react-icons/fi"
import { MdTravelExplore } from "react-icons/md"
import { FiFacebook } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { FiYoutube } from "react-icons/fi"

import Aos from "aos";
import'aos/dist/aos.css'

const Footer = () => {
    // creating a react hook to add a scroll animation.........
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])


    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">
                            SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdTravelExplore className="icon"/> Safar
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Hi, Sandhya this side. This is my website Safar which will help you to find to destination tour!!! Have a Good day.
                        </div>

                        <div data-aos="fade-up" className="footerSocials flex">
                        <FiYoutube className="icon"/>
                        <FiTwitter className="icon"/>
                        <FiFacebook className="icon"/>
                        <FaInstagram className="icon"/>
                        
                        </div>
                    </div>

                    <div className="footerLinks grid">

                    {/* Group One */}
                    <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Services
                        </li>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Insurance
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Agency
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Tourism
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Payment
                        </li>

                    </div>

                    {/* Group Two */}
                    <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                        <span className="groupTitle">
                            PARTNERS
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Bookings
                        </li>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Rentcars
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> HostelWorld
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Trivago
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> TripAdvisor
                        </li>

                    </div>

                    {/* Group Three */}
                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                        <span className="groupTitle">
                            LAST MINUTE
                        </span>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Goa
                        </li>
                        
                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Nepal
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Chardham
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Jagannath Puri
                        </li>

                        <li className="footerList flex">
                            <FiChevronRight className="icon"/> Mumbai
                        </li>

                    </div>

                </div>

                <div className="footerDiv flex">
                    <small>SAFAR</small>
                    <small>COPYRIGHTS RESERVED - 2024</small>
                </div>

                </div>
            </div>
        </section>
    )
}

export default Footer