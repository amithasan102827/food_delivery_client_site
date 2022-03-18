import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import Blog from './Componets/Blog/Blog';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Componets/Header/Header';
import MainBlogPage from './Componets/MainBlogPage/MainBlogPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}> 
      </Route>
      <Route path="home" element={<Home />}> 
      </Route>
      <Route path="MainBlogPage" element={<MainBlogPage/>}> 
      </Route>
    </Routes>
  </BrowserRouter>
     
      

    </div>
  );
}

export default App;
