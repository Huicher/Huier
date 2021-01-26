
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SiderTemplate from "./component/sider/index";


import headerImg from "./assets/img/header.jpeg"

import { Layout, Row, Col, Avatar, Input, Menu, Dropdown} from 'antd';

import {
    UserOutlined,
    DownOutlined
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;


export default class App extends Component {
    state = {
        collapsed: false,
        visible: false,
    };
    /**
     * 右侧底部切换
     * @param collapsed
     */
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    /**
     * 点击右上角的菜单
     * @param e
     */
    handleMenuClick = e => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };

    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">我的主页</Menu.Item>
                <Menu.Item key="2">我的博客</Menu.Item>
                <Menu.Item key="3">退出</Menu.Item>
            </Menu>
        );
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
                    <div className="logo" />
                    <SiderTemplate></SiderTemplate>
                </Sider>
                <Layout className="site-layout" style={{width: '90%'}}>
                    {/*右侧的顶部*/}
                    <Header style={{backgroundColor:'#ffffff',}}>
                        <Row>
                            <Col span={8}>
                                React + Antd 实践 boker
                            </Col>
                            <Col span={8}><Input placeholder="请输入你想要的......" /></Col>
                            <Col span={8} style={{textAlign:'right'}}>
                                <Avatar style={{ backgroundColor: '#87d068', marginRight: 8 }} icon={<UserOutlined />} />
                                <Dropdown overlay={menu} onVisibleChange={this.handleVisibleChange} visible={this.state.visible}>
                                    <a className="" onClick={e => e.preventDefault()}>
                                        Admin <DownOutlined />
                                    </a>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Header>
                    {/*内容*/}
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    {/*底部*/}
                    <Footer style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}