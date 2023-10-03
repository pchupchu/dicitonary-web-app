import "./Header.css";
import logo from "../../images/logo.svg";

function Header({ isChecked, onCheckedMode }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <form className="header__form">
          <label className="header__label">
            <select
              className="header__item"
              id="font-family"
              name="font-family"
            >
              <option value="sunsserif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="mono">Mono</option>
            </select>
          </label>
          <div className="header__checkbox-container">
            <input
              type="checkbox"
              className="header__checkbox"
              id="mode"
              name="mode"
              onChange={onCheckedMode}
              checked={isChecked}
            />
            <label
              htmlFor="mode"
              className={`header__label_checkbox ${
                isChecked ? "header__label_dark-checkbox" : ""
              }`}
            ></label>
          </div>
        </form>
      </div>
    </header>
  );
}

// classname={`header__label_checkbox ${isChecked ? header__label_dark-checkbox" : ""}`

export default Header;
