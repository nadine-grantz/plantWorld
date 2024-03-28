import GlobalStyle from "../styles";
import Navigation from "@/components/Navigation/navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
