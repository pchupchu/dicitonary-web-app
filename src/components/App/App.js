import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";
import NotFound from "../NotFound/NotFound";

function App() {
  const [isDarkModeChecked, setIsDarkModeChecked] = useState(false);
  const [searchOfWord, setSearchOfWord] = useState("keyboard" || "");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  function handleCheckedMode() {
    setIsDarkModeChecked(!isDarkModeChecked);
  }

  const handleChangeValue = (e) => {
    setSearchOfWord(e.target.value);
    setIsEmpty(false);
    if (e.target.value.trim().length === 0) {
      setIsEmpty(true);
    }
  };

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(searchOfWord);
    if (searchOfWord === "keyboard") {
      setIsNotFound(false);
    }
    if (searchOfWord !== "keyboard") {
      setIsNotFound(true);
    }
  }

  return (
    <div className={`app ${isDarkModeChecked ? "app_dark-mode" : ""}`}>
      <div className="app__container">
        <Header
          isChecked={isDarkModeChecked}
          onCheckedMode={handleCheckedMode}
        />
        <SearchForm
          search={searchOfWord}
          onChangeSearchTerm={handleChangeValue}
          onSubmitSearch={handleSubmitForm}
          isEmpty={isEmpty}
        />
        {isNotFound ? <NotFound /> : <Main />}
      </div>
    </div>
  );
}

export default App;
