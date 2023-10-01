import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [searchOfWord, setSearchOfWord] = useState("keyboard" || "");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e) => {
    setSearchOfWord(e.target.value);
    setIsEmpty(false);
    if (e.target.value.trim().length === 0) {
      setIsEmpty(true);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (searchOfWord.trim().length === 0) {
      setIsEmpty(true);
    }
  }
  return (
    <div className="search">
      <form
        className={`search__form ${isEmpty ? "search__form_empty" : ""}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          className="search__input"
          id="word"
          name="word"
          placeholder="Search for any word…"
          required
          value={searchOfWord || ""}
          onChange={handleChange}
        />
        <span
          className={`search__form-error ${
            isEmpty ? "search__form-error_active" : ""
          }`}
        >
          Whoops, can’t be empty…
        </span>
        <button className="search__button" type="submit"></button>
      </form>
    </div>
  );
}

export default SearchForm;
