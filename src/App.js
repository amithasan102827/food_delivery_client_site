import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import Blog from './Componets/Blog/Blog';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './Componets/Header/Header';
import MainBlogPage from './Componets/MainBlogPage/MainBlogPage';
import Login from './Componets/Login/Login';
import SingIn from './Componets/SingIn/SingIn';
import AuthProvider from './Componets/Context/AuthProvider';

import AddToCart from './Componets/AddToCart/AddToCart';
import { createContext, useEffect, useState } from 'react';
import MakeAdmin from './Componets/MakeAdmin/MakeAdmin';
import DashBoard from './Componets/DashBoard/DashBoard';
import Footer from './Componets/Footer/Footer';
import PrivateRoute from './Componets/PrivateRoute/PrivateRoute';
import Payment from './Componets/Payment/Payment';





export const userContext = createContext();

function App() {


  const [meals, setMeals] = useState([])

  const [displayMeals, setDisplayMeals] = useState([]);

  const [cart, setCart] = useState([]);
  const [total,setTotal]=useState(null);




  const handleAddToCart = (meal) => {
    let newCart = [...cart, meal];
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

              <Route
                path="AddToCart" element={
                  <PrivateRoute>
                    <AddToCart cart={cart} setCart={setCart} total={total} setTotal={setTotal}   ></AddToCart>
                  </PrivateRoute>
                }>

              </Route>

              <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}>
              </Route>
              

              <Route path="/DashBoard/*" element={<DashBoard></DashBoard>}>
              </Route>
              
              {/* <Route path="/payment/:appointmentId" element={<Payment></Payment>}>
              </Route> */}
              <Route path="/AddToCart/payment" element={<Payment total={total}></Payment>}>
              </Route>

            </Routes>

          </BrowserRouter>


        </userContext.Provider>

      </AuthProvider>


    </div>
  );
}

export default App;
