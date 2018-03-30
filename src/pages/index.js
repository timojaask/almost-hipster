import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";
import styles from "./index.module.css";

const ListItem = ({ name, coverImage, path, date, alt }) =>
  <div className={styles.listItemContainer}>
    <Link className={styles.listItemLink} to={path}>
      <Img sizes={coverImage.sizes} alt={alt} />
      <div className={styles.listItemTint} />
      <div className={styles.nameAndDateContainer}>
        <h2 className={styles.listItemTitle}>{name}</h2>
        <span className={styles.listItemDate}>{date}</span>
      </div>
    </Link>
  </div>

export default ({ data }) =>
  <div className={styles.container}>
    <h2 className={styles.tagline}>Choose a city for recommendations, including specialty coffee places, speakeasy bars, and interesting restaurants.</h2>
    <ListItem name="Recife" coverImage={data.recifeCover} path="/recife" date={"Mar 2018"} alt="Recife's best cafes, bars, and restaurants" />
    <ListItem name="Oradea" coverImage={data.oradeaCover} path="/oradea" date={"Jan 2018"} alt="Oradea's best cafes, bars, and restaurants" />
    <ListItem name="New York" coverImage={data.newYorkCover} path="/new-york" date={"Aug 2017"} alt="New York's best cafes, bars, and restaurants" />
    <ListItem name="Helsinki" coverImage={data.helsinkiCover} path="/helsinki" date={"Oct 2016"} alt="Helsinki's best cafes, bars, and restaurants" />
  </div>

export const query = graphql`
  query IndexImageQuery {
    recifeCover: imageSharp(id: { regex: "/recife-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    },
    oradeaCover: imageSharp(id: { regex: "/oradea-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    },
    newYorkCover: imageSharp(id: { regex: "/new-york-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    helsinkiCover: imageSharp(id: { regex: "/helsinki-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 200) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;