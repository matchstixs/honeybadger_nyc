// - `Article` will need the following imports: `React`, `request`
import React, {Component} from 'react'
import request from 'request'


// #### `Article` will need the following functionality
class Article extends Component {
    // - `constructor` which accpets a `props` argument
    constructor(props) {
        super(props);
        this.state= {
            data: [ ],
            modalOpen: false
            //     - will call `super` which accepts a `props` argument
            //     - will set `state` of the component with `data` set to an empty object
            //     - will set `state` of the component with `modalOpen` set to `false`
        }

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        // - `componentDidMount`
        //     - will make a request to the proper Hacker News endpoint to get the individual article from the `id` being passed through props
        //     - then it will set the state of `data` in this component to the body of the returned information
        fetch('https://hacker-news.firebaseio.com/v0/item/<id>')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        data
                    });
                });
            });
    }

    // - `openModal`
    //     - will set the state of the components `modalOpen` to true
    openModal() {
        modalOpen: true
    }

    // - `closeModal`
    //     - will set the state of the components `modalOpen` to false
    closeModal() {
        modalOpen: false
    }


    // - `render`
    //   **Test your component to make sure its working with dummy text first**
    render() {
        console.log("rendered")
        return (
            //     - will render an `ArticleView` for the `data` recieved from the API
            <ArticleView title={this.state.title} author={this.state.author} />
            //     - will pass `title`, `author` and `openModal` as `props` to `ArticleView`
            this.openModal
            //     - will render a `ArticleModal` if the state of `openModal` is true
        );
    }


}

// **Remember to export this file**
export default Article

