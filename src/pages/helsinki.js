import React from "react";
import Img from "gatsby-image";
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import styles from "./blogpost.module.css";

/*

Need photos from:
- Artisan Café
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
Third-wave coffee shops is definitely not one of the city's strongest points, but it's got a few great options. Generally, Finnish coffee culture is 99% filter coffee made at home or at work. This is what I grew up with and I hated it. However, places like Artisan Café totally make up for all the bad coffee in the country.

Artisan Café
Jani is the owner and one of the most devoted coffee makers I've had a pleasure to meet. He once told me, that for each drink that he makes, he wants it to be perfect. So he'll redo it as many times as necessary until he gets every detail just right before serving it to a customer. Devotion to the art speaks for itself once you get to taste his work. Artisan is my favorite.

Johan & Nystrom
This super cozy coffee shop is located on a beautiful Katajanokka island. Random-looking, but at the same time very stylish decor and brick walls create a wonderful relaxing atmosphere, and a unique place.

Fratello

Roasberg

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
      I spent roughly one year living in Helsinki, and it became one of my favorite cities in the world. It's beautiful, neat, surrounded by wonderful nature and a sea. It also has a lot of great bars and restaurants to check out.
    </p>
    <h2>Coffee</h2>
    <p>
      Third-wave coffee shops is definitely not one of the city's strongest points, but it's got a few great options. Generally, Finnish coffee culture is 99% filter coffee made at home or at work. This is what I grew up with and I hated it. However, places like Artisan Café totally make up for all the bad coffee in the country.
    </p>
    <h4>Artisan Café</h4>
    <p>
      Jani is the owner and one of the most devoted coffee makers I've had a pleasure to meet. He once told me, that for each drink that he makes, he wants it to be perfect. So he'll redo it as many times as necessary until he gets every detail just right before serving it to a customer. Devotion to the art speaks for itself once you get to taste his work. Artisan is my favorite.
    </p>
    <ImageGrid photos={[
      data.artisan1,
      data.artisan2,
      data.artisan3,
    ]} />
    <h4>Johan & Nyström</h4>
    <p>
      This super cozy coffee shop is located on a beautiful Katajanokka island. Random-looking, but at the same time very stylish decor and brick walls create a wonderful relaxing atmosphere, and a unique place.
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
    artisan1: imageSharp(id: {regex: "/helsinki-artisan1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    artisan2: imageSharp(id: {regex: "/helsinki-artisan2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    artisan3: imageSharp(id: {regex: "/helsinki-artisan3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;

