import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/contact.module.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [sureName, setSureName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);

  //   handle Changes in from inputs

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeSureName = (e) => {
    setSureName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  //   Send to back end for Django to send email
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("/#", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     firstName,
    //     sureName,
    //     email,
    //     phone,
    //     message,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    //   const data = await res.json();
    //   if (data === "Success") {
    //     // set the input field to empty
    //     setFirstName("");
    //     setSureName("");
    //     setEmail("");
    //     setPhone("");
    //     setMessage("");
    //     setMessageSuccess(true);
    //   }
    // };
  };

  return (
    <section className={styles.container}>
      {/* <Meta /> */}
      <div>
        <h1 className={styles.headerTitle}>INFO WAVE CONTACT</h1>
      </div>
      <div className={styles.heroBtn}>
        <a href="tel:07840292840">CALL NOW</a>
      </div>
      <div className={styles.heroBtn}>
        <Link href={"/#"}>WHATSAPP</Link>
      </div>
      <div className={styles.contactInfo}>
        <p>
          Please Fill out the form and we will respond within the first 24
          hours. All enquiries are handled by our in-house customer support
          team.
        </p>
        <br />
      </div>
      <form>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Surname*"
            value={sureName}
            onChange={(e) => handleChangeSureName(e)}
          />
          <div className={styles.phone}>
            <p>Phone</p>
          </div>
          <input
            className={styles.input}
            name="phone"
            type="tel"
            placeholder="Phone*"
            pattern="^-?[0-9]\d*\.?\d*$"
            value={phone}
            onChange={(e) => handlePhone(e)}
          />
          <div className={styles.phone}>
            <p>Email</p>
          </div>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="Email*"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
          <div className={styles.message}>
            <p>Message</p>
          </div>
          <textarea
            className={styles.inputMessage}
            value={message}
            placeholder={"Message*"}
            rows={10}
            onChange={(e) => handleMessage(e)}
          />
        </div>
        {!messageSuccess ? (
          <div onClick={(e) => handleSubmit(e)} className={styles.submit}>
            <a>Submit Enquiry</a>
          </div>
        ) : (
          <div
            onClick={(e) => handleSubmit(e)}
            className={styles.messageSuccess}
          >
            <a>Your Message Has been Sent</a>
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
