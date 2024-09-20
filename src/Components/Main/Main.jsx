import React, {useEffect}  from "react";
import './main.css'

// import icons
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LuClipboardCheck } from "react-icons/lu"

// import the images
import img from '../../Assets/Kerala Tour.jpg'
import img2 from '../../Assets/Goa Tour.jpg'
import img3 from '../../Assets/Lakshadweep.jpg'


import Aos from "aos";
import'aos/dist/aos.css'

// the array named data
const Data=[
    {
    id:1,
    imgSrc: img,
    destTitle: 'Kerala Tour',
    location: 'India',
    duration : '7 Nights / 8 Days',
    fees: '₹20,000',
    destination : 'Munnar, Kochi, Kumarakom, Alleppey, Trivandrum, Kanyakumari, Kovalam, Jewish Synagogue. '
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Goa Tour',
        location: 'India',
        duration : '3 Nights / 4 Days',
        fees: '₹7,950',
        destination : 'Goa City, Beaches and Islands'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Lakshadweep Tour',
        location: 'India',
        duration : '3 Nights / 4 Days',
        fees: '₹30,000',
        destination : 'Bangaram Island, Minicoy Island, Agatti Islands, Kalpeni Island, Kavaratti, '
    },


]


// destination covered 
const Main = () => {
    // creating a react hook to add a scroll animation.........
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* So here we are going to use high order array method(map). To do that we shall use a list of object in one array. I'm going to create an array named data and from that we shall map() array to fetch each desitnation at once. I hope this will make sence to you!*/}

                {
                    Data.map(({id, imgSrc, destTitle, location, duration, fees, destination })=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/*Here it will return single id from the map array */}

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="duration">
                                            <span>Duration: {duration}</span>
                                        </div>
                                        <div className="price">
                                            <h5>Price{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>Destination Covered: {destination}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS<LuClipboardCheck className="icon"/>
                                    </button>
                                </div>

                            </div>
                    )

                    })
                }
            </div>


        </section>
    )
}

export default Main