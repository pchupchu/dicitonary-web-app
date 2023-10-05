import "./SearchForm.css";

function SearchForm({ search, onSubmitSearch, isEmpty, onChangeSearchTerm }) {
  return (
    <div className="search">
      <form
        className={`search__form ${isEmpty ? "search__form_empty" : ""}`}
        onSubmit={onSubmitSearch}
        noValidate
      >
        <input
          type="text"
          className="search__input"
          id="word"
          name="word"
          placeholder="Search for any word…"
          required
          value={search || ""}
          onChange={onChangeSearchTerm}
        />
        <span
          className={`search__form-error ${
            isEmpty ? "search__form-error_active" : ""
          }`}
        >
          Whoops, can’t be empty…
        </span>
        <button
          className="search__button"
          type="submit"
          aria-label="search button"
        ></button>
      </form>
    </div>
  );
}

export default SearchForm;
