import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./header.css"
import headImg from '../../assets/img/header.jpeg';
const tabBar =[
    {
        title: "首页",
        path: 'path/path?id=0'
    }, {
        title: "首页",
        path: 'path/path?id=1'
    }, {
        title: "首页",
        path: 'path/path?id=2'
    }
]

function tabClick(e){
    console.log(e.currentTarget.getAttribute('data-path'))
}



class Header extends Component{
    render() {
        return (
            <div className={'header-box'}>
                <img src={headImg} alt=""/>
                <h2 className={"username"}>Huier</h2>
                <ul className={"info-box"}>
                    {
                        tabBar.map((item,index) => {
                             return (
                                 <li className={"item"} onClick={tabClick} key={index} data-path={item.path}>{item.title}</li>
                             )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Header;