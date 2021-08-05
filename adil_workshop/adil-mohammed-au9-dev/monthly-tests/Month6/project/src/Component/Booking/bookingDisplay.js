import React from 'react';
const burl="http://localhost:8900/bookings";
const BookingView = (props) => {

    const updateAccept =(e)=>{
        console.log('updateAccept')
        fetch(burl+'/'+e.target.value)
        .then((res) => res.json())
        .then((data) => {
            const resData = data;
            resData.status = 'Booking Confirmed';

            fetch(burl+'/'+e.target.value, {
                method:'PUT',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(resData)
            })
            .then(window.location.reload())
        })
    }    
    const updateReject =(e)=>{
        console.log('updateReject')
        fetch(burl+'/'+e.target.value)
        .then((res) => res.json())
        .then((data) => {
            const resData = data;
            resData.status = 'Booking Rejected';

            fetch(burl+'/'+e.target.value, {
                method:'PUT',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(resData)
            })
            .then(window.location.reload())
        })
    }
    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hotelname}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.status}</td>
                        {sessionStorage.getItem('jwtRole')==='Admin'&&     
                        <td>
                            <button className="btn btn-success" value={item.id} 
                            onClick={(event)=>{updateAccept(event)}}>
                                Accept</button>
                            <button className="btn btn-danger" 
                            value={item.id}
                            onClick={(event)=>{updateReject(event)}}>reject</button>
                        </td>
                        }
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>Bookings</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Hotel Name</th>
                        <th>User Name</th>
                        <th>Phone</th>
                        <th>Status</th>                        
                        {sessionStorage.getItem('jwtRole')==='Admin'&&                        
                            <th>Update Status</th>
                        
                        }                   
                                              
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingView;