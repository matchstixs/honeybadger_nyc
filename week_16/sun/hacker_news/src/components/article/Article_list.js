// - `ArticleList` will need the following imports `React`
import React, {Component} from 'react'

// - `ArticleList` will need a `constructor` a mandatory `render` and a `componentDidMount` life cycle method.

// - `constructor`
//     - will call `super`
//     - will set `state` of the component with `data` set to an empty array
class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [ ]
        }
    }

    // - `render`
    //     - will map over the new data state and render an `Article` for each item in the `data` state
    //     - the `Article` component will accept props of `id` and `key` each set to the id of the article
    render() {
        //  we will render a simple div with some text in it just to make sure its working. 
        return(
            <div>
                {
                    this.state.data.map((articleId) => {
                        return (
                            < Article 
                                key={articleId}
                                articleId={articleId}
                            />
                        )
                    })
                }
                <h1>Article List</h1>
            </div>
        )
        
        
        //  So in our `ArticleList` components render, 
        //  lets render a `div` with a nested `h1` with some text in it. 
        //  Go back to the browser and be sure your component is rendering to the page. 
        //  Remember this component is being rendered by `App` which knows how to go to the page. 
        //  Once you know the component is working we can move on**
        
    }
    
    // - `componentDidMount`
    //     - will make a request to the proper Hacker News endpoint to get all of todays `top stories`
    //     - then it will set the state of `data` in this component to the body of the returned information
    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        data
                    });
                });
            });
    }


}

// - Be sure to `export` `ArticleList` at the bottom of the file.
export default ArticleList;
// - Go back to the `App` component and `import` the newly created `ArticleList` file as `ArticleList`