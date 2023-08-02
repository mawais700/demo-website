import React from "react";
import web from '../Images/img2.png';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common";
import Service from "./Service";
const Home=()=>{

        return (
            <>
               <Common 
                name="Grow Your Business
                with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
                />
                <Service/>
            </>
        )
}

export default Home;