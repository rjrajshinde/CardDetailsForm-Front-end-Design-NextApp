import "@/styles/index.css";
import "@/styles/cardFrontBack.css";
import "@/styles/cardForm.css";
import "@/styles/thankYou.css";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
