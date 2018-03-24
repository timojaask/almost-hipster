import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styles from "./index.module.css";

const ListItem = ({ name, coverImage, path }) =>
  <div className={styles.listItemContainer}>
    <Link className={styles.listItemLink} to={path}>
      <Img sizes={coverImage.sizes} />
      <div className={styles.listItemTint} />
      <h1 className={styles.listItemTitle}>{name}</h1>
    </Link>
  </div>

export default ({ data }) =>
  <div className={styles.container}>
    <ListItem name="Recife" coverImage={data.recifeCover} path="/recife" />
    <ListItem name="Helsinki" coverImage={data.helsinkiCover} path="/helsinki" />
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