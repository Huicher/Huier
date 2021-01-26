
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import headerImg from "../../assets/img/header.jpeg"
import "./index.css"
export default class header extends Component {

    render() {
        return (
           <div className="head-img-box">
               <img src={headerImg} className="header-img"/>
           </div>
        )
    }
}



