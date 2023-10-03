import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";

function App() {
  const [isDarkModeChecked, setIsDarkModeChecked] = useState(false);

  function handleCheckedMode() {
    setIsDarkModeChecked(!isDarkModeChecked);
  }

  return (
    <div className={`app ${isDarkModeChecked ? "app_dark-mode" : ""}`}>
      <Header isChecked={isDarkModeChecked} onCheckedMode={handleCheckedMode} />
      <SearchForm />
      <Main />
    </div>
  );
}

export default App;
