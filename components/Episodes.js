import React from "react";
import Image from "next/image";
import styles from "./Episodes.module.css";
import Episode from "./Episode";

export default function Episodes() {
  return (
    <>
      <div className={styles.title}>LATEST EPISODES</div>
      <p className={styles.caption}>
        Check Out Our latest Tech Episodes. Updated Daily, on the go, to keep
        you - the Audience in the Know....
      </p>
      <div>
        <Image src={"/podcasts_image_bg_remove.png"} width={250} height={250} />
      </div>
      <Episode />
    </>
  );
}
