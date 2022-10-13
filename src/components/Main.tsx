import React from "react";
import { SyntheticEvent } from "react";
import './main.scss'

export const Main = () => {

    const submitHandler = (event: SyntheticEvent) => {
        event.preventDefault()
        
    }

    return (
        <>
            <h1>Submission Form View</h1>
            <p>All fields marked with * are required</p>
            <form className="main-container">
                <div className="id-container">
                    <div>
                        <span>*</span>
                        <input type="text" placeholder="First name" id="firstName"></input>
                    </div>
                    <div>
                        <span>*</span>
                        <input type="text" placeholder="Last name" id="lastName"></input>
                    </div>
                    <div>
                        <label htmlFor="Email">Email * </label>
                        <input type="text" id="Email"></input>
                    </div>
                </div>
                <div className="address-container">
                    <div className="detail">
                        <input type="text" placeholder="Address 1" id="address1"></input>
                        <div>
                            <label htmlFor="city">City: </label>
                            <input type="text" id="city"></input>
                        </div>
                        <div>
                            <label htmlFor="state">State: </label>
                            <input type="text" id="state"></input>
                        </div>
                    </div>
                    <div className="other">
                        <div>
                            <label htmlFor="zip">Zip: </label>
                            <input type="text" id="zip"></input>
                        </div>
                        <div>
                            <label htmlFor="phone"> Phone * </label>
                            <input type="text" id="phone"></input>
                        </div>
                    </div>
                </div>
                <div className="job-container">
                    <select id="jobTitle">
                        <option value="" disabled selected>Please select job title</option>
                        <option value="lead">Engineer - lead</option>
                        <option value="mid">Engineer - mid level</option>
                        <option value="junior">Engineer - junior</option>
                        <option value="front">Engineer - front end focused</option>
                        <option value="back">Engineer - backend focused</option>
                        <option value="full">Engineer - full stack</option>
                    </select>
                    <textarea placeholder="Describe why you are a good fit for the job you are applying for." id="reason"></textarea>
                </div>
                <input type="submit" onSubmit={(e) => submitHandler(e)}></input>
            </form>
        </>
    )
}