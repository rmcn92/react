import React from 'react'
import { Link } from "react-router-dom";
import Aurora3 from '../images/aurora.jpg'
import Beach3 from '../images/beach.jpg'
import Forest3 from '../images/forest.jpg'
import Jungle3 from '../images/jungle.jpg'
import Lake3 from '../images/lake.jpg'
import Milky3 from '../images/milky.jpg'

const Navigation = () => {
    return (
        <div className="container mt-3 one">
            <Link to="/Aurora" className="link">
                <figure>
                    <img src={Aurora3} className="size-img"/>
                    <figcaption>Aurora</figcaption>
                </figure>
            </Link>
            <Link to="/Beach" className="link">
                <figure>
                    <img src={Beach3} className="size-img" />
                    <figcaption>Beach</figcaption>
                </figure>
            </Link>
            <Link to="/Forest" className="link">
                <figure>
                    <img src={Forest3} className="size-img" />
                    <figcaption>Forest</figcaption>
                </figure>
            </Link>
            <Link to="/Jungle" className="link"> 
                <figure>
                    <img src={Jungle3} className="size-img" />
                    <figcaption>Jungle</figcaption>
                </figure>
            </Link>
            <Link to="/Lake" className="link">
                <figure>
                    <img src={Lake3} className="size-img" />
                    <figcaption>Lake</figcaption>
                </figure>
            </Link>
            <Link to="/Milky" className="link">
                <figure>
                    <img src={Milky3} className="size-img" />
                    <figcaption>Milky</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigation
