import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        {/* <Login />
        <Register />
        <Dashboard />
        <About /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
