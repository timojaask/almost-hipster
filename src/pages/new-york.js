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
      New York is a very different city from the other cities that I've reviewd. It has so many great places that it's simply impossible to visit them all. So here are a few of my personal favorite picks, the ones that consistently delivered great experience. I lived and spent most of my time between Downtown and Midtown Manhattan, so this list is focues around that area.
    </p>
    <h2>Coffee</h2>
    <h4>Black Fox Coffee</h4>
    <p>
      Black Fox is my favorite coffee shop in New York City, and is the only one on this list that's not a chain. The staff is very professional and make fantastic coffee drinks as well as tea.
    </p>
    <h4>Bluestone Lane</h4>
    <p>
      Australian-inspired coffee shops, which produce whatever you expect form a decent specialty coffee store.
    </p>
    <h4>Birch Coffee</h4>
    <p>
      Got great coffee in various Birch locations 95% of the time, which is good enough, since they have one in almost every part of Manhattan.
    </p>
    <h4>Stumptown</h4>
    <p>
      I’ve mostly come to Stumptown to buy some of their roasted beans, which are fantastic if you prepare coffee at home. However, they also make delicious coffee in the shop.
    </p>
    <h2>Bars</h2>
    <h4>The Underdog</h4>
    <p>
      Small and intimate speakeasy, with dimmed lights and bartender playing vinyls. Seating maybe for 15 people maximum, but it is rarely full, which is a good thing. Find the entrance door on the underground floor of The Growler, next to the toilets...
    </p>
    <h4>Little Branch</h4>
    <p>
      Same concept as The Underdog, however, vastly more known, so finding the entrance won't be a problem, as there's likely a line stretching around the block. Well worth the wait though, if you're into cocktails.
    </p>
    <h4>Rue B</h4>
    <p>
      An awseome small jazz bar in the Alphabet City. Great mood, drinks, and (often live) music.
    </p>
    <h2>Food</h2>
    <h4>Roki Le Izakaya</h4>
    <p>
      Absolutely fantastic Japanese restaurant, with most pleasant staff and atmosphere. And the food is incredible, and not spoiled by price. Tonkotsu ramen and Pork belly buns are heavenly.
    </p>
    <h4>Mighty Quinn’s BBQ</h4>
    <p>
      It's a low-end fast-food place, but I’ve never had a better brisket in my life - so soft, it’s falling apart, with black burned edges around that taste absolutely delicious. Also great for your budget!
    </p>
    <h4>Space Nabi</h4>
    <p>
      Very cool Korean restaurant and bar. Crazy decor and random TVs playing 60fps Blade Runner. Recommend dish: Spicy pork bibimbap.
    </p>
    <h4>Industry Kitchen</h4>
    <p>
      Great food with views on East Rover and The Brooklyn Bridge, serving the biggest steak ever. They sell it for two, but it’s enough for three.
    </p>
    <h4>Food Gallery 32</h4>
    <p>
      A three stories food court in the middle of the Korea Town. Big variety of fantastic Korean food for lower prices.
    </p>
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