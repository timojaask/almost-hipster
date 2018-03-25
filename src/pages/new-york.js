import React from "react";
import Img from "gatsby-image";
import Helmet from 'react-helmet';
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import styles from "./blogpost.module.css";

export default ({ data }) => (
  <div>
    <Helmet>
      <title>New York's best cafes, bars, and restaurants</title>
    </Helmet>
    <PostHeader coverImage={data.cover} name="New York" date={"Aug 2017"} />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
    </p>
    <h2>Coffee</h2>
  </div>
);

export const query = graphql`
  query NewYorkPostImages {
    cover: imageSharp(id: {regex: "/new-york-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;