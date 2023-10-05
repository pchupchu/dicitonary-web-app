import "./DropDown.css";

const Dropdown = ({
  isChecked,
  isOpen,
  onOpen,
  onOptionClick,
  selectedOption,
}) => {
  const options = ["Sans Serif", "Serif", "Mono"];

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={onOpen}>
        {selectedOption || "Sans Serif"}
      </div>
      {isOpen && (
        <ul
          className={`dropdown__options ${
            isChecked ? "dropdown__options_dark" : ""
          }`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown__option"
              onClick={() => onOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
