import './Content.css';

const Content= (props) =>{
    return(
        <div className="content">
            <h1>{props.title}</h1>
            <p>{props.paracon}</p>
        </div>
    );
}

export default Content;