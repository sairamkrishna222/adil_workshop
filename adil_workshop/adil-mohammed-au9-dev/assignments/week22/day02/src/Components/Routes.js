import {Route, Switch} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Privacy from '../pages/Privacy'
import Users from '../pages/Users';
import UserDetails from './UserDetails';
import HomeDetails from './HomeDetails';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:post_id" exact component={HomeDetails} />
            <Route path="/about" exact component={About} />
            <Route path="/privacy" exact component={Privacy} /> 
            <Route path="/users" exact component={Users} />
            <Route path="/users/:user_id" exact component={UserDetails} />
        </Switch>
    );
}

export default Routes;