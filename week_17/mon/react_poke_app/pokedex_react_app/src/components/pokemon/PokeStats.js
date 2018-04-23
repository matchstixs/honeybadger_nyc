import React, {Component} from 'react'

class PokeStats extends Component {
    constructor(props) {
        super(props)        
        this.state = { 
            data: [ ]
        }
    };

componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokedex/1/')
        .then((response) => {
            response.json().then((data) => {
                console.log(data)
                // this.setState({
                //  });
            });
        });
};

render() {
    return(
        <div>
            {/* <h1>{this.prop.name}</h1> */}
            <h3>Weight:</h3>
            <h3>Abilities:</h3>
        </div>
)};

};

export default PokeStats;