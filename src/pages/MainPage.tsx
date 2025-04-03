import MainpageContents from "../components/MainpageContents.js";
import AppHeader from "../components/AppHeader.js";
import AppFooter from "../components/AppFooter.js";
import "../styles/tailwind.css";

function MainPage() {
  return (
    <>
      <AppHeader />
      <MainpageContents />
      <AppFooter />
    </>
  );
}

export default MainPage;
