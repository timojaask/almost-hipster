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
      <title>Helsinki's best cafes, bars, and restaurants</title>
    </Helmet>
    <PostHeader coverImage={data.cover} name="Helsinki" date={"Oct 2016"} alt="Helsinki's best cafes, bars, and restaurants" />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
      I spent roughly one year living in Helsinki, and it became one of my favorite cities in the world. It's beautiful, neat, surrounded by wonderful nature and a sea. It also has a lot of great bars and restaurants to check out.
    </p>
    <h2>Coffee</h2>
    <p>
      Third-wave coffee shops are not one of the city's strongest points, but it's got a few great options. Finnish coffee culture is probably 99% filter coffee made at home or work. That's what I grew up with, and I hated it. However, places like Artisan Café make up for all the bad coffee in the country.
    </p>
    <h4>Artisan Café</h4>
    <p>
      Jani is the owner and one of the most devoted coffee makers I've had a pleasure to meet. He once told me, that for each drink that he makes, he wants it to be perfect. So he'll redo it as many times as necessary until he gets every detail just right before serving it to a customer. Devotion to the art speaks for itself once you get to taste his work. Artisan is my favorite.
    </p>
    <ImageGrid photos={[
      { image: data.artisan1, alt: "Artisan Café — specialty coffee shop in Helsinki" },
      { image: data.artisan2, alt: "Artisan Café — specialty coffee shop in Helsinki" },
      { image: data.artisan3, alt: "Artisan Café — specialty coffee shop in Helsinki" },
    ]} credit={{ text: "Artisan Café", url: "https://www.artisancafe.fi" }} />
    <ExternalLinks website="https://www.artisancafe.fi" facebook="https://www.facebook.com/artisanhelsinki/" instagram="https://www.instagram.com/artisanhelsinki/" />
    <h4>Johan & Nyström</h4>
    <p>
      This super cozy coffee shop is located on a beautiful Katajanokka island. Random-looking, but at the same time very stylish decor and brick walls create a wonderfully relaxing atmosphere and a unique place.
    </p>
    <ImageGrid photos={[
      { image: data.johannystrom1, alt: "Johan & Nyström — specialty coffee shop in Helsinki" },
      { image: data.johannystrom2, alt: "Johan & Nyström — specialty coffee shop in Helsinki" },
      { image: data.johannystrom3, alt: "Johan & Nyström — specialty coffee shop in Helsinki" },
      { image: data.johannystrom4, alt: "Johan & Nyström — specialty coffee shop in Helsinki" },
    ]} credit={{ text: "Johan & Nyström", url: "https://www.facebook.com/johanochnystrom.fi/" }} />
    <ExternalLinks website="https://johanochnystrom.fi" facebook="https://www.facebook.com/johanochnystrom.fi/" instagram="https://www.instagram.com/johanochnystrom/" />
    <h4>Fratello</h4>
    <p>
      This place is run by La Torrefazione, who have in total three locations in the city. They employ great baristas who are passionate about their craft, however, once in a while you might stumble upon a trainee, which mostly happens in one of the other locations in my personal experience.
    </p>
    <ImageGrid photos={[
      { image: data.fratello1, alt: "Fratello — specialty coffee shop in Helsinki" },
    ]} credit={{ text: "La Torrefazione", url: "https://www.facebook.com/latorrefinland/" }} />
    <ExternalLinks website="http://www.latorre.fi" facebook="https://www.facebook.com/latorrefinland/" instagram="https://www.instagram.com/latorrefazione/" />
    <h2>Bars</h2>
    <p>
      I love great cocktails, and I think Helsinki is the city that spoiled me in that regard. The four cocktail bars listed below are among the best I've been to in my life, competing with cities like New York, Tel Aviv, Barcelona, and Lisbon.
    </p>
    <h4>Trillby & Chadwick</h4>
    <p>
      One of my favorite speakeasy. Amazing old-school decor, dimmed lights, relaxing music, most pleasant service and fantastic cocktails. 4.9 / 5 rating on Facebook cannot lie.
    </p>
    <p>
      The place might be challenging to find, but once you're on the right street, look for a wall with black windows. Walk up a few stairs and get in. You should be able to figure it out from there.
    </p>
    <p>
      It is strictly forbidden to take photos inside of the bar, and when you walk out, you must use the back door.
    </p>
    <ExternalLinks website="www.trillbychadwick.fi" facebook="https://www.facebook.com/Trillby-Chadwick-1397791710487953/" instagram="https://www.instagram.com/trillbychadwick/" />
    <h4>Books & Antiques</h4>
    <p>
      Most intimate speakeasy, with only four small tables, candlelight and relaxing music. It used to be so that you couldn't enter this place directly. Instead, you had to first go to a bar next door, 100 Dogs, and ask a bartender to let you into Books & Antiques. He would use the phone to call next door and ask if there's space, and if so, you would have to wait a few minutes for them to prepare a table for you. Finally, he'll walk you around the corner and open the door, where you'll be greeted with a complimentary glass of sparkling wine.
    </p>
    <p>
      I haven't been to this bar for more than a year, and I've heard that the procedure changed a bit, and you might be able to walk straight in. Either way, the place is absolutely wonderful, with bartenders making top notch cocktails.
    </p>
    <ImageGrid photos={[
      { image: data.booksAntiques1, alt: "Books & Antiques — speakeasy bar in Helsinki" },
      { image: data.booksAntiques2, alt: "Books & Antiques — speakeasy bar in Helsinki" },
    ]} credit={{ text: "Books & Antiques", url: "https://www.facebook.com/Books-Antiques-172870279576969/" }} />
    <ExternalLinks website="https://www.sonofapunch.com/fi/ravintolat/books-antiques/" facebook="https://www.facebook.com/Books-Antiques-172870279576969/" />
    <h4>Pastor</h4>
    <p>
      In Pastor, they make my favorite Whisky Sour variation, called “Sour Dog.” The place feels very high-end, but with style, and drink prices are roughly the same as in other good bars. They also serve fantastic food, but it is very pricey, so I wouldn't eat there unless I had a business dinner.
    </p>
    <ImageGrid photos={[
      { image: data.pastor1, alt: "Pastor — cocktail bar in Helsinki" },
      { image: data.pastor2, alt: "Pastor — cocktail bar in Helsinki" },
      { image: data.pastor3, alt: "Pastor — cocktail bar in Helsinki" },
    ]} credit={{ text: "Pastor", url: "https://www.facebook.com/pastorhelsinki/" }} />
    <ExternalLinks website="http://www.pastorrestaurant.fi" facebook="https://www.facebook.com/pastorhelsinki/" instagram="https://www.instagram.com/pastorhelsinki/" />
    <h4>Liberty or Death</h4>
    <p>
      Great, speakeasy-inspired cocktail bar, with, surprisingly, hip-hop music playing in the background, which I really like. The place is small and gets full quick, so avoid Fridays and Saturdays.
    </p>
    <ImageGrid photos={[
      { image: data.libertyOrDeath1, alt: "Liberty or Death — cocktail bar in Helsinki" },
      { image: data.libertyOrDeath2, alt: "Liberty or Death — cocktail bar in Helsinki" },
    ]} credit={{ text: "Liberty or Death", url: "https://www.facebook.com/libertyordeathbar/" }} />
    <ExternalLinks website="https://www.sonofapunch.com/fi/ravintolat/liberty-or-death/" facebook="https://www.facebook.com/libertyordeathbar/" />
    <h4>Kaisla</h4>
    <p>
      Big beer bar, with a large variety of beers, and helpful staff.
    </p>
    <ImageGrid photos={[
      { image: data.kaisla1, alt: "Kaisla — taproom in Helsinki" },
    ]} credit={{ text: "Kaisla", url: "https://www.raflaamo.fi/en/helsinki/kaisla" }} />
    <ExternalLinks website="https://www.raflaamo.fi/en/helsinki/kaisla" />
    <h2>Food:</h2>
    <p>
      There are so many excellent places to eat in Helsinki, that it would make for a very long blog post if I tried to cover it all. And I'd probably fail at that. So here are a few of my personal favorites.
    </p>
    <h4>Block By Dylan</h4>
    <p>
      A perfect Saturday brunch place! And for all you USA folks out there, in Finland brunch doesn't include alcohol by default. But it does come with unlimited food — a wide variety of starters, main courses, desserts, non-alcoholic drinks — pick whatever you want for a fixed price. And no one stops you from getting a bottle of sparkling for an additional fee. A must have.
    </p>
    <ImageGrid photos={[
      { image: data.blockDylan1, alt: "Block By Dylan — brunch restaurant in Helsinki" },
      { image: data.blockDylan2, alt: "Block By Dylan — brunch restaurant in Helsinki" },
      { image: data.blockDylan3, alt: "Block By Dylan — brunch restaurant in Helsinki" },
      { image: data.blockDylan4, alt: "Block By Dylan — brunch restaurant in Helsinki" },
      { image: data.blockDylan5, alt: "Block By Dylan — brunch restaurant in Helsinki" },
    ]} credit={{ text: "Block By Dylan", url: "https://www.dylan.fi/block/" }} />
    <ExternalLinks website="https://www.dylan.fi/block/" facebook="https://www.facebook.com/blockhelsinki/" instagram="https://www.instagram.com/blockbydylan/" />
    <h4>Momotoko</h4>
    <p>
      Fantastic ramen place in the heart of the city. This is the restaurant that made me fall in love with ramen.
    </p>
    <ImageGrid photos={[
      { image: data.momotoko1, alt: "Momotoko — ramen restaurant in Helsinki" },
      { image: data.momotoko2, alt: "Momotoko — ramen restaurant in Helsinki" },
      { image: data.momotoko3, alt: "Momotoko — ramen restaurant in Helsinki" },
      { image: data.momotoko4, alt: "Momotoko — ramen restaurant in Helsinki" },
      { image: data.momotoko5, alt: "Momotoko — ramen restaurant in Helsinki" },
    ]} credit={{ text: "Momotoko", url: "http://www.momotoko.com" }} />
    <ExternalLinks website="http://www.momotoko.com" facebook="https://www.facebook.com/Momotoko-1178106338995766/" />
    <h4>Samrat</h4>
    <p>
      Samrat is a cozy and neat restaurant, with most delicious Indian food, and it won't leave your clothes smelling like curry for the rest of the day. Curry dishes and naan bread to die for.
    </p>
    <ImageGrid photos={[
      { image: data.samrat1, alt: "Samrat — Indian restaurant in Helsinki" },
    ]} credit={{ text: "TripAdvisor — Kati M", url: "https://www.tripadvisor.com/members/156katim" }} />
    <ExternalLinks website="http://www.samrat.fi" />
    <h4>Skiffer</h4>
    <p>
      Very creative and tasty pizzas, in a rustic, sailor-themed restaurant. Ice cream or strawberries on a pizza? You have to try!
    </p>
    <p>
      They've got a few locations in Helsinki. Erottaja location is the easiest to get to from city center, but if it's summer and wanna spend a great time in a sea environment, head over to Liuskaluoto island, and enjoy the sun, beer, the sea, and some fantastic pizza.
    </p>
    <ImageGrid photos={[
      { image: data.skiffer1, alt: "Skiffer — pizza restaurant in Helsinki" },
      { image: data.skiffer2, alt: "Skiffer — pizza restaurant in Helsinki" },
      { image: data.skiffer3, alt: "Skiffer — pizza restaurant in Helsinki" },
      { image: data.skiffer4, alt: "Skiffer — pizza restaurant in Helsinki" },
      { image: data.skiffer5, alt: "Skiffer — pizza restaurant in Helsinki" },
    ]} credit={{ text: "Skiffer", url: "https://www.facebook.com/skifferrestaurant/" }} />
    <ExternalLinks website="http://www.skiffer.fi" facebook="https://www.facebook.com/skifferrestaurant/" instagram="https://www.instagram.com/skifferrestaurant/" />
    <h4>Baskeri & Basso</h4>
    <p>
      I've only been to Baskeri & Basso once, but it left an unforgettable impression on me. We had a romantic dinner in this beautiful candle-light lit place, with lots of great wine and food, and nice conversations with the staff and the owner of the restaurant. They even gave us a home-baked baguette to go, on the house.
    </p>
    <p>
      Note that this place is high-end, and is more suitable for a special occasion, as a typical meal would probably end up costing twice as much as other places on this list.
    </p>
    <ImageGrid photos={[
      { image: data.basbas1, alt: "Baskeri & Basso — high-end restaurant in Helsinki" },
      { image: data.basbas2, alt: "Baskeri & Basso — high-end restaurant in Helsinki" },
      { image: data.basbas3, alt: "Baskeri & Basso — high-end restaurant in Helsinki" },
      { image: data.basbas4, alt: "Baskeri & Basso — high-end restaurant in Helsinki" },
      { image: data.basbas5, alt: "Baskeri & Basso — high-end restaurant in Helsinki" },
    ]} credit={{ text: "Baskeri & Basso", url: "http://basbas.fi/bistro/" }} />
    <ExternalLinks website="http://basbas.fi/bistro/" facebook="https://www.facebook.com/BasBasOfficial/" instagram="https://www.instagram.com/basbasofficial/" />
    <h4>Holiday</h4>
    <p>
      I've had the most amazing veef (veggie beef substitute) dish ever in Holiday. Plenty of outdoor seating, perfect for nice summer evenings, on a beautiful Katajanokka island.
    </p>
    <ImageGrid photos={[
      { image: data.holiday1, alt: "Holiday — restaurant with great views in Helsinki" },
      { image: data.holiday2, alt: "Holiday — restaurant with great views in Helsinki" },
      { image: data.holiday3, alt: "Holiday — restaurant with great views in Helsinki" },
      { image: data.holiday4, alt: "Holiday — restaurant with great views in Helsinki" },
      { image: data.holiday5, alt: "Holiday — restaurant with great views in Helsinki" },
    ]} credit={{ text: "Holiday", url: "https://www.facebook.com/HolidayBarHelsinki/" }} />
    <ExternalLinks website="http://holiday-bar.fi" facebook="https://www.facebook.com/HolidayBarHelsinki/" instagram="https://www.instagram.com/holidaybarhelsinki/" />
    <br />
    <br />
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
    johannystrom1: imageSharp(id: {regex: "/helsinki-johan-nystrom1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    johannystrom2: imageSharp(id: {regex: "/helsinki-johan-nystrom2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    johannystrom3: imageSharp(id: {regex: "/helsinki-johan-nystrom3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    johannystrom4: imageSharp(id: {regex: "/helsinki-johan-nystrom4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    fratello1: imageSharp(id: {regex: "/helsinki-fratello/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    booksAntiques1: imageSharp(id: {regex: "/helsinki-books-antiques1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    booksAntiques2: imageSharp(id: {regex: "/helsinki-books-antiques2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    pastor1: imageSharp(id: {regex: "/helsinki-pastor1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    pastor2: imageSharp(id: {regex: "/helsinki-pastor2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    pastor3: imageSharp(id: {regex: "/helsinki-pastor3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    libertyOrDeath1: imageSharp(id: {regex: "/helsinki-liberty-death1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    libertyOrDeath2: imageSharp(id: {regex: "/helsinki-liberty-death2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    kaisla1: imageSharp(id: {regex: "/helsinki-kaisla1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blockDylan1: imageSharp(id: {regex: "/helsinki-block-dylan1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blockDylan2: imageSharp(id: {regex: "/helsinki-block-dylan2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blockDylan3: imageSharp(id: {regex: "/helsinki-block-dylan3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blockDylan4: imageSharp(id: {regex: "/helsinki-block-dylan4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    blockDylan5: imageSharp(id: {regex: "/helsinki-block-dylan5/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    momotoko1: imageSharp(id: {regex: "/helsinki-momotoko1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    momotoko2: imageSharp(id: {regex: "/helsinki-momotoko2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    momotoko3: imageSharp(id: {regex: "/helsinki-momotoko3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    momotoko4: imageSharp(id: {regex: "/helsinki-momotoko4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    momotoko5: imageSharp(id: {regex: "/helsinki-momotoko5/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    samrat1: imageSharp(id: {regex: "/helsinki-samrat1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    skiffer1: imageSharp(id: {regex: "/helsinki-skiffer1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    skiffer2: imageSharp(id: {regex: "/helsinki-skiffer2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    skiffer3: imageSharp(id: {regex: "/helsinki-skiffer3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    skiffer4: imageSharp(id: {regex: "/helsinki-skiffer4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    skiffer5: imageSharp(id: {regex: "/helsinki-skiffer5/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    basbas1: imageSharp(id: {regex: "/helsinki-basbas1/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    basbas2: imageSharp(id: {regex: "/helsinki-basbas2/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    basbas3: imageSharp(id: {regex: "/helsinki-basbas3/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    basbas4: imageSharp(id: {regex: "/helsinki-basbas4/" }) {
      sizes(maxWidth: 700, maxHeight: 525, cropFocus: CENTER) {
        ...GatsbyImageSharpSizes
      }
    },
    basbas5: imageSharp(id: {regex: "/helsinki-basbas5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    holiday1: imageSharp(id: {regex: "/helsinki-holiday1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    holiday2: imageSharp(id: {regex: "/helsinki-holiday2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    holiday3: imageSharp(id: {regex: "/helsinki-holiday3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    holiday4: imageSharp(id: {regex: "/helsinki-holiday4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    holiday5: imageSharp(id: {regex: "/helsinki-holiday5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;


