import { useState } from "react";
import "./App.css";
import HeadingTop from "./components/ChemistryQuiz/HeadingTop";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Game from "./components/Game/Game";
import Ads from "./components/Ads/Ads";
import DetailsAds from "./components/DetailsAds/DetailsAds";
import ResultPage from "./components/ResultPage/ResultPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [correctly, setCorrectly] = useState(0);

  function handleLogin(username) {
    setLoggedInUser(username);
  }

  function handleIncrement() {
    setCorrectly(correctly + 1);
  }

  return (
    <div className="containerBig">
      <HeadingTop />
      
        {currentPage === "welcome" ? (
          <WelcomePage
            setCurrentPage={setCurrentPage}
            onLogin={handleLogin}
            loggedInUser={loggedInUser}
          />
        ) : currentPage === "game" ? (
          <Game
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            correctly={correctly}
            handleIncrement={handleIncrement}
          />
        ) : currentPage === "ads" ? (
          <Ads setCurrentPage={setCurrentPage} loggedInUser={loggedInUser} />
        ) : currentPage === "result" ? (
          <ResultPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
            correctly={correctly}
            setCorrectly={setCorrectly}
          />
        ) : currentPage === "details" ? (
          <DetailsAds
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
          />
        ) : (
          <h2>Seite nicht gefunden</h2>
        )}
      
    </div>
  );
}

export default App;
