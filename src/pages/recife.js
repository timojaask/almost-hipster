import React from "react"
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import PostHeader from "../components/PostHeader"
import { FootnoteLink, FootnoteList } from "../components/Footnotes"
import { ImageGrid } from "../components/ImageGrid"
import { ExternalLinks } from "../components/ExternalLinks"
import styles from "./blogpost.module.css"

export default ({ data }) => (
  <div>
    <Helmet>
      <title>Recife's best cafes, bars, and restaurants</title>
    </Helmet>
    <PostHeader coverImage={data.cover} name="Recife" date={"Mar 2018"} alt="Recife's best cafes, bars, and restaurants" />
    <div className={styles.headerSpacer}>&nbsp;</div>
    <p>
      I feel like I left a lot of Recife unexplored, but there a few places I can write home about. Most of the places in this post are from around Boa Viagem area since that's the neighborhood where I've stayed.
    </p>
    <h2>Coffee</h2>
    <p>
      Brazil is by far the largest producer of coffee in the world — producing one-third of all the coffee,<FootnoteLink index="1" /> so before coming here, I was pretty excited to see what kind of coffee culture the country has.
    </p>
    <p>
      To my surprise, the locals don't seem to appreciate the taste of coffee without adding a whole lot of sugar to it. If you order a “cappuccino” at a regular coffee shop in Recife, you will most commonly get served a coffee drink made of espresso, steamed milk, <strong>sugar</strong> and, <strong>cinnamon</strong>. You've been warned!
    </p>
    <p>
      Most common coffee shops São Braz and Delta Expresso [traditional Portuguese spelling of “espresso”<FootnoteLink index="2" />] are the local equivalents of Starbucks. However, there are a few third-wave coffee shops that prepare some excellent coffee drinks.
    </p>
    <p>
      My favorite drink — flat white — is mostly not known here, but asking for a cappuccino with more coffee and less milk, “cappuccino com mais cafe e menos leite,” works decently in the specialty coffee places.
    </p>
    <h4>Borsoi</h4>
    <p>
      Borsoi turned out to be my go-to place for a daily dose of coffee. They have two locations: one in Boa Viagem and one in Pina. Both are equally cozy, and the staff is always happy and seem to enjoy their job. Baristas are devoted to the art of making coffee, participate in competitions, and they can spend hours talking about it. Makes me wish I spoke better Portuguese!
    </p>
    <p>
      Both locations have excellent options for killing small hunger, such as sandwiches and local specialties. On weekdays in Pina location, they serve lunch of the day for R$25, which I've had a couple of times and it was delightful.
    </p>
    <p>
      One day we wanted to go for a coffee, and suddenly the power went off. Apparently, there was no electricity in 13 states of Brazil. We still decided to take a walk by the beach, because there was nothing to do at home anyway. We arrived at Borsoi and barista tells us that the espresso machine doesn't work, but he can make us some coffee. We asked if he can do it with milk, to which he said no, but he then changed his mind. He warmed up some milk on a gas stove, added some hot water, and stretched it by hand using a small French press. He then mixed it with some hand-ground, pour over coffee, and the result was so good it blew my mind. They also insisted that we don't pay for it (although, I just couldn't not tip).
    </p>
    <ImageGrid photos={[
      { image: data.borsoi1, alt: "Borsoi — specialty coffee shop in Recife" },
      { image: data.borsoi2, alt: "Borsoi — specialty coffee shop in Recife" },
      { image: data.borsoi3, alt: "Borsoi — specialty coffee shop in Recife" },
      { image: data.borsoi4, alt: "Borsoi — specialty coffee shop in Recife" },
      { image: data.borsoi5, alt: "Borsoi — specialty coffee shop in Recife" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/borsoicafeclube/" instagram="https://www.instagram.com/borsoicafeclube/" />
    <h4>Kaffe</h4>
    <p>
      Kaffe Torrefação e Treinamento is a coffee roasting and barista training shop, but they also serve coffee. What I like about this place is that you often can choose one of the two available bean varieties for your drink. Just like Borsoi, this is a very cozy place with friendly and skilled staff.
    </p>
    <ImageGrid photos={[
      { image: data.kaffe1, alt: "Kaffe — specialty coffee shop in Recife" },
    ]} />
    <ExternalLinks website="https://www.sympla.com.br/kaffett" facebook="https://www.facebook.com/kaffett/" instagram="https://www.instagram.com/kaffe.tt/" />
    <h4>Clandestino Café</h4>
    <p>
      I was so happy and sad to discover Clandestino Café on my last week in Recife! Get this — it's a specialty coffee shop built inside a functioning old-school ex-military bus. No kidding. It is very cozy, with creative decor inside (the photos do not do it justice). The owners, Mateus and Sara are passionate about teaching people about specialty coffee, they speak fluent English, and we've had a great conversation. They happily served me a flat white, which was a first for me in Recife, and it was everything I wanted it to be.
    </p>
    <ImageGrid photos={[
      { image: data.clandestino1, alt: "Clandestino Café — specialty coffee shop in Recife" },
      { image: data.clandestino2, alt: "Clandestino Café — specialty coffee shop in Recife" },
      { image: data.clandestino3, alt: "Clandestino Café — specialty coffee shop in Recife" },
      { image: data.clandestino4, alt: "Clandestino Café — specialty coffee shop in Recife" },
      { image: data.clandestino5, alt: "Clandestino Café — specialty coffee shop in Recife" },
    ]} />
    <ExternalLinks facebook="https://www.facebook.com/clandestino364/" instagram="https://www.instagram.com/clandestinocafe/" />
    <h2>Bars</h2>
    <h4>Pina Cocktails & Co</h4>
    <p>
      It's the only truly great cocktail bar that I know of in Recife. Located on a shady street with nothing else interesting around, and with no signs outside — a real speakeasy style. Inside you'll find a fantastic atmosphere with dimmed lights and cozy interior. The bartender, Luciano, is creative and always takes his time to listen to your preferences, and craft an off-the-menu drink just for your taste.
    </p>
    <p>
      They only take in 20 people per night, and you cannot come without a reservation. Reservations are made via WhatsApp. Roughly 30 minutes before the opening time you will receive a message with a password that you must tell to the bouncer upon arrival.
    </p>
    <ImageGrid photos={[
      { image: data.pinaco1, alt: "Pina Cocktails & Co — speakeasy bar in Recife" },
      { image: data.pinaco2, alt: "Pina Cocktails & Co — speakeasy bar in Recife" },
      { image: data.pinaco3, alt: "Pina Cocktails & Co — speakeasy bar in Recife" },
      { image: data.pinaco4, alt: "Pina Cocktails & Co — speakeasy bar in Recife" },
      { image: data.pinaco5, alt: "Pina Cocktails & Co — speakeasy bar in Recife" },
    ]} />
    <ExternalLinks website="https://www.pinacocktails.com" facebook="https://www.facebook.com/pinacocktails/" instagram="https://www.instagram.com/pinacocktails/" />
    <h4>Mr. Hoppy</h4>
    <p>
      A lively outdoor bar, serving only a small selection of on-tap craft beers (with around ten taps open on a typical night) and burgers. Great atmosphere and great beers. Sometimes they even have live music, but then it gets pretty crowded.
    </p>
    <ImageGrid photos={[
      { image: data.mrhoppy1, alt: "Mr. Hoppy — cool beer and burger bar in Recife" },
    ]} />
    <ExternalLinks website="http://mrhoppy.negocio.site" facebook="https://www.facebook.com/MrHoppyBoaViagem/" instagram="https://www.instagram.com/mrhoppyboaviagem/" />
    <h4>Be Hookah</h4>
    <p>
      A somewhat hidden outdoor hookah bar, with a decent selection of tobacco flavors. They serve all the typical alcoholic drinks, plus a few house specials.
    </p>
    <p>
      The most surprising part about this place is the fantastic burgers that you just have to try. The staff who's taking food orders can be pretty cranky and rude at times, which is very un-Brazilian, but it will be worth it.
    </p>
    <p>
      Be ready to present your ID at the entrance.
    </p>
    <ExternalLinks facebook="https://www.facebook.com/BeHookah/" instagram="https://www.instagram.com/behookah/" />
    <h2>Food</h2>
    <h4>Bercy</h4>
    <p>
      Bercy is a proper crepe restaurant, with a wide variety of savory and sweet crepes. Some dishes are irresistibly tasty.
    </p>
    <ImageGrid photos={[
      { image: data.bercy1, alt: "Bercy — crepe restaurant in Recife" },
      { image: data.bercy2, alt: "Bercy — crepe restaurant in Recife" },
      { image: data.bercy3, alt: "Bercy — crepe restaurant in Recife" },
    ]} credit={{ text: "Bercy", url: "https://www.facebook.com/bercycrepesesaladas/" }} />
    <ExternalLinks website="http://www.bercyvillage.com.br" facebook="https://www.facebook.com/bercycrepesesaladas/" instagram="https://www.instagram.com/bercy_village/" />
    <h4>Udon</h4>
    <p>
      Fixed price sushi buffet. Pick whatever you want from a wide variety of sushi, sashimi, and other Japanese dishes. There are several sushi buffet restaurants in Recife, but Udon is, in my opinion, the nicest.
    </p>
    <ImageGrid photos={[
      { image: data.udon1, alt: "Udon — sushi buffet restaurant in Recife" },
      { image: data.udon2, alt: "Udon — sushi buffet restaurant in Recife" },
      { image: data.udon3, alt: "Udon — sushi buffet restaurant in Recife" },
    ]} credit={{ text: "Udon", url: "https://www.facebook.com/UdonCozinhaOriental/" }} />
    <ExternalLinks website="https://udon.com.br" facebook="https://www.facebook.com/UdonCozinhaOriental/" instagram="https://www.instagram.com/udoncozinhaoriental/" />
    <h4>URSA Bar e Comedoria</h4>
    <p>
      URSA is a cool tiny bar and restaurant with funky interior and great drinks and food. In addition, their playlist would be very much approved by alternative music folks.
    </p>
    <ImageGrid photos={[
      { image: data.ursa1, alt: "URSA — alternative bar and restaurant in Recife" },
      { image: data.ursa2, alt: "URSA — alternative bar and restaurant in Recife" },
      { image: data.ursa3, alt: "URSA — alternative bar and restaurant in Recife" },
      { image: data.ursa4, alt: "URSA — alternative bar and restaurant in Recife" },
      { image: data.ursa5, alt: "URSA — alternative bar and restaurant in Recife" },
    ]} credit={{ text: "URSA Bar e Comedoria", url: "https://www.facebook.com/ursabarecomedoria/" }} />
    <ExternalLinks facebook="https://www.facebook.com/ursabarecomedoria/" instagram="https://www.instagram.com/ursa_barecomedoria/" />
    <h2>Other</h2>
    <h4>Açaí Empório Boa Viagem</h4>
    <p>
      Açaí is a big thing in Recife, but I've never been a huge fan of it until our friends introduced me to Açaí Empório — açaí self-service shop. They have lots of different flavors of açaí and things that go well with açaí! And it's delicious.
    </p>
    <p>
      The place itself is very nice — clean and cozy, the staff is super friendly, and they have a foosball table! What else would one want?
    </p>
    <ImageGrid photos={[
      { image: data.acaiemporio1, alt: "Acai Emporio — acai buffet place in Recife" },
      { image: data.acaiemporio2, alt: "Acai Emporio — acai buffet place in Recife" },
      { image: data.acaiemporio3, alt: "Acai Emporio — acai buffet place in Recife" },
      { image: data.acaiemporio4, alt: "Acai Emporio — acai buffet place in Recife" },
    ]} />
    <ExternalLinks website="http://acaiemporio.com.br" facebook="https://www.facebook.com/acaiemporio/" instagram="https://www.instagram.com/acaiemporio/" />
    <FootnoteList footnotes={[
      { index: "1", title: "Coffee — Wikipedia", url: "https://en.wikipedia.org/wiki/Coffee" },
      { index: "2", title: "Café expresso — Wikipedia", url: "https://pt.wikipedia.org/wiki/Café_expresso" },
    ]} />
    <ImageGrid photos={[
      { image: data.recife1, alt: "Beautiful Recife beach at sunset" },
    ]} />
  </div>
);

export const query = graphql`
  query RecifePostImages {
    cover: imageSharp(id: {regex: "/recife-cover/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
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
    },
    bercy1: imageSharp(id: {regex: "/recife-bercy1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    bercy2: imageSharp(id: {regex: "/recife-bercy2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    bercy3: imageSharp(id: {regex: "/recife-bercy3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    udon1: imageSharp(id: {regex: "/recife-udon1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    udon2: imageSharp(id: {regex: "/recife-udon2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    udon3: imageSharp(id: {regex: "/recife-udon3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    clandestino1: imageSharp(id: {regex: "/recife-clandestino1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    clandestino2: imageSharp(id: {regex: "/recife-clandestino2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    clandestino3: imageSharp(id: {regex: "/recife-clandestino3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    clandestino4: imageSharp(id: {regex: "/recife-clandestino4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    clandestino5: imageSharp(id: {regex: "/recife-clandestino5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    ursa1: imageSharp(id: {regex: "/recife-ursa1/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    ursa2: imageSharp(id: {regex: "/recife-ursa2/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    ursa3: imageSharp(id: {regex: "/recife-ursa3/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    ursa4: imageSharp(id: {regex: "/recife-ursa4/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
    ursa5: imageSharp(id: {regex: "/recife-ursa5/" }) {
      sizes(maxWidth: 700, maxHeight: 525) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`;