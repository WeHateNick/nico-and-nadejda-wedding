import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
import honeyFundLogo from "../public/images/HoneyFund-logo.svg";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const cx = classNames.bind(styles);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nico and Nadejda&apos;s Wedding</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>Nicolas and Nadejda</h1>
          <h2 className={styles.subtitle}>&ndash; September 3, 2022 &ndash;</h2>
        </div>
      </main>
      <div className={styles.hero__container}>
        <div className={styles.hero__tagline}>
          <p>You&apos;re invited to our wedding</p>
        </div>
        <div className={styles.hero__image__container}>
          <Image
            className={styles.hero__image}
            src={heroImage}
            alt="Nico and Nadejda"
            width={1728}
            height={1152}
          />
        </div>
      </div>
      <section className={styles.invite__container}>
        <div className={styles.invite__primary}>
          <p>
            We would be honored to celebrate our special day with you.
            We&apos;re so excited to get married in the company of our friends
            and family. Find all the details you need to know about our big day
            here.
          </p>
        </div>
        <div className={styles.invite__secondary}>
          <p>
            We&apos;ll kick things off with a ceremony and vows followed by a
            reception.
          </p>
        </div>
      </section>
      <div className={styles.content__secondary}>
        <section className={styles.details__container}>
          <div className={styles.details__when}>
            <h2>When</h2>
            <p className={styles.details__highlight}>
              Saturday, September 3, 2022
            </p>
            <p>Ceremony: 4:30 PM</p>
            <p>Reception: 5:30 PM</p>
            <a className={styles.details__action} href="rsvp" alt="RSVP">
              <span>Details and RSVP</span> <ChevronRightIcon />
            </a>
          </div>
          <div className={styles.details__where}>
            <h2>Where</h2>
            <p className={styles.details__highlight}>Château de Montmélian</p>
            <p>Rue de Montmélian</p>
            <p>77210 Samoreau, France</p>
            <a
              className={styles.details__action}
              href="getting-there"
              alt="How to get there"
            >
              <span>How to get there</span> <ChevronRightIcon />
            </a>
          </div>
        </section>
        <section className={styles.registry}>
          <div className={styles.registry__title}>
            <h2>Our registry</h2>
          </div>
          <div className={styles.registry__body}>
            <p>
              We are honored you will share in our special day. Your presence is
              our gift, so please don&apos;t feel obligated to participate.
            </p>
            <p>
              We&apos;re lucky to already have a home full of everything we
              need, so please enjoy browsing our Honeyfund wish list, where you
              can contribute funds to our dream honeymoon or future home. It’s
              safe, secure, and easy. Feel free to contact us via the link below
              if you need more info about how it works.
            </p>
          </div>
          <a
            className={styles.registry__image}
            href="https://www.honeyfund.com/Registry?id=1178343&rid=4110938&t=1"
          >
            <Image
              src={honeyFundLogo}
              alt="Visit our honeyfund at Honeyfund.com"
              width={200}
              height={100}
            />
          </a>
          <div className={styles.registry__link}>
            <Link
              href="https://www.honeyfund.com/Registry?id=1178343&rid=4110938&t=1"
              alt="Visit our honeyfund at Honeyfund.com"
            >
              Visit our registry
            </Link>
          </div>
        </section>
        <section className={styles.profiles__container}>
          <div
            className={cx(
              "profiles__single__container",
              "profiles__single--bride"
            )}
          >
            <h2 className={styles.profiles__single__title}>The bride</h2>
            <div className={styles.profiles__single__content}>
              <p>
                I met Nico almost five years ago and have been smitten with him
                ever since. After a few years of dating, we moved in together.
                This happened to be a week before the pandemic struck which
                meant that we went from seeing each other a few times a week to
                being in each other&apos;s company around the clock. Despite the
                abrupt changes, I found myself enjoying life together and deeply
                in love. His unwavering support and affection makes my world
                brighter and fuller. I&apos;m almost certain we&apos;ve laughed
                together every single day and I&apos;m so grateful to have him
                as my partner in life.
              </p>
              <p>
                Not only do I get to marry my favorite person in the entire
                world, I also get to marry into his family who happen to be some
                of the kindest, funnest and most loving people I know. I&apos;m
                so grateful to them for welcoming me into their brood ever since
                my very first visit to Bolivia.
              </p>
              <p>
                For those of you who can join us, we can&apos;t wait to share
                this special day with you. We&apos;re excited to host you in our
                family&apos;s home in France where I spent many glowing summers
                growing up. This space has allowed our dispersed family to come
                together every year and revel in connection, community and the
                joy of being together. It would be a dream to share and amplify
                that same energy with you all next September.
              </p>
              <p>
                We&apos;re planning on having a lamb roast and bonfire on the
                farm the day before the wedding ceremony along with a farewell
                brunch on Sunday to close out the weekend&apos;s festivities. We
                recommend staying in the surrounding area if you&apos;re
                planning on joining us for those activities. Otherwise, our
                venue is about an hour away from Paris so staying there is
                definitely an option. We can help arrange transport from your
                lodgings in the surrounding area or Paris as we get closer to
                the big day. We hope to see you there!
              </p>
              <p>&ndash; Nadejda Orlowski</p>
            </div>
          </div>
          <div
            className={cx(
              "profiles__single__container",
              "profiles__single--groom"
            )}
          >
            <h2 className={styles.profiles__single__title}>The groom</h2>
            <div className={styles.profiles__single__content}>
              <p>
                I am incredibly grateful to have the opportunity to ask you to
                come to my wedding. Getting together with close friends and
                family is a precious luxury that I&mdash;like all of us over the
                past two years&mdash;have been reminded never to take for
                granted.
              </p>
              <p>
                Being away from my loved ones was difficult throughout the
                pandemic, but I&apos;m also reminded of the supportive, deeply
                meaningful loving relationship Nadejda and I have nurtured. Dejy
                is the most empathetic, caring person I have come to know. I
                could talk about all the small ways that she shows her kindness
                everyday, but I feel it might not be necessary to those who know
                her.
              </p>
              <p>
                One of the things I look forward to the most about the wedding
                is the chance for members of my family to meet Nadejda&apos;s
                family. I have felt warmly welcome into the Orlowski family and
                found that it&apos;s true what they say about trees and apples
                and the distance to which they fall from one another. Is that
                how it goes? In short, I&apos;ve had the pleasure to spend a few
                summers in France with Nadejda&apos;s parents Alex and Hilary
                along with her extended family who never fail to fill every
                moment with joy, love and, most importantly, fantastic food.
              </p>
              <p>
                To my family and friends in Bolivia: Se lo increíblemente
                complicado que es visitar Francia y el sacrificio que requiere.
                Quiero que sepan que entiendo si las logísticas para hacer el
                tremendo viaje se les hace muy difícil para realizar. De todas
                formas, les aseguro que su cariño y apoyo nos llegará a Francia.
                Para los que sí pueden realizar el viaje, no hay palabras para
                describir cómo aprecio su gran gesto. Por favor siéntanse
                cómodos en contactarme con cualquier pregunta que tengan sobre
                el viaje, la estadía o cualquier otra acomodación.
              </p>
              <p>
                It also shouldn&apos;t go unsaid that we are still suffering
                through a global pandemic that makes large gatherings and travel
                complicated and unpredictable. We will be doing our best to keep
                track of health regulations, recommendations by the CDC and make
                our best to accommodate to whatever situation arises in
                September. We are keeping our hopes up that this will not be a
                huge concern, but we first and foremost want our guests to
                consider what is best for themselves and the health of those
                around them. So we understand if you chose to avoid the
                gathering.
              </p>
              <p>
                I kind of already said this above in Spanish, but for my
                American friends that didn&apos;t already c/p that part to
                Google Translate, I know that asking you to travel all the way
                to France is a lot to ask. I completely understand if the trip
                is just not something you can feasibly do, and your love and
                support will still be very much felt in France.
              </p>
              <p>
                I&apos;m very excited for you to visit France. Montmélian is a
                magical place that I have no doubt you will be pleased to get to
                know. And for those of you who are taking the opportunity to do
                some traveling around Europe, you&apos;ll find that the Samoreau
                area of France is very conveniently located next to many great
                places to visit. I hope this is not only a chance for you to
                join us in the celebration of our love, but a chance to take a
                beautiful trip and make another great memory together.
              </p>
              <p>I&apos;ll be working on my French, I hope you do too.</p>
              <p>&ndash; Nicolas Ocampo</p>
            </div>
          </div>
        </section>
        <section className={styles.closer__container}>
          <div className={styles.closer__primary}>
            <p>We hope you can join us</p>
          </div>
          <div className={styles.closer__secondary}>
            <div>
              <p>
                We&apos;ll start with a ceremony on the estate grounds, then
                move to the château for food, live music and dancing. The dress
                code is garden party attire.
              </p>
              <p>Please RSVP by May 31st.</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
