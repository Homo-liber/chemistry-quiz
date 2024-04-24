import "./App.css";
import ChemistryQuiz from "./components/ChemistryQuiz/ChemistryQuiz";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Game from "./components/Game/Game";
import Ads from "./components/Ads/Ads";
import DetailsAds from "./components/DetailsAds/DetailsAds";
import ResultPage from "./components/ResultPage/ResultPage";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [loggedInUser, setLoggedInUser] = useState(null);

  function handleLogin(username) {
    setLoggedInUser(username);
  }

  return (
    <>
      <ChemistryQuiz />
      <div className="container">
        {currentPage === "welcome" ? (
          <WelcomePage
            setCurrentPage={setCurrentPage}
            onLogin={handleLogin}
            loggedInUser={loggedInUser}
          />
        ) : currentPage === "game" ? (
          <Game setCurrentPage={setCurrentPage} loggedInUser={loggedInUser} />
        ) : currentPage === "ads" ? (
          <Ads setCurrentPage={setCurrentPage} loggedInUser={loggedInUser} />
        ) : currentPage === "result" ? (
          <ResultPage
            setCurrentPage={setCurrentPage}
            loggedInUser={loggedInUser}
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
    </>
  );
}

export default App;
