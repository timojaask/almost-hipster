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
      New York is a very different city from the other cities that I've reviewed. It has so many great places that it's simply impossible to visit them all. So here are a few of my favorite picks, the ones that consistently delivered great experience. I lived and spent most of my time between Downtown and Midtown Manhattan, so this list is focused on that area.
    </p>
    <h2>Coffee</h2>
    <h4>Black Fox Coffee</h4>
    <p>
      Black Fox is my favorite coffee shop in New York City, and is the only one on this list that's not a chain. The staff is very professional and make fantastic coffee drinks as well as tea.
    </p>
    <h4>Bluestone Lane</h4>
    <p>
      Australian-inspired coffee shops, which produce whatever you would expect from a decent specialty coffee store.
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
      Small and intimate speakeasy, with dimmed lights and bartender playing vinyl. Seating maybe for 15 people maximum, but it is rarely full, which is a good thing. Find the entrance door on the underground floor of The Growler, next to the toilets...
    </p>
    <h4>Little Branch</h4>
    <p>
      The same concept as The Underdog, however, vastly more known, so finding the entrance won't be a problem, as there's likely a line stretching around the block. Well worth the wait though, if you're into cocktails.
    </p>
    <h4>Rue B</h4>
    <p>
      An awesome small jazz bar in the Alphabet City. Great mood, drinks, and (often live) music.
    </p>
    <h2>Food</h2>
    <h4>Roki Le Izakaya</h4>
    <p>
      Fantastic Japanese restaurant, with most pleasant staff and atmosphere. And the food is incredible, and not spoiled by price. Tonkotsu ramen and Pork belly buns are heavenly.
    </p>
    <h4>Mighty Quinn’s BBQ</h4>
    <p>
      It's a low-end fast-food place, but I’ve never had a better brisket in my life — it's so soft, it’s falling apart, with black burned edges around that taste delicious. And it's good for your wallet!
    </p>
    <h4>Space Nabi</h4>
    <p>
      Very cool Korean restaurant and bar. Crazy decor and random TVs playing 60fps Blade Runner. Recommend dish: Spicy pork bibimbap.
    </p>
    <h4>Industry Kitchen</h4>
    <p>
      Great food with views on East Rover and The Brooklyn Bridge, where, among other things, they are serving the biggest steak ever. They sell it for two, but it’s enough for three. Or maybe four. It is superb.
    </p>
    <h4>Food Gallery 32</h4>
    <p>
      A three stories food court in the middle of the Korea Town. It has a wide variety of fantastic Korean dishes for lower prices.
    </p>
    <h4>YO! Sushi</h4>
    <p>
      Conveyor belt sushi rocks! Sit and watch the delicious pieces of Japanese cuisine passing you by. Then grab and eat whatever looks best to you!
    </p>
    <h2>Other</h2>
    <h4>Morgenstern's Finest Ice Cream</h4>
    <p>
      This is by far my favorite ice cream shop in any country. They have a bunch of unusual, but fantastic flavors, such as Black Coconut Ash, Cinnamon Whiskey Caramel, Bourbon Vanilla, Cardamom Lemon Jam, or Salted Pretzel 🤤
    </p>
    <p>
      Best also means popular, so at times you see a huge line, and you might think Justin Biber is playing in a bar next door, when to your horror you realize it's leading to Morgenstern's. But then, someone from the line turns to you and says “Don't worry, it's worth the wait, buddy.”
    </p>
    <h4>Arcade Bakery</h4>
    <p>
      Continuing the list of “best in the world,” next up - Arcade Bakery. Hidden away from the streets, in a hallway of what looks like an office building, is this tiny bakery corner. They are serving only maybe eight different types of sweet baked goods, but my goodness they are good. The almond croissants have never tasted this delicious.
    </p>
    <p>
      Just like with Morgenstern's, Arcade has a problem of running out of supplies, so better show up early.
    </p>
    <h4>SPiN</h4>
    <p>
      Drinks and ping pong. Try it, it's great.
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