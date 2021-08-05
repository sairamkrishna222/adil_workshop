import React from 'react';
import './style.css';
class AddNewCity extends React.Component {
    constructor(){
        super();
        this.state={
            city:'',
            details:''
        }
    }
    changeHandler= (name,value)=>{
        this.setState({
            [name]:value
        })
    }
    clickHandler = () => {
        console.log(this.state)
        fetch('http://localhost:8900/CityData',{
            'method':'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(window.location.reload())
    }
    render() {
        return(
            <div>
                    <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h2>Add New City and Details</h2>                        
                    </div>
                    <div className="panel-body">
                        <hr/>
                        <label htmlFor="city">City</label>
                        <input name="city" value={this.state.city}
                        onChange={(e)=>{this.changeHandler(e.target.name,e.target.value)}}/>
                        <br/>
                        <label htmlFor="details">Details</label>
                        <input name="details" value={this.state.details}
                        onChange={(e)=>{this.changeHandler(e.target.name,e.target.value)}}/>
                        <button className="btn btn-danger newButton"
                            onClick={this.clickHandler}>Click To Add the City</button> 
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNewCity;