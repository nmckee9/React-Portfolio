import React from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../../components/Links/links";
import Spacer from "../../components/Spacer/spacer";
import Navbar from "../../components/Navbar/navbar";
import GetInfo from "../../components/GetInfo/getinfo";


function Contact() {
  const location = useLocation();
    return (
      <div>
  <Navbar/>
  <GetInfo />
  <Links />
  <Spacer />
  <Spacer />
</div>




    )
};

export default Contact;