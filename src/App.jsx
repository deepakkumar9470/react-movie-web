import "./App.css";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDeatils";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
function App() {
  return (
    <div className="p-5  text-white w-full h-full">
      <BrowserRouter>
        <main className="w-full max-w-[960px] m-0 m-auto">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
