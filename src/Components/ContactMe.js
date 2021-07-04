import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const { register, handleSubmit, errors } = useForm();
  const serviceId = "service_gr6ef86";
  const templateId = "template_ID";
  const userId = "user_he9QktucGcr0TW7xXBqoe";

  const onSubmit=(data, r)=> {
    sendEmail(
        serviceId,
        templateId,
        {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        },
        userId
    )
    
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me </h1>
        <p>
          Please fill out the form and I will contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT  */}
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
              {/* PHONE INPUT  */}
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
              {/* EMAIL INPUT  */}
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>
              {/* SUBJECT INPUT  */}
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION  */}
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
              ></textarea>
              <div className="line"></div>
              <button
                type="submit"
                className=" contact-btn btn btn-outline-danger"
              >
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
