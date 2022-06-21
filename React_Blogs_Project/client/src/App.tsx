import './view/styles/global.scss';
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './view/components/Main';

function App() {
  return (
    <div className = "blogApp">
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
