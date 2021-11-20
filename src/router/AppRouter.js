import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { App } from '../App';
import { Register } from '../components/Register';

export const AppRouter = () => {    
    return (  
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact                    
                            path='/'
                            component={App}
                        />

                        <Route 
                            path='/register'
                            component={Register}
                        />

                        <Redirect to = '/' />                    
                    </Switch>
                </div>          
            </Router>                    
    )
}