import React from "react";
import Img from "gatsby-image";
import PostHeader from "../components/PostHeader";
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import styles from "./recife.module.css";

const footnotes = [
  { index: "1", title: "Coffee — Wikipedia", url: "https://en.wikipedia.org/wiki/Coffee" },
  { index: "2", title: "Café expresso — Wikipedia", url: "https://pt.wikipedia.org/wiki/Café_expresso" },
]

export default ({ data }) => (
  <div>
    <PostHeader coverImage={data.cover} name="Recife" />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
      I feel like I left a lot of Recife unexplored, but there a few places I can write home about. Most of the places in this post are from around Boa Viagem area since that's the neighborhood where I've stayed.
    </p>
    <h2>Coffee</h2>
    <p>
      Brazil is by far the largest producer of coffee in the world — producing one-third of all the coffee,<FootnoteLink index="1" /> so before coming here, I was pretty excited to see what kind of coffee culture the country has.
    </p>
    <p>
      To my surprise, the locals don't seem to appreciate the taste of coffee without adding a whole lot of sugar to it. If you order a “cappuccino” at a regular coffee shop in Recife, you will most commonly get served a coffee drink made with espresso, steamed milk, <strong>sugar</strong> and, <strong>cinnamon</strong>. You've been warned!
    </p>
    <p>
      Most common coffee shops São Braz and Delta Expresso [traditional Portuguese spelling of “espresso”<FootnoteLink index="2" />] are the local equivalents of Starbucks. However, there are a few third-wave coffee shops that prepare some excellent coffee drinks.
    </p>
    <p>
      My favorite drink — flat white — is not known here, but asking for a cappuccino with more coffee and less milk, “cappuccino com mais cafe e menos leite,” works pretty well in the specialty coffee places.
    </p>
    <h4>Borsoi</h4>
    <p>
      Borsoi turned out to be my go-to place for a daily dose of coffee. They have two locations: one in Boa Viagem and one in Pina. Both are equally cozy, and the staff is always happy and seem to enjoy their job. Baristas are devoted to the art of making coffee, participate in competitions, and they can spend hours talking about it. Makes me wish I spoke better Portuguese!
    </p>
    <p>
      Both locations have excellent options for killing small hunger, such as sandwiches and local specialties. On weekdays in Pina location, they serve lunch of the day for R$25, which I've had a couple of times and it was delightful.
    </p>
    <h4>Kaffe</h4>
    <p>
      Kaffe Torrefação e Treinamento is a coffee roasting and barista training shop, but they also serve coffee. What I like about this place is that you often can choose one of the two available bean varieties for your drink. Just like Borsoi, this is a very cozy place with friendly and skilled staff.
    </p>
    <h4>Castigliani</h4>
    <p>
      Castigliani Cafés Especiais is another great coffee shop, located near Casa Forte in the North West part of town. Unfortunately, I've only gone there once, but they had great coffee, and as far as I remember some vegan snacks and raw cake options.
    </p>
    <h2>Bars</h2>
    <h4>Pina Cocktails & Co</h4>
    <p>
      The only truly great cocktail bar I know of in Recife. Located on a shady street with nothing else interesting around, with no signs outside, in real speakeasy style. Fantastic atmosphere with dimmed lights and cozy interior. The bartender, Luciano, is creative and always takes his time to listen to your preferences, to craft an off-the-menu drink just for your taste.
    </p>
    <p>
      They only take in 20 people per night, and you can only enter with a reservation. Reservations are made via WhatsApp. Roughly 30 minutes before the opening time you will receive a message with a password that you must tell to the bouncer upon arrival.
    </p>
    <h4>Mr. Hoppy</h4>
    <p>
      A lively outdoor bar, serving only a small selection of on-tap craft beers (with around ten taps open on a typical night) and burgers. It gets very crowded during weekends.
    </p>
    <h4>Be Hookah</h4>
    <p>
      A somewhat hidden outdoor hookah bar, with a decent selection of tobacco flavors. They serve typical alcoholic drinks and a couple of special house drinks.
    </p>
    <p>
      The most surprising part about this place is the fantastic burgers that you just have to try. The staff who's taking food orders can be pretty cranky and rude at times, which is very un-Brazilian, but it will be worth it.
    </p>
    <p>
      Be ready to present your ID at the entrance.
    </p>
    <FootnoteList footnotes={footnotes} />
  </div>
);

export const query = graphql`
  query RecifePostImages {
      cover: imageSharp(id: {regex: "/recife-cover.jpg/" }) {
      sizes(maxWidth: 700, maxHeight: 300) {
      ...GatsbyImageSharpSizes
    }
    }
  }
`;