import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
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
          <h2 className={styles.subtitle}>&ndash; 9/3/2022 &ndash;</h2>
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
            layout="fill"
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
            <p>Ceremony: 4 PM — 5 PM</p>
            <p>Reception: 5 PM forward</p>
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
                I&apos;m baby selfies craft beer hammock hexagon celiac, squid
                vaporware flexitarian tofu snackwave photo booth. Brooklyn
                iceland ennui sriracha. Blue bottle tousled single-origin coffee
                post-ironic. Thundercats bespoke etsy meggings.
              </p>
              <p>
                Slow-carb cold-pressed roof party wayfarers quinoa. Yr small
                batch tattooed twee ugh snackwave cloud bread. Locavore
                waistcoat palo santo street art cardigan aesthetic enamel pin
                flannel schlitz plaid artisan church-key keffiyeh disrupt
                drinking vinegar. Cliche aesthetic whatever kale chips raclette
                umami edison bulb master cleanse cloud bread.
              </p>
              <p>
                I&apos;m baby selfies craft beer hammock hexagon celiac, squid
                vaporware flexitarian tofu snackwave photo booth. Brooklyn
                iceland ennui sriracha. Blue bottle tousled single-origin coffee
                post-ironic. Thundercats bespoke etsy meggings.
              </p>
              <p>
                Slow-carb cold-pressed roof party wayfarers quinoa. Yr small
                batch tattooed twee ugh snackwave cloud bread. Locavore
                waistcoat palo santo street art cardigan aesthetic enamel pin
                flannel schlitz plaid artisan church-key keffiy eh disrupt
                drinking vinegar. Cliche aesthetic whatever kale chips raclette
                umami edison bulb master cleanse cloud bread.
              </p>
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
                I&apos;m baby selfies craft beer hammock hexagon celiac, squid
                vaporware flexitarian tofu snackwave photo booth. Brooklyn
                iceland ennui sriracha. Blue bottle tousled single-origin coffee
                post-ironic. Thundercats bespoke etsy meggings.
              </p>
              <p>
                Slow-carb cold-pressed roof party wayfarers quinoa. Yr small
                batch tattooed twee ugh snackwave cloud bread. Locavore
                waistcoat palo santo street art cardigan aesthetic enamel pin
                flannel schlitz plaid artisan church-key keffiyeh disrupt
                drinking vinegar. Cliche aesthetic whatever kale chips raclette
                umami edison bulb master cleanse cloud bread.
              </p>
              <p>
                I&apos;m baby selfies craft beer hammock hexagon celiac, squid
                vaporware flexitarian tofu snackwave photo booth. Brooklyn
                iceland ennui sriracha. Blue bottle tousled single-origin coffee
                post-ironic. Thundercats bespoke etsy meggings.
              </p>
              <p>
                Slow-carb cold-pressed roof party wayfarers quinoa. Yr small
                batch tattooed twee ugh snackwave cloud bread. Locavore
                waistcoat palo santo street art cardigan aesthetic enamel pin
                flannel schlitz plaid artisan church-key keffiyeh disrupt
                drinking vinegar. Cliche aesthetic whatever kale chips raclette
                umami edison bulb master cleanse cloud bread.
              </p>
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
                move to the chateau for food, live music and dancing. The dress
                code is black tie optional.
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
