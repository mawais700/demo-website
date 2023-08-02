import React from "react";
import web from '../Images/img2.png';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Common from "./Common";
import webabout from '../Images/hero-img.png';

const About=()=>{

        return (
            <>
                <Common 
                    name="Welcome to About Page With"
                    imgsrc={webabout}
                    visit="/contact"
                    btname="Contact Now"
                />
            </>
        )
}

export default About;