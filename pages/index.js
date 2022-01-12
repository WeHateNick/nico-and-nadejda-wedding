import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nico and Nadejda&apos;s Wedding</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <a href="#" alt="RSVP">
          When &amp; Where
        </a>
        <a href="#" alt="RSVP">
          RSVP
        </a>
      </nav>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Nicolas and Nadejda</h1>
          <h2 className={styles.subtitle}>9/3/2022</h2>
        </div>
        <div>
          <p>You&apos;re invited to our wedding</p>
        </div>
        <section>
          <p>
            Nico and Nadejda joyfully request the pleasure of your company as we
            speak our vows and join in marriage in the presence of family and
            friends.
          </p>
          <p>
            We&apos;ll start with a nonsectarian ceremony, then move to the
            hotel for the reception. Dress code will be black tie optional
          </p>
        </section>
        <section>
          <div>
            <h2>When</h2>
            <p>Saturday, June 17, 2020</p>
            <p>Reception: 2pm—5pm</p>
            <p>Ceremony: 6pm—10pm</p>
            <a href="#" alt="RSVP">
              Details and RSVP
            </a>
          </div>
        </section>
        <section>
          <div>
            <h2>Where</h2>
            <p>The Melike Hotel</p>
            <p>123 Demo Street New York, NY 12345</p>
            <a href="#" alt="How to get there">
              How to get there
            </a>
          </div>
        </section>
        <section>
          <div>
            <h2>The bride</h2>
            <div>
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
          <div>
            <h2>The groom</h2>
            <div>
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
        <section>
          <p>We hope you can join us</p>
          <p>
            We&apos;ll start with a nonsectarian ceremony, then move to the
            hotel for the reception. Dress code will be black tie optional
          </p>
        </section>
      </main>
      <footer className={styles.footer}>Nicolas and Nadejda</footer>
    </div>
  );
}
