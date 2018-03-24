import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styles from "./index.module.css";

const ListItem = ({ name, coverImage, path, date }) =>
  <div className={styles.listItemContainer}>
    <Link className={styles.listItemLink} to={path}>
      <Img sizes={coverImage.sizes} />
      <div className={styles.listItemTint} />
      <div className={styles.nameAndDateContainer}>
        <h2 className={styles.listItemTitle}>{name}</h2>
        <span className={styles.listItemDate}>{date}</span>
      </div>
    </Link>
  </div>

export default ({ data }) =>
  <div className={styles.container}>
    <ListItem name="Recife" coverImage={data.recifeCover} path="/recife" date={"Mar 2018"} />
    <ListItem name="Helsinki" coverImage={data.helsinkiCover} path="/helsinki" date={"Oct 2016"} />
  </div>

export const query = graphql`
  query IndexImageQuery {
    recifeCover: imageSharp(id: { regex: "/recife-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    },
    helsinkiCover: imageSharp(id: { regex: "/helsinki-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;