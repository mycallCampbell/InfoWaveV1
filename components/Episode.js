import React from "react";
import Image from "next/image";
import styles from "./Episode.module.css";
import Link from "next/link";

export default function Episode() {
  return (
    <div className={styles.episodeContainer}>
      <Link href={"/#"}>
        <div className={styles.podContainer}>
          <div className={styles.title}>WHAT THE.... IS ChatGPT?</div>
          <Image src={"/what_the_is_GPT.png"} width={512} height={512} />
          <button className={styles.listenBTN}>LISTEN</button>
        </div>
      </Link>
      <Link href={"/#"}>
        <div className={styles.podContainer}>
          <div className={styles.title}>
            IS <span>'AI'</span> TAKING OVER?
          </div>
          <Image src={"/Is_AI_Taking_Over.png"} width={512} height={512} />
          <button className={styles.listenBTN}>LISTEN</button>
        </div>
      </Link>
    </div>
  );
}
