import React from "react"
import "./contact.css"
import ContactMid from "./ContactMid";
import ContactGrid from "./ContactGrid";

const Contact = () => {
  return (
    <>
    <div className="contact-us-main">
        <div className="contact-us-child1">How can we help you?</div>
        <div className="contact-us-child2"></div>
    </div>
    <ContactMid/>
    <ContactGrid/>
    
    </>
  )
};

export default Contact
