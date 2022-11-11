import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/helpers.scss";
import { Routes, Route } from "react-router-dom";
import FrontLayout from "./layout/FrontLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
