


import React from "react"
import googlekeys from "./googlekeys.json"
import {Link} from "react-router-dom"
import {GoogleLogin} from "react-google-login"

class Layout extends React.Component{

    constructor(){
        super()
        this.state={

            isloggedin:false


        }
    }

    loggedinstate=(resp)=>{

        if (!resp && !resp.accessToken){
            alert("login failed")
            return
        }

        const user={

            token:resp.accessToken,
            userData:resp.profileObj
        }

        localStorage.setItem("userkey",JSON.stringify(user))
        this.setState({
            isloggedin:true
        })

    }




    logout=()=>{

        localStorage.removeItem("userkey")
        this.setState({
            isloggedin:false
        })
    }

componentDidMount(){

    const user=localStorage.getItem("userkey")

    if (user){
        this.setState({
            isloggedin:true
        })
    }
}


    render(){
        console.log(this.state);
        return(


            <div>
                {
                    this.state.isloggedin &&

                    <>
                    <Link to="/profile">Profile</Link>
                <button onClick={this.logout}>Logout</button>

                </>
                }


                {
                    !this.state.isloggedin &&
                    <GoogleLogin
                   
                clientId={googlekeys.clientId}
                onSuccess={this.loggedinstate}
                onFailure={this.loggedinstate}
                buttonText="Login"   


                
                />}



            </div>
        )
    }





}


export default Layout