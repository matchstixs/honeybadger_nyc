import React, {Component} from 'react'
import PokeList from './PokeList'
import PokeStats from './PokeStats'

class PokeIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: [ ],
            }
        }
    
    render() {
        return(
            <div>
            <h1>Pokedex for first 151 pokemon from Red/Blue</h1>
                <PokeList />
                <PokeStats />
            </div>
        )
    }


}

export default PokeIndex