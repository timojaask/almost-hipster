import React from "react";
import Img from "gatsby-image";
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import styles from "./blogpost.module.css";

/*

Need photos from:
- Cafe Artisan
- Roasberg
- Fratello
- Liberty or Death
- Books & Antiques
- Pastor
- Kaisla
- Block By Dylan
- Momotoko
- Samrat
- Piece'n'Love
- Baskeri & Basso
- Holiday

Coffee:
Third-wave coffee shops is definitely not one of the city's strongest points, but it's got a few great options. Generally, Finnish coffee culture is 99% filter coffee made at home or at work. This is what I grew up with and I hated it. However, places like Cafe Artisan totally make up for all the bad coffee in the country.

Cafe Artisan -- Need photos
Roasberg -- Need photos
Johan & Nystrom
Fratello -- Need photos

Bars:
I'm a sucker for a good cocktail, and I think Helsinki is the city that really spoiled me in that regard. The four cocktail bars listed below are among the best I've been to in my life, competing with cities like New York, Tel Aviv, Barcelona, and Lisbon.

Liberty or Death -- 
Trilby & Chadwick
Books & Antiques
Pastor
Kaisla

Food:
There are so many great places to eat in Helsinki, that it would make for a very long blog post if I tried to cover it all. And I'd probably fail at that. So here are a few of my personal favorites.

Block By Dylan
Momotoko
Samrat
Piece'n'Love
Baskeri & Basso
Holiday

*/
export default ({ data }) => (
  <div>
    <PostHeader coverImage={data.cover} name="Helsinki" />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
      I feel like I left a lot of Recife unexplored, but there a few places I can write home about. Most of the places in this post are from around Boa Viagem area since that's the neighborhood where I've stayed.
    </p>
    <h2>Coffee</h2>
    <h4>Borsoi</h4>
    <p>
      Both locations have excellent options for killing small hunger, such as sandwiches and local specialties. On weekdays in Pina location, they serve lunch of the day for R$25, which I've had a couple of times and it was delightful.
    </p>
  </div>
);

export const query = graphql`
  query HelsinkiPostImages {
    cover: imageSharp(id: {regex: "/helsinki-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;

