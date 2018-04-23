import React, {Component} from 'react'

class TweedView extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    };
    
    render() {
        return (
            <div class="tweed">
                <p class="content">{content}</p>
                <p class="author">{author}</p>
                <p class="delete" id={id}>delete</p>
            </div>
        )
    };

};

export default TweedView