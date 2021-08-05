import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import users from '../dummyData/users';


const Users = (props) => {

    
    console.log('Users',props);
    const redirect = (id) => {
        props.history.push('/users/'+id)
    };

    return (
        <React.Fragment>
            <Header title="Users" />
            <ul>
                {
                    users.map( user => {
                        return (
                            <li onClick={()=>redirect(user.id)} key={user.id}>
                                {user.name}
                            </li>
                        )
                    })
                }
            </ul>
            <Footer title='Footer Heading'/>
        </React.Fragment>
    );

};

export default Users;