import React, { Component } from 'react'
import axios from 'axios';

export class Countries extends Component {

    state = {
        sorted: []
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
            .then(res => this.setState({sorted: res.data }))
    }
    
    render() {
        return (
            <div>
                <h2 style={{marginBottom:'10px', marginLeft:'25px'}}>Countries by Cases</h2>
                        <div style= {{height:'250px', overflow:'auto', marginLeft: '25px',width: '260px'}} >
                            {this.state.sorted.map((data) => (
                                
                                <div style={country} >
                                <h4 >{data.country}</h4>
                                <h4 style={{marginLeft:'15px'}}>{parseInt(data.cases).toLocaleString()}</h4>
                                </div>
                            ))}
                        </div>
            </div>
        )        
    }
}

const country = {
    display: 'flex',
}

export default Countries