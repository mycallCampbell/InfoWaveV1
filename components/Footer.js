import React, { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer({ src, width, height }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data === "Success") {
      // set the input field to empty
      setEmail("");
    }
  };

  const handleText = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className={styles.containerFooter}>
      <div className={styles.artWork}>
        <Image src={src} width={width} height={height} />
      </div>
      <div className={styles.containerMailingList}>
        <h4>Enter your Email to Subscribe to our mailing list</h4>
      </div>
      <div>
        <div className={styles.mailingList}>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="Email*"
            value={email}
            onChange={(e) => handleText(e)}
          />
          <div className={styles.inputBlack} onClick={handleSubmit}>
            Submit
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          <a href={"/#"}>
            <Image src={"/instagramFooter.png"} width={60} height={60} />
          </a>
        </div>
        <div className={styles.linksFooter}>
          <Link href={"/contact"}>
            <div className={styles.menuItem}>
              <div>Contact</div>
              <div className={styles.arrow}>{">"}</div>
            </div>
          </Link>
          <Link href={"/terms"}>
            <div className={styles.menuItem}>
              <div>Terms {"&"} Conditions</div>
              <div className={styles.arrow}>{">"}</div>
            </div>
          </Link>
          <Link href={"/returns"}>
            <div className={styles.menuItem}>
              <div>Returns</div>
              <div className={styles.arrow}>{">"}</div>
            </div>
          </Link>
          <Link href={"/reviews"}>
            <div className={styles.menuItem}>
              <div>Reviews</div>
              <div className={styles.arrow}>{">"}</div>
            </div>
          </Link>
          <Link href={"/privacyPolicy"}>
            <div className={styles.menuItem}>
              <div>Privacy Policy</div>
              <div className={styles.arrow}>{">"}</div>
            </div>
          </Link>
        </div>
        <div className={styles.locationTitle}>LOCATION </div>
        <div className={styles.locationAddress}>Place Holder</div>
        <div className={styles.locationUnited}>United Kingdom</div>
        <div className={styles.space}></div>
      </div>
    </section>
  );
}

export default Footer;
