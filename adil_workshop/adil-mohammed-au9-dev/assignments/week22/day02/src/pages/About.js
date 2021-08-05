import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Content from '../Components/Content';


const About = () =>{
    
    return(
        <React.Fragment>
            <Header title='About Us'/>
            <Content 
                title="Why the About Us Page Rocks: It's human." 
                paracon='People tend to think that "About Us" pages have to sound formal to gain credibility and trust. But most people find it easier to trust real human beings, rather than a description that sounds like it came from an automaton. Trying to sound too professional on your "About Us" page results in stiff, “safe” copy and design -- the perfect way to make sure your company blends in with the masses.

                Instead, Eight Hour Day showcases the people behind the company and humanizes its brand. Introducing the founders by name and featuring the photos of them on the "About Us" page drives home the point that Nathan and Katie are -- as they so astutely put it -- "two individuals with a passion for creativity -- creativity makes us happy."
                
                When you’re designing your "About Us" page,avoid industry jargon and replace it with an authentic voice -- yours -- to describe your product or service. Sure, it needs to be polished and free of errors, but it should always sound friendly and real.'/>
            
            <Footer title='Footer Heading'/>
        </React.Fragment>
    );
}
 export default About;

