import React, {Component} from 'react'

class PokeList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            pokemon_entries: [ ]
        }
    };

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=151')
            .then((response) => {
                response.json().then((pokemon_entries) => {
                    console.log(pokemon_entries);
                    this.setState({
                        pokemon_entries: [
                            pokemon_entries.name
                            
                            // pokemon_species.name = name
                        ]
                    });
                });
            });
    };

    render() {
        return(
            <div>
                <h1>Pokedex v1</h1>
                <h3>The original 151 Pokemon</h3>
                <h3>{this.props.pokemon_entries}</h3>
            </div>
        );
    };


};


export default PokeList;