import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Profile } from '../components/Profile';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { Edit } from '../components/Edit';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Routes>

                    <Route
                        exact 
                        path="/login" 
                        element={<Login/>}
                    />
                    <Route 
                        exact 
                        path="/register" 
                        element={<Register/>}
                    />
                    <Route 
                        exact 
                        path="/algo" 
                        element={<Profile/>} 
                    />
                    <Route 
                        exact 
                        path="/edit" 
                        element={<Edit/>} 
                    />
                    <Route path='*'
                       element={<Login/>}/>  
                </Routes>
            </div>
        </Router>
    )
}
