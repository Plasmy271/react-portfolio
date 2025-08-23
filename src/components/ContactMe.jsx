// components/ContactMe.jsx
import React, { useEffect } from 'react';

const ContactMe = () => {
  useEffect(() => {
    // Form validation and submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thanks for the message! It will be read eventually and be replied to soon.');
        contactForm.reset();
      });
    }

    // Cleanup function
    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form id="contactForm" className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="validationCustom01" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">First Name</label>
              <input type="text" className="form-control" id="validationCustom02" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustomUsername" className="form-label">Email</label>
              <div className="input-group">
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                  Please insert an email.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
              <div className="invalid-feedback">
                Please enter a message.
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;