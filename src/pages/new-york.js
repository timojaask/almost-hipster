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
    <ImageGrid photos={[
      data.blackFox1,
      data.blackFox2,
      data.blackFox3,
      data.blackFox4,
      data.blackFox5,
    ]} credit={{ text: "Black Fox Coffee", url: "https://www.facebook.com/blackfoxcoffeeco/" }} />
    <h4>Bluestone Lane</h4>
    <p>
      Australian-inspired coffee shops, which produce whatever you would expect from a decent specialty coffee store.
    </p>
    <ImageGrid photos={[
      data.bluestoneLane1,
      data.bluestoneLane2,
      data.bluestoneLane3,
    ]} credit={{ text: "Bluestone Lane", url: "https://www.facebook.com/BluestoneLane/" }} />
    <h4>Birch Coffee</h4>
    <p>
      Got great coffee in various Birch locations 95% of the time, which is good enough, since they have one in almost every part of Manhattan.
    </p>
    <ImageGrid photos={[
      data.birch1,
    ]} credit={{ text: "Birch Coffee", url: "https://www.facebook.com/birchcoffee/" }} />
    <h4>Stumptown</h4>
    <p>
      I’ve mostly come to Stumptown to buy some of their roasted beans, which are fantastic if you prepare coffee at home. However, they also make delicious coffee in the shop.
    </p>
    <ImageGrid photos={[
      data.stumptown1,
      data.stumptown2,
      data.stumptown3,
    ]} credit={{ text: "Stumptown", url: "https://www.facebook.com/stumptowncoffee/" }} />
    <h2>Bars</h2>
    <h4>The Underdog</h4>
    <p>
      Small and intimate speakeasy, with dimmed lights and bartender playing vinyl. Seating maybe for 15 people maximum, but it is rarely full, which is a good thing. Find the entrance door on the underground floor of The Growler, next to the toilets...
    </p>
    <ImageGrid photos={[
      data.underdog1,
      data.underdog2,
      data.underdog3,
    ]} credit={{ text: "The Underdog", url: "https://www.facebook.com/UnderdogBarNYC/" }} />
    <h4>Little Branch</h4>
    <p>
      The same concept as The Underdog, however, vastly more known, so finding the entrance won't be a problem, as there's likely a line stretching around the block. Well worth the wait though, if you're into cocktails.
    </p>
    <h4>Rue B</h4>
    <p>
      An awesome small jazz bar in the Alphabet City. Great mood, drinks, and (often live) music.
    </p>
    <ImageGrid photos={[
      data.rueB1,
      data.rueB2,
      data.rueB3,
    ]} credit={{ text: "Rue B", url: "https://www.facebook.com/RueBeastvillage/" }} />
    <h2>Food</h2>
    <h4>Roki Le Izakaya</h4>
    <p>
      Fantastic Japanese restaurant, with most pleasant staff and atmosphere. And the food is incredible, and not spoiled by price. Tonkotsu ramen and Pork belly buns are heavenly.
    </p>
    <ImageGrid photos={[
      data.roki1,
      data.roki2,
    ]} credit={{ text: "Roki Le Izakaya", url: "https://www.facebook.com/ModernJapaneseRestaurant/" }} />
    <h4>Mighty Quinn’s BBQ</h4>
    <p>
      It's a low-end fast-food place, but I’ve never had a better brisket in my life — it's so soft, it’s falling apart, with black burned edges around that taste delicious. And it's good for your wallet!
    </p>
    <ImageGrid photos={[
      data.quinns1,
      data.quinns2,
      data.quinns3,
      data.quinns4,
    ]} credit={{ text: "Mighty Quinn’s BBQ", url: "https://www.facebook.com/mightyquinnsbbq/" }} />
    <h4>Industry Kitchen</h4>
    <p>
      Great food with views on East Rover and The Brooklyn Bridge, where, among other things, they are serving the biggest steak ever. They sell it for two, but it’s enough for three. Or maybe four. And something called Floating Island Garlic bread. It is superb.
    </p>
    <ImageGrid photos={[
      data.industry1,
      data.industry2,
      data.industry3,
      data.industry4,
      data.industry5,
    ]} credit={{ text: "Industry Kitchen", url: "https://www.facebook.com/industrykitchennyc/" }} />
    <h4>Food Gallery 32</h4>
    <p>
      A three stories food court in the middle of the Korea Town. It has a wide variety of fantastic Korean dishes for lower prices.
    </p>
    <ImageGrid photos={[
      data.foodGallery1,
      data.foodGallery2,
      data.foodGallery3,
    ]} credit={{ text: "Food Gallery 32", url: "https://www.facebook.com/foodgallery32/" }} />
    <h4>YO! Sushi</h4>
    <p>
      Conveyor belt sushi rocks! Sit and watch the delicious pieces of Japanese cuisine passing you by. Then grab and eat whatever looks best to you!
    </p>
    <ImageGrid photos={[
      data.yoSushi1,
      data.yoSushi2,
      data.yoSushi3,
      data.yoSushi4,
    ]} credit={{ text: "YO! Sushi", url: "https://www.facebook.com/YOSushiAmerica/" }} />
    <h2>Other</h2>
    <h4>Morgenstern's Finest Ice Cream</h4>
    <p>
      This is by far my favorite ice cream shop in any country. They have a bunch of unusual, but fantastic flavors, such as Black Coconut Ash, Cinnamon Whiskey Caramel, Bourbon Vanilla, Cardamom Lemon Jam, or Salted Pretzel 🤤
    </p>
    <p>
      Best also means popular, so at times you see a huge line, and you might think Justin Biber is playing in a bar next door, when to your horror you realize it's leading to Morgenstern's. But then, someone from the line turns to you and says “Don't worry, it's worth the wait, buddy.”
    </p>
    <ImageGrid photos={[
      data.morgensterns1,
      data.morgensterns2,
      data.morgensterns3,
    ]} credit={{ text: "Morgenstern's Finest Ice Cream", url: "https://www.facebook.com/morgensternsnyc/" }} />
    <h4>Arcade Bakery</h4>
    <p>
      Continuing the list of “best in the world,” next up - Arcade Bakery. Hidden away from the streets, in a hallway of what looks like an office building, is this tiny bakery corner. They are serving only maybe eight different types of sweet baked goods, but my goodness they are good. The almond croissants have never tasted this delicious.
    </p>
    <p>
      Just like with Morgenstern's, Arcade has a problem of running out of supplies, so better show up early.
    </p>
    <ImageGrid photos={[
      data.arcadeBakery1,
    ]} credit={{ text: "Condé Nast", url: "https://www.cntraveler.com/restaurants/new-york/arcade-bakery" }} />
    <h4>SPiN</h4>
    <p>
      Drinks and ping pong. Try it, it's great.
    </p>
    <ImageGrid photos={[
      data.spin1,
      data.spin2,
      data.spin3,
    ]} credit={{ text: "SPiN", url: "https://www.facebook.com/SPiNNewYork/" }} />
    <br />
    <br />
    <ImageGrid photos={[
      data.newYork1,
    ]} credit={{ text: "Industry Kitchen", url: "https://www.facebook.com/industrykitchennyc/" }} />
  </div>
);

export const query = graphql`
  query NewYorkPostImages {
    cover: imageSharp(id: {regex: "/new-york-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blackFox1: imageSharp(id: {regex: "/new-york-black-fox1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blackFox2: imageSharp(id: {regex: "/new-york-black-fox2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blackFox3: imageSharp(id: {regex: "/new-york-black-fox3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blackFox4: imageSharp(id: {regex: "/new-york-black-fox4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blackFox5: imageSharp(id: {regex: "/new-york-black-fox5/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    bluestoneLane1: imageSharp(id: {regex: "/new-york-bluestone-lane1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    bluestoneLane2: imageSharp(id: {regex: "/new-york-bluestone-lane2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    bluestoneLane3: imageSharp(id: {regex: "/new-york-bluestone-lane3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    birch1: imageSharp(id: {regex: "/new-york-birch1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    stumptown1: imageSharp(id: {regex: "/new-york-stumptown1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    stumptown2: imageSharp(id: {regex: "/new-york-stumptown2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    stumptown3: imageSharp(id: {regex: "/new-york-stumptown3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    underdog1: imageSharp(id: {regex: "/new-york-underdog1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    underdog2: imageSharp(id: {regex: "/new-york-underdog2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    underdog3: imageSharp(id: {regex: "/new-york-underdog3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rueB1: imageSharp(id: {regex: "/new-york-rueb1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rueB2: imageSharp(id: {regex: "/new-york-rueb2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rueB3: imageSharp(id: {regex: "/new-york-rueb3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    roki1: imageSharp(id: {regex: "/new-york-roki1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    roki2: imageSharp(id: {regex: "/new-york-roki2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    quinns1: imageSharp(id: {regex: "/new-york-quinns1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    quinns2: imageSharp(id: {regex: "/new-york-quinns2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    quinns3: imageSharp(id: {regex: "/new-york-quinns3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    quinns4: imageSharp(id: {regex: "/new-york-quinns4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    industry1: imageSharp(id: {regex: "/new-york-industry-kitchen1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    industry2: imageSharp(id: {regex: "/new-york-industry-kitchen2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    industry3: imageSharp(id: {regex: "/new-york-industry-kitchen3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    industry4: imageSharp(id: {regex: "/new-york-industry-kitchen4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    industry5: imageSharp(id: {regex: "/new-york-industry-kitchen5/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    foodGallery1: imageSharp(id: {regex: "/new-york-food-gallery1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    foodGallery2: imageSharp(id: {regex: "/new-york-food-gallery2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    foodGallery3: imageSharp(id: {regex: "/new-york-food-gallery3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    yoSushi1: imageSharp(id: {regex: "/new-york-yo-sushi1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    yoSushi2: imageSharp(id: {regex: "/new-york-yo-sushi2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    yoSushi3: imageSharp(id: {regex: "/new-york-yo-sushi3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    yoSushi4: imageSharp(id: {regex: "/new-york-yo-sushi4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    morgensterns1: imageSharp(id: {regex: "/new-york-morgensterns1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    morgensterns2: imageSharp(id: {regex: "/new-york-morgensterns2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: NORTH) {
        ...GatsbyImageSharpSizes
      }
    },
    morgensterns3: imageSharp(id: {regex: "/new-york-morgensterns3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: NORTH) {
        ...GatsbyImageSharpSizes
      }
    },
    arcadeBakery1: imageSharp(id: {regex: "/new-york-arcade-bakery1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    spin1: imageSharp(id: {regex: "/new-york-spin1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    spin2: imageSharp(id: {regex: "/new-york-spin2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    spin3: imageSharp(id: {regex: "/new-york-spin3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    newYork1: imageSharp(id: {regex: "/new-york1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;