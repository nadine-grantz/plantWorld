import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/navigation";
import plants from "../lib/plants.json";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} plants={plants} />
    </>
  );
}
