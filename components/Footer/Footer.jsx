import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

export default function Navigation() {
  return (
    <footer className={styles.footer}>
      <Link href="/" alt="homepage">
        Nicolas and Nadejda
      </Link>
    </footer>
  );
}
