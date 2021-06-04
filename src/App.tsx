import { Counter } from "./components/Counter";
import { TimerPadre } from "./components/TimerPadre";
import { Usuario } from "./components/Usuario";

function App() {
  return (
   <>
    <h1> React  + TypeScript </h1>
    <hr />
    <Counter />
    <Usuario />
    <br />
    <h3>useEffect + useRef</h3>
    <hr />
    <TimerPadre />
   </>
  );
}

export default App;
