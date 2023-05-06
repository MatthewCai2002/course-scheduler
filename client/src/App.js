import { Route, Routes } from "react-router-dom";
import InfoForm from "./components/InfoForm/InfoForm.js"
import Dashboard from "./components/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <Routes>
        <Route path="/" element={<InfoForm />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
