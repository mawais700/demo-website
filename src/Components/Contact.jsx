import React, { useState } from "react";

const Contact=()=>{

    const [data, setData]= useState({
        fullname: '',
        phone: '',
        email:'',
        message:'',
    });
  
    const InputEvent = (event)=>{
        //console.log(event.target.value)
        const {name, value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const SubmitEvent=(event)=>{
            event.preventDefault();
            alert(`My name is ${data.fullname}, My Number is ${data.phone}, My Email is ${data.email}, Message is: ${data.message}`);
    }


    return(
        <>
            <div className=" text-center my-5">
                <h1> Contact Us </h1>
            </div>
            <div id="header" className="container my-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto" >
                        <form onSubmit={SubmitEvent}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                onChange={InputEvent}
                                name="fullname"
                                value={data.fullname}
                                placeholder="Enter Your Name"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Number</label>
                                <input type="phone" className="form-control" id="exampleFormControlInput1" 
                                onChange={InputEvent}
                                name="phone"
                                value={data.phone}
                                placeholder="Enter your Number"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                onChange={InputEvent}
                                name="email"
                                value={data.email}
                                placeholder="Enter your Email"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" type="text" 
                                onChange={InputEvent}
                                name="message"
                                value={data.message}
                                placeholder="Enter your Message"></textarea>
                            </div>

                            <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
    
}
export default Contact;