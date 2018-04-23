import React, {Component} from 'react'

class NewTweedView extends Component{
    constructor(props) {
        super(props)
        this.state= {

        }
    }

    render(
        <div id="new-tweed-form">
         <input type="text" name="content" placeholder="What's on your mind?" value={content} /><br/>
         <input type="text" name="author" placeholder="Who are you?" value={author} /><br/>
         <button id="submit" >Tweed It</button>
        </div>
    )
}