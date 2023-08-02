import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service =()=>{

    return(
        <>
        
            <div className="text-center my-5">
                <h1>Our Service</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row gy-4">
                            {
                                Sdata.map((Val, ind)=>{
                                    return <Card imgsrc={Val.imgsrc} title={Val.title}/>
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;