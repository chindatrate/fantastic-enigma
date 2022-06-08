import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="row">
        <div className="contact_box">
          <div className="contact__meta">
            <h1>Contact information below</h1>
            <p className="email">email <strong>chindatrate@me.com</strong></p>
          </div>
          <div className="input_box">
            <input type="text" className="contact name" placeholder="Your name *" />
            <input type="text" className="contact email" placeholder="Your Email *" />
            <input type="text" className="contact subject" placeholder="Write a Subject" />
            <textarea name="message" id="message" placeholder="Write Your message"></textarea>
            <button className="btn" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact