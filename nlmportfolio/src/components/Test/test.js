import React, {useState} from 'react';
import List from "../List/list";
import "./icons.css"

const theArray = [
    {
        id: 1,
        about: 'A front end developer'
    },

    {
        id: 2,
        about: 'wildy curious'
    },
    {
        id: 3,
        about: 'something'
    },
    {
        id: 2,
        about: 'hi'
    },

]

function AboutMe() {
    
    return <List theArray={theArray} />
}

export default AboutMe;
