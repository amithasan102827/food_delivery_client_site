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
import Login from './Componets/Login/Login';
import SingIn from './Componets/SingIn/SingIn';
import AuthProvider from './Componets/Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="home" element={<Home />}>
            </Route>
            <Route path="MainBlogPage" element={<MainBlogPage />}>
            </Route>
            <Route path="Login" element={<Login></Login>}>
            </Route>
            <Route path="SingIn" element={<SingIn></SingIn>}>
            </Route>
          </Routes>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
