import React from "react";
import styles from "./Subjects.module.css";

export default function Sujects() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>SUBJECTS WE COVER</div>
      <ul className={styles.unorderedList}>
        <li>PROGRAMMING</li>
        <li>DATA NETWORKING</li>
        <li>AI</li>
        <li>HACKING</li>
        <li>ELECTRICAL ENGINEERING</li>
      </ul>
    </div>
  );
}
