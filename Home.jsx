import React from "react";
import './home.css'
import image from '../../Assets/bg vacation.jpg'
import {GrLocation} from 'react-icons/gr'

const Home = () => {
    return(
        <section className="home">
            <div className="overlay"></div>
            <img src={image}  type="image/jpg"></img>

            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holidays
                    </h1>
                </div>

                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here...." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select your date: </label>
                        <div className="input flex">
                            <input type="date" placeholder="Enter name here...." />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="lable_total flex">
                            <label htmlFor="price"> Max price: </label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max='5000' min='$100'></input>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home