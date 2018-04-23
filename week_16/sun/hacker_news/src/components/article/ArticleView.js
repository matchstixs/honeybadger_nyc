// - this component will need to import only `React`
import React, {Component} from 'react'

class ArticleView extends component {
    constructor(props) {
        super(props)
        // Is stateless component, which accepts props of `title`, `author` and `openModal`
    

    return(
        <div class="article">
          <h1 class="title">{this.props.title}</h1>
          <h3 class="author">Author: [AUTHOR]</h3>
        </div>
    )


    }
}




// - when the `article` div is clicked it will call the `openModal` prop


















import React from 'react';

const SubComponent = ({ imageSrc }) => {
    return (
        <img src={imageSrc} alt='img' />
    )
};

export default SubComponent;
