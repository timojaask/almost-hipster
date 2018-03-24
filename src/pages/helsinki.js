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
Trillby & Chadwick
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
    ]} credit={{ text: "Artisan Café", url: "https://www.artisancafe.fi" }} />
    <h4>Johan & Nyström</h4>
    <p>
      This super cozy coffee shop is located on a beautiful Katajanokka island. Random-looking, but at the same time very stylish decor and brick walls create a wonderful relaxing atmosphere, and a unique place.
    </p>
    <ImageGrid photos={[
      data.johannystrom1,
      data.johannystrom2,
      data.johannystrom3,
      data.johannystrom4,
    ]} credit={{ text: "Johan & Nyström", url: "https://www.facebook.com/johanochnystrom.fi/" }} />
    <h4>Fratello</h4>
    <p>
      This place is run by La Torrefazione, who have in total three locations in the city. They employ great baristas who are passionate about their craft, however, once in a while you might stumble upon a trainee, which mostly happens in one of the other locations in my personal experience.
    </p>
    <ImageGrid photos={[
      data.fratello1,
    ]} credit={{ text: "La Torrefazione", url: "https://www.facebook.com/latorrefinland/" }} />
    <h2>Bars</h2>
    <p>
      I love great cocktails, and I think Helsinki is the city that really spoiled me in that regard. The four cocktail bars listed below are among the best I've been to in my life, competing with cities like New York, Tel Aviv, Barcelona, and Lisbon.
    </p>
    <h4>Trillby & Chadwick</h4>
    <p>
      One of my favorite speakeasys. Amazing old-school decor, dimmed lights, relaxing music, most pleasant service and fantastic cocktails. 4.9 / 5 rating on Facebook cannot lie.
    </p>
    <p>
      The place might be challenging to find, but once you're on the right street, find a wall with black windows. Walk up a few stairs and get in. You should be able to figure it out from there.
    </p>
    <p>
      It is strictly forbidden to take photos inside of the bar, and when you walk out, you must use the back door.
    </p>
    <h4>Books & Antiques</h4>
    <p>
      Most intimate speakeasy, with only four small tables, candle light and relaxing music. It used to be so that you couldn't enter this place directly. Instead, you had to first go to a bar next door, 100 Dogs, and ask a bartender to let you into Books & Antiques. He would the use the phone to call next door and ask if there's space, and if so, you would have to wait a few minutes for them to prepare a table for you. Finally, he'll walk you around the corner and open the door, where you'll be greeted with a complementary glass of sparkling wine.
    </p>
    <p>
      I haven't been to this bar in more than a year, and I've heard that the procedure changed a bit, and you might be able to walk straight in. Either way, the place is absolutely wonderful, with bartenders making top notch cocktails.
    </p>
    <ImageGrid photos={[
      data.booksAntiques1,
      data.booksAntiques2,
    ]} credit={{ text: "Books & Antiques", url: "https://www.facebook.com/Books-Antiques-172870279576969/" }} />
    <h4>Pastor</h4>
    <p>
      In Pastor they make my favorite Whisky Sour variation, called “Sour Dog”. The place feels very high-end, but with style, and drink prices are roughly the same as in other good places. They also serve amazing food, but it is very pricy, so I wouldn't eat there unless I had a business dinner.
    </p>
    <ImageGrid photos={[
      data.pastor1,
      data.pastor2,
      data.pastor3,
    ]} credit={{ text: "Pastor", url: "https://www.facebook.com/pastorhelsinki/" }} />
    <h4>Liberty or Death</h4>
    <p>
      Great, speakeasy inspired cocktail bar, with, surprisingly, hip-hop music playing on the background, which I really like. The place is small and gets full really quick, so avoid Fridays and Saturdays.
    </p>
    <ImageGrid photos={[
      data.libertyOrDeath1,
      data.libertyOrDeath2,
    ]} credit={{ text: "Liberty or Death", url: "https://www.facebook.com/libertyordeathbar/" }} />
    <h4>Kaisla</h4>
    <p>
      Big beer bar, with large variety of beers, and helpful staff.
    </p>
    <ImageGrid photos={[
      data.kaisla1,
    ]} credit={{ text: "Kaisla", url: "https://www.raflaamo.fi/en/helsinki/kaisla" }} />
    <h2>Food:</h2>
    <p>
      There are so many great places to eat in Helsinki, that it would make for a very long blog post if I tried to cover it all. And I'd probably fail at that. So here are a few of my personal favorites.
    </p>
    <h4>Block By Dylan</h4>
    <p>
      A perfect Saturday brunch place! And for all you USA folks out there, in Finland brunch doesn't include alcohol by default. But it does include unlimited food — a wide variety of starters, main courses, deserts, non-alcoholic drinks — pick whatever you want for a fixed price. And no one stops you from getting a bottle of sparkling for an additional fee. A must have.
    </p>
    <ImageGrid photos={[
      data.blockDylan1,
      data.blockDylan2,
      data.blockDylan3,
      data.blockDylan4,
      data.blockDylan5,
    ]} credit={{ text: "Block By Dylan", url: "https://www.dylan.fi/block/" }} />
    <h4>Momotoko</h4>
    <p>
      Fantastic ramen place in the heart of the city. This is the restaurant that made me fall in love with ramen.
    </p>
    <ImageGrid photos={[
      data.momotoko1,
      data.momotoko2,
      data.momotoko3,
      data.momotoko4,
      data.momotoko5,
    ]} credit={{ text: "Momotoko", url: "http://www.momotoko.com" }} />
    <h4>Samrat</h4>
    <p>
    </p>
    <h4>Piece'n'Love</h4>
    <p>
    </p>
    <h4>Baskeri & Basso</h4>
    <p>
    </p>
    <h4>Holiday</h4>
    <p>
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
  }
`;


