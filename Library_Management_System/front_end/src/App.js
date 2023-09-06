import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import RegistrationForm from "./pages/Login";
import Signup from "./pages/SingUp";
import CustomerUserTable from "./pages/CustomerInfo";
import PageNotFount from "./pages/PageNotFount";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/Login" element={<RegistrationForm />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/customerinfo" element={<CustomerUserTable />}></Route>
          <Route path="*" element={<PageNotFount />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
