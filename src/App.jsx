import { useSelector } from "react-redux";
import Buttons from "./assets/Buttons";

function App() {
  const displayDigit = useSelector((state) => state.displayState.displayText);
  return (
    <div id="calculator">
      <div id="display">{displayDigit}</div>
      <div id="numpad">
        <Buttons />
      </div>
    </div>
  );
}

export default App;
