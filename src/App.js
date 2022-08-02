import classes from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartApplicationProccessPage from "./pages/StartApplicationProccessPage/StartApplicationProccessPage";
import PrivacyNoticePage from "./pages/PrivacyNoticePage/PrivacyNoticePage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/TermsAndConditionsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

function App() {
  const {
    error,
    isLoading,
    fetchData: getImageOfTheDay,
    data,
  } = useAxios(
    "https://api.nasa.gov/planetary/apod?count=4&api_key=ybCNsvKIe13FyF9pD466eYomPJEc5rWBOdUTN7w9"
  );
  useEffect(() => {
    getImageOfTheDay();
  }, []);
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/application"
            element={<StartApplicationProccessPage />}
          />
          <Route path="/privacynotice" element={<PrivacyNoticePage />} />
          <Route
            path="/termsandcondition"
            element={<TermsAndConditionsPage />}
          />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
