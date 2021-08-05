

import {Switch,BrowserRouter,Route} from "react-router-dom"
import React from "react"

import Layout from "./layout" 
import Profile from "./profile" 



const Routes=()=>{

    return (
        <BrowserRouter>
        <Switch>
            <Route  path="/" exact component={Layout} />
            <Route  path="/profile" exact component={Profile} />
        </Switch>
        
        
        </BrowserRouter>
    )

}

export default Routes