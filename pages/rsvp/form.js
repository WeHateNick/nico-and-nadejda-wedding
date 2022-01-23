import Head from "next/head";
import Script from "next/script";

export default function RsvpForm() {
  return (
    <>
      <Head>
        <title>Nico and Nadejda&apos;s Wedding</title>
        <meta name="description" content="Nico and Nadejda's Wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="text/javascript"
        src="https://nicolasandnadejdawedding.rsvpify.com/embed"
      ></Script>
    </>
  );
}
