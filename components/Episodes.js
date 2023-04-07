import React from "react";
import Image from "next/image";
import styles from "./Episodes.module.css";

export default function Episodes() {
  return (
    <>
      <div className={styles.title}>LATEST EPISODES</div>
      <div>
        <Image src={"/podcasts_image_bg_remove.png"} width={250} height={250} />
      </div>
    </>
  );
}
