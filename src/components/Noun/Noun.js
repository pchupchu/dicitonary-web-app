import "./Noun.css";
import Definition from "../Definition/Definition";
import Meaning from "../Meaning/Meaning";

function Noun() {
  return (
    <div className="noun">
      <Definition title="noun">
        <Meaning text="(etc.) A set of keys used to operate a typewriter, computer etc." />
        <Meaning
          text="A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck."
        />
        <Meaning
          text="A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device."
        />
      </Definition>
      <div className="noun__container">
        <h3 className="noun__title">Synonyms</h3>
        <span className="noun__synonym">electronic keyboard</span>
      </div>
    </div>
  );
}

export default Noun;
