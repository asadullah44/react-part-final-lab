import React from 'react';

const ContactUs = () => {
    return ( <div>
        <h1 className="text-center">
            Contact Us
        </h1>
        <section className="contact py-5">
        <div className="container">
        <form className="col-lg-6 offset-lg-3">
        <div className="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Email"></input>
        </div>
        <div className="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" className="form-control" placeholder="Name"></input>
        </div>
        <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" id="message" placeholder="Message" row="5"></textarea>
        </div>
        <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="check"></input>
        <label className="form-check-label" for="check">Your'e not a Robot</label>
        </div>
        <div className="text-center">
        <button className="btn btn-lg btn-color cont-btn" style={{color:"white", backgroundColor:"black"}}>Submit</button>
        </div>
        </form>
        </div>
        </section>
    </div> );
}
 
export default ContactUs;