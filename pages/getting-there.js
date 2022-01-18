import Head from "next/head";
import Image from "next/image";
import styles from "../styles/SecondaryPage.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  const cx = classNames.bind(styles);

  return (
    <div className={styles.container}>
      <Head>
        <title>Getting to the wedding</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>Getting to the wedding</h1>
        </div>
      </main>
      <div className={styles.hero__container}>
        <div className={styles.hero__image__container}>
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
      <div className={styles.content__secondary__header__container}>
        <h2 className={styles.content__secondary__header}>
          Getting there from Paris
        </h2>
      </div>
      <div className={styles.content__secondary}>
        <section className={styles.list__container}>
          <div className={cx("list__single__container", "list__single--bride")}>
            <h2 className={styles.list__single__title}>By train</h2>
            <div className={styles.list__single__content}>
              <p>
                Gare de Lyon (Paris) to Gare de Fontainebleau
                <ul>
                  <li>45 mins</li>
                  <li>Runs every half hour</li>
                </ul>
              </p>
            </div>
          </div>
          <div className={cx("list__single__container", "list__single--groom")}>
            <h2 className={styles.list__single__title}>By cab</h2>
            <div className={styles.list__single__content}>
              <p>
                Let us know if you’d like to arrange for a cab from the airport
                and we can put you in touch with a trusted driver
              </p>
            </div>
          </div>
        </section>
        <section className={styles.list__container}>
          <div className={cx("list__single__container", "list__single--groom")}>
            <h2 className={styles.list__single__title}>By car</h2>
            <div className={styles.list__single__content}>
              <p>
                Depending on your plans, it may make sense to rent a car for the
                weekend. You can make arrangements at the airport or online.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
