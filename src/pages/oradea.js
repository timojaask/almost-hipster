import React from "react";
import Img from "gatsby-image";
import Helmet from 'react-helmet';
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import { ExternalLinks } from "../components/ExternalLinks"
import styles from "./blogpost.module.css";

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Oradea's best cafes, bars, and restaurants</title>
    </Helmet>
    <PostHeader coverImage={data.cover} name="Oradea" date={"Jan 2018"} alt="Oradea's best cafes, bars, and restaurants" />
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
    <ImageGrid photos={[
      { image: data.streetCoffee1, alt: "Street Coffee Roasters — specialty coffee shop in Oradea" },
      { image: data.streetCoffee2, alt: "Street Coffee Roasters — specialty coffee shop in Oradea" },
      { image: data.streetCoffee3, alt: "Street Coffee Roasters — specialty coffee shop in Oradea" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/streetcoffeeroasters/" />
    <h4>Genus Coffee</h4>
    <p>
      At the time of writing, Genus wasn't even a physical shop. They had the whole espresso machine and grinder set up on top of a bicycle in a city park. Don't let that little detail put you off because the coffee they make is heavenly. Talk to the owner when you stop by, he's a very nice guy and can talk a lot about coffee-making business.
    </p>
    <ImageGrid photos={[
      { image: data.genusCoffee1, alt: "Genus Coffee — specialty coffee shop in Oradea" },
      { image: data.genusCoffee2, alt: "Genus Coffee — specialty coffee shop in Oradea" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/genuscoffee/" instagram="https://www.instagram.com/genuscoffee/" />
    <h2>Bars</h2>
    <h4>Moszkva</h4>
    <p>
      Moszkva reminds me of some of the ruin bars in Budapest. Located in an old building, with a large staircase, long hallways, balconies, different rooms with random furniture and trashy/artsy decor. Great for having a few beers with friends.
    </p>
    <ImageGrid photos={[
      { image: data.moszkva1, alt: "Moszkva — cool bar in Oradea" },
    ]} />
    <ExternalLinks website="http://moszkvacafe.business.site" facebook="https://www.facebook.com/MoszkvaCafe/" instagram="https://www.instagram.com/moszkvacafe/" />
    <h4>Gekko Pub</h4>
    <p>
      Similar style to Moszkva, with lots of seemingly random decorations all over the place, and a nice inner yard area. Darts and foosball for your entertainment.
    </p>
    <ImageGrid photos={[
      { image: data.gekko1, alt: "Gekko Pub — cool bar in Oradea" },
      { image: data.gekko2, alt: "Gekko Pub — cool bar in Oradea" },
      { image: data.gekko3, alt: "Gekko Pub — cool bar in Oradea" },
      { image: data.gekko4, alt: "Gekko Pub — cool bar in Oradea" },
    ]} credit={{ text: "Gekko Pub", url: "https://www.facebook.com/GekkoNagyvarad/" }} />
    <ExternalLinks facebook="https://www.facebook.com/GekkoNagyvarad/" instagram="https://www.instagram.com/gekkopub/" />
    <h4>Kosher</h4>
    <p>
      Quite, small and cozy — a perfect place to relax with friends over hummus and a couple of bottles of wine.
    </p>
    <ExternalLinks facebook="https://www.facebook.com/KosherWineCoffeeAndJazz/" />
    <h2>Food</h2>
    <h4>ReWine</h4>
    <p>
      High-end mostly wine-focused restaurant. Come here for amazing wine and snacks. They also serve pretty good espresso-based drinks and a fantastic Saturday brunch.
    </p>
    <ImageGrid photos={[
      { image: data.rewine1, alt: "ReWine — wine restaurant in Oradea" },
      { image: data.rewine2, alt: "ReWine — wine restaurant in Oradea" },
      { image: data.rewine3, alt: "ReWine — wine restaurant in Oradea" },
    ]} />
    <ExternalLinks website="https://www.rewine.ro" facebook="https://www.facebook.com/rewine.ro/" instagram="https://www.instagram.com/rewine.ro/" />
    <h4>Spoon</h4>
    <p>
      The restaurant is hanging literally above the river, with floor to ceiling windows and great views. The food is excellent, and the three-course 35 lei business lunch is a steal.
    </p>
    <ImageGrid photos={[
      { image: data.spoon1, alt: "Spoon — hign-end restaurant in Oradea" },
      { image: data.spoon2, alt: "Spoon — hign-end restaurant in Oradea" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/spoonbarandgrill/" instagram="https://www.instagram.com/mrhoppyboaviagem/" />
    <h4>Suvlaki</h4>
    <p>
      Some of the best Greek food restaurants I've ever been to, with friendly staff, pretty interior, and very low prices. I used to come here almost every other day for lunch.
    </p>
    <ImageGrid photos={[
      { image: data.suvlaki1, alt: "Suvlaki — Greek food restaurant in Oradea" },
      { image: data.suvlaki2, alt: "Suvlaki — Greek food restaurant in Oradea" },
      { image: data.suvlaki3, alt: "Suvlaki — Greek food restaurant in Oradea" },
    ]} credit={{ text: "Suvlaki", url: "https://www.facebook.com/Suvlaki-Grill-House-1157508237602697/" }} />
    <ExternalLinks facebook="https://www.facebook.com/Suvlaki-Grill-House-1157508237602697/" />
    <h4>Wok'n Roll</h4>
    <p>
      Wok, soups, and noodles — great restaurant for a quick lunch without hurting your wallet.
    </p>
    <ImageGrid photos={[
      { image: data.woknroll1, alt: "Wok'n Roll — wok restaurant in Oradea" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/wokandrolloradea/" />
    <h4>Baraw</h4>
    <p>
      Brand new, higher-end hamburger restaurant — the kind where you order a bottle of wine and appetizers along with your burger. Also, serve excellent pasta. At the same time, it's reasonably cheap. Good for having dinner with friends in a pleasant environment.
    </p>
    <ImageGrid photos={[
      { image: data.baraw1, alt: "Baraw — high-end hamburger restaurant in Oradea" },
      { image: data.baraw2, alt: "Baraw — high-end hamburger restaurant in Oradea" },
      { image: data.baraw3, alt: "Baraw — high-end hamburger restaurant in Oradea" },
    ]} credit={{ text: "Baraw", url: "https://www.facebook.com/BarawCafe/" }} />
    <ExternalLinks facebook="https://www.facebook.com/BarawCafe/" />
    <br />
    <br />
  </div>
);

export const query = graphql`
  query OradeaPostImages {
    cover: imageSharp(id: {regex: "/oradea-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 440) {
        ...GatsbyImageSharpSizes
      }
    },
    streetCoffee1: imageSharp(id: {regex: "/oradea-street-coffee1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    streetCoffee2: imageSharp(id: {regex: "/oradea-street-coffee2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    streetCoffee3: imageSharp(id: {regex: "/oradea-street-coffee3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    genusCoffee1: imageSharp(id: {regex: "/oradea-genus1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    genusCoffee2: imageSharp(id: {regex: "/oradea-genus2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    moszkva1: imageSharp(id: {regex: "/oradea-moszkva1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    gekko1: imageSharp(id: {regex: "/oradea-gekko1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    gekko2: imageSharp(id: {regex: "/oradea-gekko2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    gekko3: imageSharp(id: {regex: "/oradea-gekko3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    gekko4: imageSharp(id: {regex: "/oradea-gekko4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rewine1: imageSharp(id: {regex: "/oradea-rewine1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rewine2: imageSharp(id: {regex: "/oradea-rewine2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    rewine3: imageSharp(id: {regex: "/oradea-rewine3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    spoon1: imageSharp(id: {regex: "/oradea-spoon1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    spoon2: imageSharp(id: {regex: "/oradea-spoon2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    suvlaki1: imageSharp(id: {regex: "/oradea-suvlaki1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    suvlaki2: imageSharp(id: {regex: "/oradea-suvlaki2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    suvlaki3: imageSharp(id: {regex: "/oradea-suvlaki3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    woknroll1: imageSharp(id: {regex: "/oradea-woknroll1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    baraw1: imageSharp(id: {regex: "/oradea-baraw1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    baraw2: imageSharp(id: {regex: "/oradea-baraw2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    baraw3: imageSharp(id: {regex: "/oradea-baraw3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;

