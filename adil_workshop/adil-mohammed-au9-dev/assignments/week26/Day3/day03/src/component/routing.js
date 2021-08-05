import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../container/NewsDetails';
import ImageDetails from '../container/ImageDetails';

const Routing = ()=>{
    return(
        <BrowserRouter>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={NewsDetails} />
            <Route exact path='/image/:id' component={ImageDetails} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;