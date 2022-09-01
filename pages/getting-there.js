import Head from "next/head";
import Image from "next/image";
import styles from "../styles/SecondaryPage.module.scss";
import classNames from "classnames/bind";
import heroImage from "../public/images/hero-image.png";
import image1 from "../public/images/Landscape-666.png";
import image2 from "../public/images/Landscape-drinks.png";
import image3 from "../public/images/Portrait-gaze.png";
import image4 from "../public/images/Landscape-pickup.png";
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
          <p>The wedding will be at Nadejda&apos;s family home</p>
          <p>in Samoreau, France</p>
        </div>
        <div className={styles.header__secondary}>
          <p>1 Rue de Montmélian</p>
          <p>77210 Samoreau, France</p>
          <p>
            It&apos;s about an hour away from Paris on the Seine and can be
            reached by train, rental car or cab.
          </p>
        </div>
      </section>
      <div className={styles.subheader__container}>
        <h2 className={styles.subheader}>Getting there from Paris</h2>
      </div>
      <section className={styles.content__secondary}>
        <div className={styles.list__container}>
          <div className={cx("list__single__container", "list__single--bride")}>
            <h2 className={styles.list__single__title}>By train</h2>
            <div className={styles.list__single__content}>
              <p>
                <strong>Gare de Lyon (Paris)</strong> to{" "}
                <strong>Gare de Fontainebleau / Avon</strong>
              </p>
              <ul>
                <li>45 mins</li>
                <li>Runs every half hour</li>
              </ul>
              <p>
                Trains leave from any one of two sets of platforms in{" "}
                <em>Grandes Lignes</em>:
              </p>
              <ul>
                <li>
                  Hall 1 &ndash; alphabetic platforms <em>A&ndash;N</em>
                </li>
                <li>
                  Hall 2 &ndash; numeric platforms <em>5-23</em>
                </li>
              </ul>
              <p>
                Go to the <em>Ile de France / Banlieue</em> counter or ticket
                machine to buy your ticket for <em>Fontainebleau / Avon</em>.
              </p>
              <p>
                Train lines are displayed by their final destination and there
                are several lines that make stops at{" "}
                <em>Fontainebleau / Avon.</em> These final destination can be
                any one of the following:
              </p>
              <ul>
                <li>Montereau</li>
                <li>Montargis</li>
                <li>Sens</li>
                <li>Laroche Migennes</li>
              </ul>
              <p>
                Make sure your train stops in the <em>Fontainebleau / Avon</em>{" "}
                station.
              </p>
              <p>
                For more information on local train times, current prices and
                availability please go to the{" "}
                <a
                  href="https://www.transilien.com/en"
                  alt="Local train times departing from Paris"
                >
                  Transilien website
                </a>{" "}
                and type the name of your departure and arrival stations (i.e.,
                Paris - Gare de Lyon or Fontainebleau / Avon).
              </p>
            </div>
          </div>
          <div className={cx("list__single__container", "list__single--groom")}>
            <h2 className={styles.list__single__title}>By cab</h2>
            <div className={styles.list__single__content}>
              <p>
                It is unlikely that you will find a taxi at the train station.
                Hence, you should book a taxi in advance.
              </p>
              <ul>
                <li>
                  <strong>
                    <a href="https://taxi-ela.fr/" alt="Taxi ELA website">
                      Taxi ELA:
                    </a>
                  </strong>{" "}
                  <a href="tel: +33769191141" alt="Taxi ELA phone number">
                    +33 7 69 19 11 41
                  </a>{" "}
                  ask for ABDEL
                </li>
                <li>
                  <strong>
                    <a
                      href="www.taxis-fontainebleau-avon.fr"
                      alt="Radio-Taxi Fontainebleau Avon website"
                    >
                      Radio-Taxi Fontainebleau Avon
                    </a>
                  </strong>
                  :{" "}
                  <a
                    href="tel:+33164220006"
                    alt="Radio-Taxi Fontainebleau Avon phone number"
                  >
                    +33 1 64 22 00 06
                  </a>
                </li>
                <li>
                  <strong>
                    <a
                      href="www.taxi-resa.com"
                      alt="Taxi Fontainebleau Avon website"
                    >
                      Taxi Fontainebleau Avon
                    </a>
                  </strong>
                  :{" "}
                  <a
                    href="tel:+33677941006"
                    alt="Taxi Fontainebleau Avon phone number"
                  >
                    +33 6 77 94 10 06
                  </a>
                </li>
                <li>
                  <strong>
                    <a
                      href="https://www.fontainebleau.taxi/"
                      alt="Le Garçon Chauffeur website"
                    >
                      Le Garçon Chauffeur
                    </a>
                  </strong>
                  :{" "}
                  <a
                    href="tel:+33650572853"
                    alt="Le Garçon Chauffeur phone number"
                  >
                    +33 6 50 57 28 53
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("list__single__container", "list__single--groom")}>
            <h2 className={styles.list__single__title}>By car</h2>
            <div className={styles.list__single__content}>
              <p>
                Depending on your plans, it may make sense to rent a car for the
                weekend. You can make arrangements at the airport or online.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                    <a href="https://www.anneau-mallarme.fr/">
                      L&apos;Anneau de Mallarmé, Vulaines
                    </a>{" "}
                    (call for reservation &nbsp;
                    <a href="tel:+33164237161">+33 1 64 23 71 61</a>)
                  </li>
                  <li>
                    <a
                      href="https://all.accor.com/hotel/2720/index.en.shtml"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ibis Budget Fontainebleau&ndash;Avon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.wisteriafontainebleau.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Wisteria, Maison d&apos;hôtes Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.lademeureduparc.fr/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      La Demeure du Parc, Boutique hotel, Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotel-belle-fontainebleau.com/fr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel Belle Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.aiglenoirhotel.com/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel Aigle Noir Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://all.accor.com/hotel/1028/index.en.shtml"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ibis Chateau de Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotelrichelieufontainebleau.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel Le Richelieu Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.hoteldelondres.com/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel de Londres Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotelcarpedor.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      La Carpe d&apos;Or Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hotelvictoria.com/en/hotel-victoria-en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel Victoria Fontainebleau
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://all.accor.com/hotel/1627/index.en.shtml"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hotel Mercure Chateau de Fontainebleau Demeure de Campagne
                    </a>
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
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/43123404?check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=bf121b11-52ec-4f63-bfde-b48ab8faac7e&source_impression_id=p3_1633861653_zfciQbhnAm30%2BerB&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Samois, Studio de charme en bord de Seine
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/31922350?location=Samoreau%2C%20Ile-de-France%2C%20France&check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=de74eca1-183d-443d-8d9b-bbfeb2235efa&source_impression_id=p3_1633862109_5rW7JF7FvNl%2FPUge&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      La chambre dans la maison du sourire à Samois
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/34965490?check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=a879177c-9532-4e84-84ba-0055b78daff4&source_impression_id=p3_1633861934_x8y6KwSflpb8gzHt&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Cottage la Bacotte, Bois&ndash;Le&ndash;Roi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/39591581?check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=a879177c-9532-4e84-84ba-0055b78daff4&source_impression_id=p3_1633861958_AfDn9DEqH2mLrFFM&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Les Bulles d&apos;Iris, Vulaines&ndash;sur&ndash;Seine
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/21160204?check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=a879177c-9532-4e84-84ba-0055b78daff4&source_impression_id=p3_1633862043_XNbgxuCopvzqpPMM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Le Vieux Moulin de Valvins, Avon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/36215458?location=Samoreau%2C%20Ile-de-France%2C%20France&check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=de74eca1-183d-443d-8d9b-bbfeb2235efa&source_impression_id=p3_1633862309_yIU4tw1G%2FekXJCU%2B&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Maisonnette de Charme, Hericy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/41867061?location=Samoreau%2C%20Ile-de-France%2C%20France&check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=e9d9aeca-cd28-4cad-af41-1dd0a79d4558&source_impression_id=p3_1633862447_1FL6hwHi9UZG03lQ&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chambre privée Joséphine, Villa La Fougeraie, Avon
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/47132692?location=Samoreau%2C%20Ile-de-France%2C%20France&check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=a709c0ae-5b1b-4591-a328-8d23f0076fb4&source_impression_id=p3_1633862699_sKMXPqoRHMFnt1gJ&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Aux voyageurs d&apos;un temps, Saint Mamme
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.airbnb.com/rooms/48294270?check_in=2021-12-18&check_out=2021-12-19&translate_ugc=false&federated_search_id=333114d5-f7cd-4f1b-8993-0a5c8177b673&source_impression_id=p3_1633861805_zR%2B4%2Fij1iOGajcI%2B&guests=1&adults=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mon cocon au bord de l&apos;eau à Moret sur loing
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div className={styles.subheader__container}>
              <h3 className={styles.subheader}>Atypical Lodging</h3>
            </div>
            <div className={styles.subsection}>
              <p className={styles.subsection__content}>
                <ul>
                  <li>
                    <a
                      href="https://www.tripadvisor.com/Hotel_Review-g187145-d3460325-Reviews-Le_Domaine_de_Graville-Fontainebleau_Seine_et_Marne_Ile_de_France.html#/media/3460325/93249249:p/?albumid=101&type=0&category=101"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Domaine de Graville
                    </a>
                    &nbsp; Tree Huts
                  </li>
                  <li>
                    <a
                      href="https://www.chambres-hotes.fr/chambres-hotes_peniche-eden_samois-sur-seine_32014.htm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chambres d&apos;hotes Peniche Eden Samois sur seine
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tripadvisor.com/Hotel_Review-g1934144-d1949134-Reviews-Les_Roulottes_de_Bois_le_Roi-Bois_le_Roi_Fontainebleau_Seine_et_Marne_Ile_de_France.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Les Bulles d&apos;Iris, Vulaines&ndash;sur&ndash;Seine
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.subheader__container}>
          <h2 className={styles.subheader}>
            Como pedir visa en Bolivia para viajar a Francia
          </h2>
        </div>
        <div className={styles.subsection}>
          <p className={styles.subsection__content}>
            En Bolivia, la Embajada de España representa oficialmente la
            embajada de Francia para las visas de turismo SCHENGEN. La Embajada
            de España cuenta con un servicio externo de visas en La Paz “BLS”
            que realiza la recepción de las solicitudes de visa para los
            ciudadanos que viven en Cochabamba, La Paz, Potosí y Chuquisaca, y
            el Consulado de España en Santa Cruz realiza la recepción de las
            solicitudes para los que viven en Santa Cruz, Beni, Pando o Tarija.
            Para ver mas información, continue a la{" "}
            <a href="BLS Internacional">página de BLS Internacional</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
