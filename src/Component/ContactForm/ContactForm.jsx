import React, { useRef, useState } from "react";
import style from "./ContactForm.module.css";
import emailjs from "emailjs-com";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Response = () => {
  return <p>Your message have been sent successfuly.</p>;
};
const ContactForm = () => {
  const [response, showResponse] = useState(false, true);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jzsgq2",
        "template_plgakil",
        form.current,
        "syKVdolGKR2P8h6zV"
      )
      .then(
        (response) => {
          console.log(response.text);
          console.log("Your message has been sent successfuly.");
        },
        (error) => {
          console.log(error.text);
          console.log("Messae not sent");
        }
      );

    form.current.reset();
    showResponse(true);
  };
  setTimeout(() => {
    showResponse(false);
  }, 5000);
  return (
    <div className={style.container}>
      <div className={style.contactText}>
        <h2>Let's discuss something cool</h2>
        <h3> I'm interested in ..</h3>
        <div className={style.flex}>
        <button>Website</button>
        <br />
        <button>Landing page</button>
        <br />
        <button>Portfolio</button>
        </div>
      </div>
      <div className={style.contactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <h4>Contact me</h4>
          <input type="text" name="Full_name" placeholder="Full Name" />
          <br />
          <input type="email" name="Email" placeholder="Email Address" />
          <br />
          <input type="phone" name="Phone" placeholder="Phone Number" />
          <br />
          <input
            type="text"
            name="Message"
            placeholder="Message"
            className={style.message}
          />
          <br />
          <button>Send Message</button>
          <div className={style.row}>{response ? <Response /> : null} </div>
          <div className={style.formIcons}>
          <a href="https://wa.me/qr/K62V3OTIYAFSP1">
        <FaWhatsappSquare className={style.whatsappIcon} />
        </a>
        <FaLinkedin className={style.linkedinIcon}/>
        <FaTwitterSquare className={style.twitterIcon}/>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
