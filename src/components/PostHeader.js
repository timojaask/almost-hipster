import React from "react";
import Img from "gatsby-image";
import styles from "./PostHeader.module.css";

export default ({ coverImage, name }) => (
  <div className={styles.container}>
    <Img sizes={coverImage.sizes} />
    <h1 className={styles.title}>{name}</h1>
  </div>
);