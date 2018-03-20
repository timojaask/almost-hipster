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
    <ListItem name="New York" coverImage={data.newYorkCover} path="/new-york" />
  </div>

export const query = graphql`
  query GatsbyImageSampleQuery {
    recifeCover: imageSharp(id: { regex: "/recife-cover.jpg/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    },
    newYorkCover: imageSharp(id: { regex: "/new-york-cover.jpg/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;