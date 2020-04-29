import React from 'react';
import axios from 'axios';

class Display extends React.Component {
    constructor() {
        super()
        this.state = {
            pics: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('http://jsonplaceholder.typicode.com/albums/'+this.props.match.params.topic+'/photos')
        .then(result => 
            this.setState({
                pics: result.data,
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
               return(<React.Fragment>

                <h2>Inside {this.props.match.params.topic} component</h2>
                {this.state.pics ?
                              this.state.pics.map(pic => {
                                     return (
                                        
                                    <a href={pic.thumbnailUrl}><img src={pic.thumbnailUrl} alt="pic" /> </a>
                                 )
                             }):<span>No Data found</span>
                             }
                       
               </React.Fragment>)
       }
}
export default Display;