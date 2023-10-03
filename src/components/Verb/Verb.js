import "./Verb.css";
import Definition from "../Definition/Definition";
import Meaning from "../Meaning/Meaning";

function Verb() {
  return (
    <div className="verb">
      <Definition title="verb">
        <Meaning text="To type on a computer keyboard." />
        <div className="verb__container">
          <p className="verb__example">
            “Keyboarding is the part of this job I hate the most.”
          </p>
        </div>
      </Definition>
    </div>
  );
}

export default Verb;
