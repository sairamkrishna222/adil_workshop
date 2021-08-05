import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Content';


class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded1: false,
        }
    }

    redirect = (id) => {
        this.props.history.push('/'+id)
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
        .then(json =>{
            this.setState({
                isLoaded:true,
                items: json,
            })
        });
    }

    render(){

        var {isLoaded, items} = this.state;

        if(! isLoaded){
            return(
                <React.Fragment>
                <Header title='Home'/>
    
                <div>
                    failed in loading the data
                </div>
                <Footer title='Footer Heading'/>
            </React.Fragment>
            );
        }
        else{
            return(
                <React.Fragment>
                <Header title='Home'/>
    
                <div>
                       <ul>
                           {items.map(item=>(
                               <li onClick={()=>this.redirect(item.id)} key={item.id}>

                                   Title:{item.id} | Body:{item.title}
                                
                                </li>
                           ))};
                       </ul>
                    </div>
                <Footer title='Footer Heading'/>
            </React.Fragment>
            );
        }

        
    }
}

/* const Home = () =>{
    
    return(
        <React.Fragment>
            <Header title='Home'/>
            <Content title='This is content Heading for Home Page' 
                paracon='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                Declarative views make your code more predictable and easier to debug.
                Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
'/>
            <Footer title='Footer Heading'/>
        </React.Fragment>
    );
}
 */
export default Home;

