import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Display from './Display';

class AlbumList extends React.Component {
    constructor() {
        super()
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('http://jsonplaceholder.typicode.com/albums')
        .then(result => 
            this.setState({
                albums: result.data,
                isLoading: false
            })
        )
        .catch(error => 
            this.setState({
                error,
                isLoading: false
            })
        );
    }
    render() {
        if(this.state.isLoading) {
            return "Loading..."
        }
        if(this.state.error) {
            return <p>{this.state.error.message}</p>
        }
        return (<React.Fragment>
                    {/* <table style={{width:'60%'}} className='table'>
                         <thead className="thead-light">
                             <tr>
                                  <th>Album Name</th>
                             </tr>
                         </thead>
                         <tbody>
                              {this.state.albums ?
                              this.state.albums.map(album => {
                                     return (<tr key={Math.random()}>
                                             <td>{album.title}</td>
                                     </tr>)
                             }):<tr><td>No Data found</td></tr>
                             }
                         </tbody>
                    </table> */}

                    <Router>
                    <React.Fragment>

                    {this.state.albums ?
                              this.state.albums.map(album => {
                                     return (
                                        
                                        <Link to={"/display/"+album.id}>             
                                        <li>{album.title}</li> 
                                        </Link> 
                                 )
                             }):<span>No Data found</span>
                             }

                       
                        
                        {/* <Route path="/display/:topic" component={Display}/> */}
                    </React.Fragment>
                </Router>

            </React.Fragment>)  
    }
}
export default AlbumList;