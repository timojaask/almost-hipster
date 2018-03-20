import React from "react";
import Link from "gatsby-link";
import styles from "./index.module.css";

const ListLink = props =>
  <li className={styles.listLinkItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div className={styles.container}>
    <header className={styles.header}>
      <Link to="/" className={styles.titleContainer}>
        <h3 className={styles.title}>almost hipster</h3>
      </Link>
      <ul className={styles.list}>
        <ListLink to="/">blog</ListLink>
        <ListLink to="/about/">about</ListLink>
      </ul>
    </header>
    {children()}
  </div>