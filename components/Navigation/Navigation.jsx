import { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";

export default function Navigation() {
  const cx = classNames.bind(styles);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={cx("navigation", { "navigation--scrolled": offset > 10 })}>
      <a
        href="/getting-there"
        alt="When and where"
        className={styles.navigation__when}
      >
        When &amp; Where
      </a>
      <a href="#" alt="RSVP" className={styles.navigation__rsvp}>
        RSVP
      </a>
    </nav>
  );
}
