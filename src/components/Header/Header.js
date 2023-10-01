import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <form class="header__form">
          <label class="header__label">
            <select class="header__item" id="font-family" name="font-family">
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
              // onChange={onCheckedFilm}
              // checked={isChecked}
            />
            <label htmlFor="mode" class="header__label_checkbox"></label>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
