import Landing from "../components/Landing/landing.jsx";
import EB from "../ErrorHandler/errorhandling.js";

function App() {
  return (
    <div className="App">

    <EB type="component"> <Landing /> </EB>

    </div>
  );
}

export default App;
