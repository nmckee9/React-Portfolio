import React from 'react';
import Spacer from '../../components/Spacer/spacer';
import Skydive from "../../components/Skydive/skydive";
import "./getinfo.css";



function GetInfo() {
    return (
        <div>
            <Spacer />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h2 className="title touchtext">Get In Touch</h2>
                    <h2 className="subtitle introtitletext has-text-centered" >Let's talk code, world travels, and skydiving</h2>
                    <Skydive />
                </div>
            </div>
        </div>
    )
};

export default GetInfo;