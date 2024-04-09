import "./App.css";
import WelcomePage from "./components/WelcomePage";
import Game from "./components/Game";
import Ads from "./components/Ads";
import ResultPage from "./components/ResultPage";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  return (
    <>
      <div className="menu">
        <button
          style={{
            backgroundColor: currentPage === "welcome" ? "#4daa57" : "#f9eccc",
          }}
          onClick={() => {
            setCurrentPage("welcome");
          }}
        >
          Welcome
        </button>

        <button
          style={{
            backgroundColor: currentPage === "game" ? "#4daa57" : "#f9eccc",
          }}
          onClick={() => {
            setCurrentPage("game");
          }}
        >
          Game
        </button>
        <button
          style={{
            backgroundColor: currentPage === "ads" ? "#4daa57" : "#f9eccc",
          }}
          onClick={() => {
            setCurrentPage("ads");
          }}
        >
          Ads
        </button>
        <button
          style={{
            backgroundColor: currentPage === "result" ? "#4daa57" : "#f9eccc",
          }}
          onClick={() => {
            setCurrentPage("result");
          }}
        >
          Result
        </button>
      </div>
      {/* * * * * * * * * * TERNARY OREPATOR * * * * * * * * * * * * * */}

      {currentPage === "welcome" ? (
        <WelcomePage setCurrentPage={setCurrentPage} />
      ) : currentPage === "game" ? (
        <Game setCurrentPage={setCurrentPage} />
      ) : currentPage === "ads" ? (
        <Ads setCurrentPage={setCurrentPage} />
      ) : currentPage === "result" ? (
        <ResultPage setCurrentPage={setCurrentPage} />
      ) : (
        <h2>Seite nicht gefunden</h2>
      )}
    </>
  );
}

export default App;