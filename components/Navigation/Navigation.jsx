import { useState, useEffect } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";

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
      <span className={styles.navigation__home}>
        <Link href="/" alt="home" passHref>
          <HomeIcon />
        </Link>
      </span>
      <span className={cx("navigation__when", "navigation__link")}>
        <Link href="/getting-there" alt="When and where">
          When &amp; Where
        </Link>
      </span>
      <span className={cx("navigation__rsvp", "navigation__link")}>
        <Link href="/rsvp" alt="RSVP">
          RSVP
        </Link>
      </span>
    </nav>
  );
}
