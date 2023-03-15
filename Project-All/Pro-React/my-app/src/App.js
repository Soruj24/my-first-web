import "./App.css";
import COUNT from "./Components/COUNT";
import COUNT1 from "./Components/HOOKS/COUNT1";
import Example from "./Components/HOOKS/Example";
import INDEX1 from "./Components/HOOKS/INDEX1";

import INDEX from "./Components/INDEX";

function App() {
  return (
    <div className="App">
      <INDEX />
      <COUNT />
      <INDEX1 />
      <COUNT1 />
      <Example/>
    </div>
  );
}

export default App;
