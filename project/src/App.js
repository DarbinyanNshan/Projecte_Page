import { Section } from './Components/Home/header';
import { Section_2 } from './Components/About/header';
import { Section_3 } from './Components/Contact/header';
import { Com_footer } from './Components/Footer';
import { NavBar } from './Components/navbar';
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">

   <NavBar/>
    <Routes>
        <Route path="/" element={<Section/>} />
        <Route path="/about" element={<Section_2/>} />
        <Route path="/contact" element={<Section_3/>} />
        </Routes>
    <Com_footer/>
  
    </div>
  );
}

export default App;
