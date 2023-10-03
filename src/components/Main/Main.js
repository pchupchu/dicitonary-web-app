import Line from "../Line/Line";
import Noun from "../Noun/Noun";
import Source from "../Source/Source";
import Verb from "../Verb/Verb";
import Word from "../Word/Word";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Word />
      <Noun />
      <Verb />
      <Line />
      <Source />
    </main>
  );
}

export default Main;
