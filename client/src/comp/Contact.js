import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Contact.css'; 

export const Contact = () => {
    return (
      <div className="container-contact">
        <div className="row-contact">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center mb-5">Contact Us</h2>
            <p>
              Have a question or feedback? We'd love to hear from you! Feel free to reach out to us using the contact information below or use the form to send us a message.
            </p>
            <div className="row-contact">
              <div className="col-md-6">
                <h4>Contact Information:</h4>
                <ul>
                  <li>Email: aradhana81@gmail.com.com</li>
                  <li>Phone: (91) 79847-10020</li>
                  <li>Address: Sharu section road, Jamnagar, India</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4>Contact Form:</h4>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name"  placeholder='Fullname' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email"  placeholder='Email' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control" id="message" rows="5" placeholder='Write a message!!'></textarea>
                  </div>
                  <button type="submit" className="btn btn-light">Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}