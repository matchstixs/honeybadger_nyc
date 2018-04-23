import React, {Component} from 'react';
import Cookies from 'cookies-js';

class CookiesFactory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            sugar: null,
            chocolate: null,
            lemon: null, 
        }
    };

    // 1. click button
    // 2. get cookie    
    // 3. render cookie

// get cookie 
    getCookie(flavor) {
        return Cookies.get(flavor) || 0;
    }

    // sugar click button
    sugarButton() {
        const sugarCookie = this.getCookie('sugar');
        const newCount = parseInt(sugarCookie, 10) + 1;
        Cookies.set('sugar', newCount);
        this.setState({sugar: newCount});
    }

    // chocolate click button
    chocolateButton() {
        const chocolateCookie = this.getCookie('chocolate');
        const newCount = parseInt(chocolateCookie, 10) + 1;
        Cookies.set('chocolate', newCount);
        this.setState({chocolate: newCount});
    }

    // lemon click button
    lemonButton() {
        const lemonCookie = this.getCookie('lemon');
        const newCount = parseInt(lemonCookie, 10) + 1;
        Cookies.set('lemon', newCount);
        this.setState({lemon: newCount});
    };


    // render
        render() {
            return(
                <div>
                    <button id="sugar" onClick={ (flavor) => this.sugarButton()}>
                    <img src="/images/sugar_cookies.jpg"></img>
                    </button>

                    <button id="chocolate" onClick={ (flavor) => this.chocolateButton()}>
                    <img src="/images/chocolate_cookies.jpg"></img>
                    </button>

                    <button id="lemon" onClick={ (flavor) => this.lemonButton()}>
                    <img src="images/lemon_cookies.jpg"></img>
                    </button>
                    
                    {this.state.sugar}
                    {this.state.chocolate}
                    {this.state.lemon}
                </div>
            );
        };


};

export default CookiesFactory;