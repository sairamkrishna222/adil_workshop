import React from 'react';
import AddNewCity from './AddNewCity';
import './style.css';
class Home extends React.Component {
    constructor(){
        super();
        this.state= {
            cityData:'',
            name:'',
            details:''
        }
    }
    componentDidMount() {
        fetch('http://localhost:8900/CityData',{'method':'GET'})
        .then(resp =>resp.json())

        .then(data =>this.setState({
           cityData:data
        }))
    }
    displayCityList = () => {
        if(this.state.cityData) {
            return this.state.cityData.map((data) =>{
                return(
                <option value={data.id}>{data.city}</option>
            )            
        })
        }
        
    }
    changeHandler = (id)=> {
        console.log("state id",id)
        fetch(`http://localhost:8900/CityData/${id}`,{'method':'GET'})
        .then(resp =>resp.json())

        .then(data =>this.setState({
           name:data.city,
           details:data.details
        }))
       
    }
    render() {
        console.log(this.state)
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1>Display City Name and Details</h1>
                    </div>
                    <hr/>
                    <div className="panel-body">
                        <label htmlFor="citySelection">Select the City</label>
                        <select name="citySelection" onChange={(event)=>{this.changeHandler(event.target.value)}}>
                            <option>-----Select City------</option>
                            {this.displayCityList()}
                        </select> 

                        <div className="display">
                            <h3>{this.state.name}</h3>
                            <p>{this.state.details}</p>
                        </div>       

                    </div>

                </div>              
                <AddNewCity/>
                

            </div>
                

            
            
        );
    }
}

export default Home;