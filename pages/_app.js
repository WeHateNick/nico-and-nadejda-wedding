import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, Router }) {
  const router = useRouter();

  router.events?.on("routeChangeComplete", (url) => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
