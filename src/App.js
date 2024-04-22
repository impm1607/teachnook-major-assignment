import { Route, Routes } from "react-router-dom";
import Navbar from "./components/User-Navbar/Navbar";
import UserFooter from "./components/User-Footer/UserFooter";

import Home from "./pages/Home-Page/Home";
import ContactUs from "./pages/Contact-Us-Page/ContactUs";
import AboutUs from "./pages/About-Page/AboutUs";
import Rentals from "./pages/Rentals-Page/Rentals";

import SE03Lite from "./pages/Products-Page/SE03Lite";
import SE03 from "./pages/Products-Page/SE03";
import SE03Max from "./pages/Products-Page/SE03Max";
import CompareAll from "./pages/Products-Page/CompareAll";
import PreBookModal from "./pages/Pre-Book-Modal/PreBookModal";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/products/se03-lite" element={<SE03Lite />} />
        <Route path="/products/se03" element={<SE03 />} />
        <Route path="/products/se03-max" element={<SE03Max />} />
        <Route path="/products/compare-all" element={<CompareAll />} />
        <Route path="/prebook" element={<PreBookModal />} />
      </Routes>

      <UserFooter />
    </>
  );
}

export default App;
