import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/SecondaryPage.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
import image1 from "../public/images/Landscape-666.png";
import image2 from "../public/images/Landscape-drinks.png";
import image3 from "../public/images/Portrait-gaze.png";
import image4 from "../public/images/Landscape-pickup.png";
import Navigation from "../components/Navigation/Navigation";
import RsvpForm from "../components/RsvpForm/RsvpForm";
import Footer from "../components/Footer/Footer";

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
            src={image1}
            alt="Nico and Nadejda"
            width={1152}
            height={730}
          />
        </div>
        <div className={cx("hero__image__container", "hero__image--2")}>
          <Image
            className={styles.hero__image}
            src={image2}
            alt="Nico and Nadejda"
            width={1728}
            height={1152}
          />
        </div>
        <div className={cx("hero__image__container", "hero__image--3")}>
          <Image
            className={styles.hero__image}
            src={image3}
            alt="Nico and Nadejda"
            width={1152}
            height={1728}
          />
        </div>
        <div className={cx("hero__image__container", "hero__image--4")}>
          <Image
            className={styles.hero__image}
            src={image4}
            alt="Nico and Nadejda"
            width={1728}
            height={1152}
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
      <RsvpForm />
      <Footer />
    </div>
  );
}
