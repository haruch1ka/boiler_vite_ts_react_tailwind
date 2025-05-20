import AppContents from "../components/AppContents.js";
import AppHeader from "../components/AppHeader.js";
import AppFooter from "../components/AppFooter.js";
import "../styles/tailwind.css";

function App() {
  return (
    <>
      <AppHeader />
      <AppContents />
      <AppFooter />
    </>
  );
}

export default App;
