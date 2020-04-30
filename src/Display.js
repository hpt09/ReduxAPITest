import React from 'react';
import axios from 'axios';
import {connect } from 'react-redux';
import DisplayPics from './actions/DisplayPics'
import DisplayName from './actions/DisplayName'

class Display extends React.Component {

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/albums/'+this.props.match.params.topic+'/photos')
        .then(result => 
            this.props.displayPics(result.data)
        )
        axios.get('http://jsonplaceholder.typicode.com/albums/'+this.props.match.params.topic)
        .then(result => 
            this.props.displayName(result.data.title)
        )
        
    }
       render() {
        const {pics} = this.props;
        const allPics = pics.length ? (
            pics.map(pic => {
                   return (
                      
                  <a href={pic.thumbnailUrl}><img src={pic.thumbnailUrl} alt="pic" /> </a>
               )
           })
           ) :<span>No Photos found</span>
           

               return(<React.Fragment>

                <h2>Pictures of '{this.props.name}' Album </h2>
                {allPics}
                       
               </React.Fragment>)
       }
}

const mapStateToProps = (state) => {
    return {
        pics: state.pics,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayPics: (list) => {
            dispatch(DisplayPics(list))
        
        },
        displayName: (name) => {
            dispatch(DisplayName(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);