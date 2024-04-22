import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Game from "./components/Game/Game";
import Ads from "./components/Ads/Ads";
import DetailsAds from "./components/DetailsAds/DetailsAds";
import ResultPage from "./components/ResultPage/ResultPage";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <>
      {currentPage === "welcome" ? (
        <WelcomePage setCurrentPage={setCurrentPage} />
      ) : currentPage === "game" ? (
        <Game setCurrentPage={setCurrentPage} />
      ) : currentPage === "ads" ? (
        <Ads setCurrentPage={setCurrentPage} />
      ) : currentPage === "result" ? (
        <ResultPage setCurrentPage={setCurrentPage} />
      ) : currentPage === "details" ? (
        <DetailsAds setCurrentPage={setCurrentPage} />
      ) : (
        <h2>Seite nicht gefunden</h2>
      )}
    </>
  );
}

export default App;
