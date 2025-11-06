import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import MyBook from "./page/MyBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mybook" element={<MyBook />} />
      </Routes>
    </div>
  );
}

export default App;
