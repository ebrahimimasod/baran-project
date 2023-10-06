import { Routes, Route } from "react-router-dom";
import Hedare from "@/pages/Hedare";
import "@/styles/style.css";

function App() {
  return (
    <Routes>
      
      <Route path="/hedare" element={<Hedare />} />
    </Routes>
  );
}

export default App;
