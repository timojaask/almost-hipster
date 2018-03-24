import React from "react";
import Img from "gatsby-image";
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import styles from "./blogpost.module.css";

export default ({ data }) => (
  <div>
    <PostHeader coverImage={data.cover} name="Oradea" date={"Jan 2018"} />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
      Oradea is a lovely, small Romanian city, situated on the North-West of the country, close to the Hungarian border. The city center sits on the river and boasts beautiful architecture. Oradea has surprisingly good restaurants, bars, and cafes for its size. Most young people speak good English, the internet is high-speed, and there's a great co-working space called KavaHub. Oh, and it's very cheap.
    </p>
    <h2>Coffee</h2>
    <p>
      There are a few decent coffee places in Oradea, but most of them aren't too much into the whole third wave coffee thing. However, here is a couple that really nailed it.
    </p>
    <h4>Street Coffee Roasters</h4>
    <p>
      Small, but cozy little coffee shop, with a very intimate atmosphere. The owner speaks English, and it's always nice to chat with him about coffee preparation. They mostly roast their coffee right in the shop.
    </p>
    <h4>Genus Coffee</h4>
    <p>
      At the time of writing, Genus wasn't even a physical shop. They had the whole espresso machine and grinder set up on top of a bicycle in a city park. Don't let that little detail put you off because the coffee they make is heavenly. Talk to the owner when you stop by, he's a very nice guy and can talk a lot about coffee-making business.
    </p>
    <h2>Bars</h2>
    <h4>Moszkva</h4>
    <p>
      Moszkva reminds me of some of the ruin bars in Budapest. Located in an old building, with a large staircase, long hallways, balconies, different rooms with random furniture and trashy/artsy decor. Great for having a few beers with friends.
    </p>
    <h4>Gekko</h4>
    <p>
      Similar style to Moszkva, with lots of seemingly random decorations all over the place, and a nice inner yard area. Darts and foosball for your entertainment.
    </p>
    <h4>Kosher</h4>
    <p>
      Quite, small and cozy — a perfect place to relax with friends over hummus and a couple of bottles of wine.
    </p>
    <h2>Food</h2>
    <h4>ReWine</h4>
    <p>
      High-end mostly wine-focused restaurant. Come here for amazing wine and snacks. They also serve pretty good espresso-based drinks and a fantastic Saturday brunch.
    </p>
    <h4>Spoon</h4>
    <p>
      The restaurant is hanging literally above the river, with floor to ceiling windows and great views. The food is excellent, and the three-course 35 lei business lunch is a steal.
    </p>
    <h4>Suvlaki</h4>
    <p>
      Some of the best Greek food restaurants I've ever been to, with friendly staff, pretty interior, and very low prices. I used to come here almost every other day for lunch.
    </p>
    <h4>Wok'n Roll</h4>
    <p>
      Wok, soups, and noodles — great restaurant for a quick lunch without hurting your wallet.
    </p>
    <h4>Baraw</h4>
    <p>
      Brand new, higher-end hamburger restaurant — the kind where you order a bottle of wine and appetizers along with your burger. Also, serve excellent pasta. At the same time, it's reasonably cheap. Good for having dinner with friends in a pleasant environment.
    </p>
  </div>
);

export const query = graphql`
  query OradeaPostImages {
    cover: imageSharp(id: {regex: "/oradea-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 440) {
        ...GatsbyImageSharpSizes
      }
    },
    recife1: imageSharp(id: {regex: "/recife1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    borsoi1: imageSharp(id: {regex: "/borsoi1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    borsoi2: imageSharp(id: {regex: "/borsoi2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    borsoi3: imageSharp(id: {regex: "/borsoi3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    borsoi4: imageSharp(id: {regex: "/borsoi4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    borsoi5: imageSharp(id: {regex: "/borsoi5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    kaffe1: imageSharp(id: {regex: "/kaffe1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pinaco1: imageSharp(id: {regex: "/pinaco1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pinaco2: imageSharp(id: {regex: "/pinaco2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pinaco3: imageSharp(id: {regex: "/pinaco3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pinaco4: imageSharp(id: {regex: "/pinaco4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pinaco5: imageSharp(id: {regex: "/pinaco5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    mrhoppy1: imageSharp(id: {regex: "/mrhoppy1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    acaiemporio1: imageSharp(id: {regex: "/recife-acai-emporio1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    acaiemporio2: imageSharp(id: {regex: "/recife-acai-emporio2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    acaiemporio3: imageSharp(id: {regex: "/recife-acai-emporio3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    acaiemporio4: imageSharp(id: {regex: "/recife-acai-emporio4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;