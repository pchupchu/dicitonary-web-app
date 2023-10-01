import "./SearchForm.css";

function SearchForm({
  onChangeSearchTerm,
  search,
  onSubmitSearch,
  isValid,
  error,
}) {
  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmitSearch} noValidate>
        <input
          type="text"
          className="search__input"
          id="word"
          name="word"
          placeholder="Search for any word…"
          required
          value={search || "keyboard"}
          // value={search || "keyboard"}
          // onChange={onChangeSearchTerm}
        />
        <span
          className={`search__form-error ${
            isValid ? "" : "search__form-error_active"
          }`}
        >
          {error}
        </span>
        <button className="search__button" type="submit"></button>
      </form>
    </div>
  );
}

export default SearchForm;
