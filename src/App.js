import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./componants/Home";
import Store from "./componants/Store";
import About from "./componants/About";
import Navbars from "./componants/Navbar";
import ShoppingCartProvider from "./context/CartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbars />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
