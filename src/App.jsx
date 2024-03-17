import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import NoPage from "./pages/NoPage"
import { BrowserRouter, Routes, Route }from 'react-router-dom';
import Navbar from "./components/Navbar"
import Website from "./pages/Website";
import PCBuilds from "./pages/PCBuilds";
import Hosting from "./pages/Hosting";

function App(){

  return(
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/website" element={<Website />}/>
          <Route path="/pcbuilds" element={<PCBuilds />}/>
          <Route path="/hosting" element={<Hosting />}/>
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App

