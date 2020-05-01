import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect } from 'react-redux';
import DisplayAlbums from './actions/DisplayAlbums'

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
                <div className="post" key={album.id}>
                    <div className="card-content">
                    <Link to={"/display/"+album.id}>
                        <span className="card-title">{album.title}</span>
                    </Link>
                    </div>

                </div>
                )
            })
            ) : (
                <div className="center">No albums yet</div>
            )

        return (<React.Fragment>
            <div className="container">
                <h4 className="center">Albums</h4>
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