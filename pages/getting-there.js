import Head from "next/head";
import Image from "next/image";
import styles from "../styles/SecondaryPage.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
import image1 from "../public/images/Landscape-666.png";
import image2 from "../public/images/Landscape-drinks.png";
import image3 from "../public/images/Portrait-gaze.png";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

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
      </div>
      <section className={styles.header__container}>
        <div className={styles.header__primary}>
          <p>The wedding will be at Nadejda&apos;s family home</p>
          <p>in Samoreau, France</p>
        </div>
        <div className={styles.header__secondary}>
          <p>
            It&apos;s about an hour away from Paris on the Seine and can be
            reached by train, rental car or cab.
          </p>
        </div>
      </section>
      <div className={styles.subheader__container}>
        <h2 className={styles.subheader}>Getting there from Paris</h2>
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
      <section>
        <div className={styles.subheader__container}>
          <h2 className={styles.subheader}>
            COVID policy, travel visas and other travel requirements
          </h2>
        </div>
        <div className={styles.subsection}>
          <p className={styles.subsection__content}>
            A note about vaccine status and wedding participation: We&apos;re
            asking that only vaccinated folks participate in the wedding
            festivities as we want to minimize the risk of infection. Please
            reach out to the bride and groom if you have any questions or
            concerns.
          </p>
          <small className={styles.subsection__content}>
            *Rules for Children Testing, vaccination and booster requirements
            apply to travelers who are 12 and older, and American visitors must
            show results of a negative PCR or antigen test taken within 48 hours
            to enter the country.
          </small>
        </div>
      </section>
      <section>
        <div className={styles.subheader__container}>
          <h2 className={styles.subheader}>
            Entry Requirements for Fully Vaccinated Travelers
          </h2>
        </div>
        <div className={styles.subsection}>
          <p className={styles.subsection__content}>
            Entry rules to France depend on the country from which you are
            arriving from. You can find{" "}
            <a
              href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Certificate-of-international-travel"
              alt="Certificate-of-international-travel"
            >
              up to date details here
            </a>
            . Fully vaccinated travelers from the U.S. who are age 18 and older
            may enter the country by showing proof of vaccination, results of a
            negative COVID-19 test (PCR or antigen) taken within 48 hours prior
            to departure for France and a{" "}
            <a href="https://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Attestation-de-deplacement-et-de-voyage">
              sworn statement attesting they do not have symptoms of COVID-19
            </a>{" "}
            nor have had contact with any confirmed cases of COVID-19.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.subheader__container}>
          <h2 className={styles.subheader}>Carte Sanitaire (Health Pass)</h2>
        </div>
        <div className={styles.subsection}>
          <p className={styles.subsection__content}>
            We strongly recommend securing your pass sanitaire (health pass)
            when you arrive as it&apos;s required for entry in most public
            spaces, including restaurants, bars, museums, high speed trains
            etc&hellip;
          </p>
          <p className={styles.subsection__content}>
            The pass sanitaire (health pass) indicates that the holder has been
            fully vaccinated against COVID-19 with a booster shot. To activate
            the pass, people must be up-to-date with their booster schedule. In
            France, that means seven months after the second dose of a Pfizer,
            Moderna, AstraZeneca or Covishield vaccine course, or after the
            one-shot Johnson & Johnson vaccine.
          </p>
          <p className={styles.subsection__content}>
            If you&apos;re traveling from the US, Bolivia or another non-EU
            nation, you must apply in person through a dedicated pharmacy in
            France when you arrive in the country. You&apos;ll be required to
            pay a fee of up to €36 (about US$44) for the service.
          </p>
          <p className={styles.subsection__content}>
            When applying, you&apos;ll be asked to show your passport and
            official vaccination certificate (CDC card) with your booster shot
            information. The pharmacist will convert the details from that
            certificate into the French system and provide you with a QR code
            that can be scanned at venues where the health pass is required.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.subheader__container}>
          <h2 className={styles.subheader}>Your options for stay</h2>
        </div>
        <div className={styles.content__secondary}>
          <div className={styles.list__container}>
            <div className={styles.subheader__container}>
              <h3 className={styles.subheader}>Hotels</h3>
            </div>
            <div className={styles.subsection}>
              <p className={styles.subsection__content}>
                <ul>
                  <li>
                    L&apos;Anneau de Mallarmé, Vulaines - call for reservation
                    +33 1 64 23 71 61
                  </li>
                  <li>
                    Le Country Club, Samois - call for reservation +33 1 64 24
                    60 34
                  </li>
                  <li>Ibis Budget Fontainebleau-Avon</li>
                  <li>Wisteria, Maison d&apos;hôtes Fontainebleau</li>
                  <li>La Demeure du Parc, Boutique hotel, Fontainebleau</li>
                  <li>Hotel Belle Fontainebleau</li>
                  <li>Hotel Aigle Noir Fontainebleau</li>
                  <li>Ibis Chateau de Fontainebleau</li>
                  <li>Hotel Le Richelieu Fontainebleau</li>
                  <li>Hotel de Londres Fontainebleau</li>
                  <li>La Carpe d&apos;Or Fontainebleau</li>
                  <li>Hotel Victoria Fontainebleau</li>
                  <li>
                    Hotel Mercure Chateau de Fontainebleau Demeure de Campagne
                  </li>
                </ul>
              </p>
            </div>

            <div className={styles.subheader__container}>
              <h3 className={styles.subheader}>
                A selection of the nearest Airbnbs
              </h3>
            </div>
            <div className={styles.subsection}>
              <p className={styles.subsection__content}>
                <ul>
                  <li>Samois, Studio de charme en bord de Seine</li>
                  <li>La chambre dans la maison du sourire à Samois</li>
                  <li>Cottage la Bacotte, Bois-Le-Roi</li>
                  <li>Les Bulles d&apos;Iris, Vulaines-sur-Seine</li>
                  <li>Le Vieux Moulin de Valvins, Avon</li>
                  <li>Maisonnette de Charme, Hericy</li>
                  <li>Chambre privée Joséphine, Villa La Fougeraie, Avon</li>
                  <li>Aux voyageurs d&apos;un temps, Saint Mamme</li>
                  <li>Mon cocon au bord de l&apos;eau à Moret sur loing</li>
                </ul>
              </p>
            </div>

            <div className={styles.subheader__container}>
              <h3 className={styles.subheader}>Atypical Lodging</h3>
            </div>
            <div className={styles.subsection}>
              <p className={styles.subsection__content}>
                <ul>
                  <li>Domaine de Graville Tree Huts</li>
                  <li>Chambres d&apos;hotes Peniche Eden Samois sur seine</li>
                  <li>Les Bulles d&apos;Iris, Vulaines-sur-Seine</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
