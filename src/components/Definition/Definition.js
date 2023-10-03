import "./Definition.css";

const Definition = ({ title, children }) => {
  return (
    <>
      <div className="definition">
        <h2 className="definition__part-of-speech">{title}</h2>
        <div className="definition__line"></div>
      </div>
      <h3 className="definition__title">Meaning</h3>
      <ul className="definition__list">{children}</ul>
    </>
  );
};

export default Definition;
