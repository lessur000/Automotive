import "../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AppointmentContact from "../components/sections/Contact/AppointmentContact";
import About from "../pages/About";
import ShopParts from "../pages/ShopParts";
import TeamList from "../components/sections/Home/TeamList";
import TeamMemberProfile from "../components/sections/Home/TeamMemberProfile";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import OurServices from "../components/sections/OurServices/OurServices";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AppointmentContact" element={<AppointmentContact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/ShopParts" element={<ShopParts />} />
          <Route path="/Team" element={<TeamList />} />
          <Route path="/Team/:name" element={<TeamMemberProfile />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
