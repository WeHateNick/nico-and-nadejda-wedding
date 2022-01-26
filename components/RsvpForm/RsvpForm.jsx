import styles from "./RsvpForm.module.scss";

export default function Rsvp() {
  return (
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
  );
}
