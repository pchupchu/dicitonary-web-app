import "./Header.css";
import logo from "../../images/logo.svg";
import Dropdown from "../DropDown/DropDown";

function Header({
  isOpen,
  onOpen,
  onOptionClick,
  selectedOption,
  isChecked,
  onCheckedMode,
}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <form className="header__form">
          <Dropdown
            isOpen={isOpen}
            onOpen={onOpen}
            onOptionClick={onOptionClick}
            selectedOption={selectedOption}
            isChecked={isChecked}
          />
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

export default Header;
