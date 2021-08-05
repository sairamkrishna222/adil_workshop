import React, { Component } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Content';


class HomeDetails extends Component{
    
    constructor(props){
        super(props);
        this.state={
            items: [],
            isLoaded1: false,
        }
    }

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
        const postId = this.props.match.params.post_id;
        const postDetails = items.filter(item => item.id === parseInt(postId,10))[0];
        console.log(postDetails);


    
        return (
            <React.Fragment>
                
                <Header title={postDetails?.title} />
                <div className="div1">
                    <p>UserId :{postDetails?.userId}</p>
                    <p>Id: {postDetails?.id}</p>
                    <p>Title: {postDetails?.title}</p>
                    <p>Body: {postDetails?.body}</p>
                </div>
                <Footer title='Footer Heading'/>
            </React.Fragment>
        )

        
    }
}

export default HomeDetails;