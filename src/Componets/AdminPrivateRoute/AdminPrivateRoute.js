import React from 'react';
import { Navigate } from 'react-router-dom';
  import useAuth from '../Hooks/useAuth';

const AdminPrivateRoute = ({children}) => {

    const {user,admin}=useAuth();
    return (
        user.email && admin ? (
            children
          ) : (
            <Navigate
              to="/home"
              
            />
            
          )
         
    );
};

export default AdminPrivateRoute;