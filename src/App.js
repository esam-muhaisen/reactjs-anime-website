import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimeItem, HomePage, Popular } from "./Components/exports";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/anime/:id" element={<AnimeItem/>}/>
        <Route path="/character/:id" element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
