import React from 'react';
import ReactDOM from 'react-dom';

import "./index.css"
import Header from './header.js';


function clickMe() {
    alert("点击事件")
}
const list =[1,2,3,4,5,6,7,8,9,10];

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div className={"main"}>
                    <Header></Header>
                </div>
            </div>
        );
    }
}

export default App;