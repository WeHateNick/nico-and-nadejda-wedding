import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";

export default function Home() {
  const cx = classNames.bind(styles);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nico and Nadejda&apos;s Wedding</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav
        className={cx("navigation", { "navigation--scrolled": offset > 10 })}
      >
        <a href="#" alt="When and where" className={styles.navigation__when}>
          When &amp; Where
        </a>
        <a href="#" alt="RSVP" className={styles.navigation__rsvp}>
          RSVP
        </a>
      </nav>

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
            Nico and Nadejda joyfully request the pleasure of your company as we
            speak our vows and join in marriage in the presence of family and
            friends.
          </p>
        </div>
        <div className={styles.invite__secondary}>
          <p>
            We&apos;ll start with a nonsectarian ceremony, then move to the
            hotel for the reception. Dress code will be black tie optional
          </p>
        </div>
      </section>
      <div className={styles.content__secondary}>
        <section className={styles.details__container}>
          <div className={styles.details__when}>
            <h2>When</h2>
            <p className={styles.details__highlight}>Saturday, June 17, 2020</p>
            <p>Reception: 2pm—5pm</p>
            <p>Ceremony: 6pm—10pm</p>
            <a className={styles.details__action} href="#" alt="RSVP">
              Details and RSVP
            </a>
          </div>
          <div className={styles.details__where}>
            <h2>Where</h2>
            <p className={styles.details__highlight}>The Melike Hotel</p>
            <p>123 Demo Street</p>
            <p>New York, NY 12345</p>

            <a
              className={styles.details__action}
              href="#"
              alt="How to get there"
            >
              How to get there
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
            <p>
              We&apos;ll start with a nonsectarian ceremony, then move to the
              hotel for the reception. Dress code will be black tie optional
            </p>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>Nicolas and Nadejda</footer>
    </div>
  );
}
