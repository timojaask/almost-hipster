import React from "react";
import Img from "gatsby-image";
import PostHeader from "../components/PostHeader";

export default ({ data }) => (
  <div>
    <PostHeader coverImage={data.cover} name="New York" />
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
);

export const query = graphql`
  query NewYorkPostImages {
    cover: imageSharp(id: { regex: "/new-york-cover.jpg/" }) {
      sizes(maxWidth: 1630, maxHeight: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;