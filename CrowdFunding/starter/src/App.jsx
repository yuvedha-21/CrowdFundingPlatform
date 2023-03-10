import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
const App = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
