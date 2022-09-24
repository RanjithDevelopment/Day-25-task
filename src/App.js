import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./Components/login";
import Button from "./Components/Button";
import "./vendor/fontawesome-free/css/all.min.css";
import "./css/sb-admin-2.min.css"
import Dashboard from "./Components/Dashboard";
import Cards from './Components/Cards';
import Tables from './Components/Table';
import Color from './Components/color';
import Borders from './Components/borders';
import Animation from './Components/animation';
import OtherComponent from './Components/other';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';
import Component404 from './Components/component404';
import BlankPage from './Components/blankpage';
import Charts from './Components/Charts';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Button" element={<Button/>}/>
      <Route path="/Cards" element={<Cards/>}/>
      <Route path="/Table" element={<Tables/>}/>
      <Route path="/color" element={<Color/>}/>
      <Route path="/borders" element={<Borders/>}/>
      <Route path="/animation" element={<Animation/>}/>
      <Route path="/other" element={<OtherComponent/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/component404" element={<Component404/>}/>
      <Route path="/blankpage" element={<BlankPage/>}/>
      <Route path="/Charts" element={<Charts/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
