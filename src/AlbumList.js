import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect } from 'react-redux';
import DisplayAlbums from './actions/DisplayAlbums'
import './App.scss'

export class AlbumList extends React.Component {

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/albums')
        .then(result => 
            this.props.displayAlbums(result.data)
        )

    }
    render() {
        
        const {albums} = this.props;

        const albumList = albums.length ? (
            albums.map(album => {
                return (
               
                    
                    <Link to={"/display/"+album.id}>
                         <div className="album" key={album.id}>
                        <span className="album-name">{album.title}</span>
                        </div>
                    </Link>
                    

               
                )
            })
            ) : (
                <div className="center">No albums yet</div>
            )

        return (<React.Fragment>
            <div className="header">
                <h4>Albums</h4>
                </div>
            <div className="container">
                
                {albumList}
            </div>

            </React.Fragment>)  
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayAlbums: (list) => {
            dispatch(DisplayAlbums(list))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);