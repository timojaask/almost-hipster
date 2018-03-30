import React from "react";
import Img from "gatsby-image";
import styles from "./PostHeader.module.css";

export default ({ coverImage, name, date, alt }) => (
  <div className={styles.container}>
    <Img sizes={coverImage.sizes} alt={alt} />
    <div className={styles.nameAndDateContainer}>
      <h1 className={styles.title}>{name}</h1>
      <span className={styles.date}>{date}</span>
    </div>
  </div>
);