import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Content';


const Privacy = () =>{
    
    return(
        <React.Fragment>
            <Header title='Privacy Policy'/>
            <Content 
                title='What is a Privacy Policy?' 
                paracon='A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties. Pinterest also states that it collects user location data from mobile devices, and if someone makes a purchase on Pinterest, payment and contact information - including an address and phone number - will be collected. If users buy products or services for others, Pinterest gathers their contact information and shipping details, too.'/>
            <Footer title='Footer Heading'/>
        </React.Fragment>
    );
}
 export default Privacy;

