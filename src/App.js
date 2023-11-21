import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { TP1 } from "./components/Pages/TP1";
import { TP2 } from "./components/Pages/TP2";
import { TP3 } from "./components/Pages/TP3";
import { TP4 } from "./components/Pages/TP4";


import { LanguageProvider } from './components/Pages/ContexteLanguage';




function App() {
    return (
      <>
      <LanguageProvider>
      <Router>

        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tp1" element={<TP1 />} />
            <Route path="/tp2" element={<TP2 />} />
            <Route path="/tp3" element={<TP3 />} />
            <Route path="/tp4" element={<TP4 />} />
          </Routes>
        </div>
      </Router>
      
      </LanguageProvider>

      
  </>
    );
  };
  
  export default App;


  
 