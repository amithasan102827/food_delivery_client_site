import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
   
    useHistory,
    useLocation
  } from "react-router-dom";
  import { Navigate } from 'react-router-dom';
  import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const {user}=useAuth();
    return (
        
    
       
         user.email ? (
            children
          ) : (
            <Navigate
              to="/SingIn"
              
            />
            
          )
         

    );
};

export default PrivateRoute;