import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './Components/Home';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" exact element={<Home/>}/>
    <Route path="/card" exact element={<Card/>}/>
    <Route path="/footer" exact  element={<Footer/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
