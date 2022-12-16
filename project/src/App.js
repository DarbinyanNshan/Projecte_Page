import './App.css';
import { Content, Image} from './content';
import { Footer } from './footer';
import { Header } from './header';
import { NavBar } from './navbar';


function App() {
  return (
    <div className="App">
   <NavBar/>
   <Header/>
   <Content/>
   <Image /> 
   <Footer/>
  

   
  
    </div>
  );
}

export default App;
