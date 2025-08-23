import React, { useState } from "react";

function ContactMe()
{
    const [formData, setFormData] = useState
    (
        {
            lastName: "",
            firstName: "",
            email: "",
            message: ""
        }
    );

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        alert('Thanks for the message! It will be read eventually and be replied to soon.');
        setFormData
        (
            {
            lastName: "",
            firstName: "",
            mail: "",
            message: ""
            }
        );
    };

  const handleChange = (e) =>
    {
        setFormData
        (
            {
            ...formData,
            [e.target.name]: e.target.value
            }
        );
    };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form id="contactForm" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
            {/* Form fields here */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;