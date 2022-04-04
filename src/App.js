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

import AddToCart from './Componets/AddToCart/AddToCart';
import { createContext, useEffect, useState } from 'react';





export const userContext = createContext();

function App() {

  
  const [meals,setMeals]=useState([])

  const [displayMeals,setDisplayMeals]=useState([]);

  const [cart,setCart]=useState([]);




  const handleAddToCart =(meal) => {
    let newCart=[...cart, meal];
    console.log(newCart);
    setCart(newCart);


  console.log(newCart);
  

};
  




  return (




    <div className="App">
   
     
        <AuthProvider>
        <userContext.Provider
      value={[
      meals,
      setMeals,
      displayMeals,
      setDisplayMeals,
      // setCart,
      // cart,
      handleAddToCart
    
      
     
      ]}
    >

          <BrowserRouter>
         
            <Header cart={cart}></Header>
            <Routes  >
          
              <Route path="/" element={<Home />}>
              </Route>
              <Route path="home" element={<Home cart={cart} setCart={setCart}  ></Home>} >
              </Route>
              <Route path="MainBlogPage" element={<MainBlogPage />}>
              </Route>
              <Route path="Login" element={<Login></Login>}>
              </Route>
              <Route path="SingIn" element={<SingIn></SingIn>}>
              </Route>

              <Route path="AddToCart" element={<AddToCart cart={cart} setCart={setCart}  ></AddToCart>}>
              </Route>
            
            </Routes>
           
          </BrowserRouter>

          </userContext.Provider>
          
        </AuthProvider>
        

    </div>
  );
}

export default App;
