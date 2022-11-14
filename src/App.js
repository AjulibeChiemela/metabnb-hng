import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/helpers.scss";
import { Routes, Route } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import HomePage from "./pages/HomePage";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="places" element={<PlaceToStay />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
