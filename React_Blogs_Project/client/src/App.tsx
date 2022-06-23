import './view/styles/global.scss';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './view/components/Home';

function App() {
  return (
    <div className = "blogApp">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
