import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ScrollToTop from "../src/Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import { Cart } from "./Pages/Home/Components/Section-1/Cart/Cart";
import { ShopContextProvider } from "./Context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/agrio" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </ScrollToTop>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
