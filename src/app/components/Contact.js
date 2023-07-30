import React from 'react';

export default function Contact() {
  return (
    <div className="contact padding--top padding--bottom bg-light">
  <div className="container">
    <div className="section__header text-center">
      <h2>Contact Us</h2>
      <p>
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
        quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh
        id elit.
      </p>
    </div>
    <div className="section__wrapper">
      <div className="contact__form">
        <form
          className="d-flex flex-wrap justify-content-between"
          action="https://template.labartisan.net/demos/prayerzon/prayerzon/contact.php"
          id="contact-form"
          method="POST"
        >
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            name="name"
            required="required"
          />
          <input
            type="text"
            placeholder="Your Email"
            id="email"
            name="email"
            required=""
          />
          <input
            className="w-100"
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
            required=""
          />
          <textarea
            placeholder="Your Message"
            rows={8}
            name="message"
            id="message"
            required=""
            defaultValue={""}
          />
          <div className="text-center w-100">
            <button type="submit" className="default-btn move-right">
              <span>SEND NOW</span>
            </button>
          </div>
        </form>
        <p className="form-message" />
      </div>
    </div>
  </div>
</div>

  );
}
