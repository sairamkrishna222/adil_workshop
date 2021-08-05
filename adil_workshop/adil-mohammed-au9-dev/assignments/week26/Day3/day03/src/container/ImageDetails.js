import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectedImage} from '../actions/actionfile';

class ImageDetails extends Component{
    componentDidMount(){
        this.props.dispatch(selectedImage(this.props.match.params.id))
    }

    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                    <div className="tags">
                        <span>
                            <i className="fa fa-eye"></i>
                            {data.views}
                        </span>
                        <span>
                            <i className="fa fa-thumbs-up"></i>
                            {data.likes[0]}
                        </span>
                        <span>
                            <i className="fa fa-thumbs-down"></i>
                            {data.likes[1]}
                        </span>
                    </div>
                    <div className="top">
                        <h2>{data.title}</h2>
                        <span>Photo of:{data.artist}</span>
                        <img src={`/images/galleries/${data.images[0]['img']}`}/>
                        <div className="body_news">
                            {data.images[0]['desc']}
                        </div>
                    </div>
                </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.imageData)}
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        imageData:state.gallery
    }
}

export default connect(mapStateToProps)(ImageDetails)