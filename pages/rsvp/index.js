import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../../styles/SecondaryPage.module.scss";
import classNames from "classnames/bind";
import heroImage from "../../public/images/hero-image.png";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

export default function Rsvp() {
  const cx = classNames.bind(styles);

  return (
    <div className={styles.container}>
      <Head>
        <title>Details &amp; RSVP</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>Details &amp; RSVP</h1>
        </div>
      </main>
      <div className={styles.hero__container}>
        <div className={cx("hero__image__container", "hero__image--1")}>
          <Image
            className={styles.hero__image}
            src={heroImage}
            alt="Nico and Nadejda"
            layout="fill"
          />
        </div>
        <div className={cx("hero__image__container", "hero__image--2")}>
          <Image
            className={styles.hero__image}
            src={heroImage}
            alt="Nico and Nadejda"
            layout="fill"
          />
        </div>
        <div className={cx("hero__image__container", "hero__image--3")}>
          <Image
            className={styles.hero__image}
            src={heroImage}
            alt="Nico and Nadejda"
            layout="fill"
          />
        </div>
      </div>
      <section className={styles.header__container}>
        <div className={styles.header__primary}>
          <p>The wedding will be at the chateau de Montmélian</p>
          <p>in Samoreau, France</p>
        </div>
        <div className={styles.header__secondary}>
          <p>
            It&apos;s about an hour away from Paris on the Seine and can be
            reached by train, rental car or cab.
          </p>
        </div>
      </section>
      <section className={styles.rsvp__container}>
        <iframe
          scrolling="no"
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            border: "none",
          }}
          type="text/javascript"
          src={"https://nicolasandnadejdawedding.rsvpify.com?embed=1"}
        ></iframe>
      </section>
    </div>
  );
}
