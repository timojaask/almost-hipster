import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet';
import styles from "./index.module.css";

const ListLink = props =>
  <li className={styles.listLinkItem}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div className={styles.container}>
    <Helmet>
      <title>Almost Hipster - cafe, bar, and restaurant recommendations</title>
      <meta name="google-site-verification" content="v1QRI4GRc-Gm6BitmF7KiYT15QOLQjdQljzZK68LwjI" />
      <meta name="description" content="Almost Hipster is a blog about best cafes, bars and restaurants in various cities. Get tips on specialty coffee places, speakeasy bars, and interesting restaurants in New York, Helsinki, Recife, and Oradea." />
    </Helmet>
    <header className={styles.header}>
      <Link to="/" className={styles.titleContainer}>
        <h1 className={styles.title}>almost hipster</h1>
      </Link>
      <ul className={styles.list}>
        <ListLink to="/">home</ListLink>
        <ListLink to="/about/">about</ListLink>
      </ul>
    </header>
    {children()}
    <div className={styles.footer}>
      <a href="https://www.instagram.com/almosthipsterblog/" target="_blank">Almost Hipster Instagram</a>
    </div>
  </div>