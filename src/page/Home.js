import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { Route, Link } from 'react-router-dom'
import ButtonDemo from '../components/ButtonDemo'
import InputDemo from '../components/InputDemo'
const {Header, Content} = Layout;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    render() {
        return (
            <Layout>
              <div className="logo"/>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <UserOutlined />
                  <span>button</span>
                  <Link to='/'></Link>
                </Menu.Item>
                <Menu.Item key="2">
                <UserOutlined />
                  <span>input</span>
                  <Link to='/input'></Link>
                </Menu.Item>
              </Menu>
   
            <Layout>
              <Header style={{background: '#fff', paddingLeft: '20px'}}>
              </Header>
              <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                <Route path='/' exact component={ButtonDemo}></Route>
                <Route path='/input' exact component={InputDemo}></Route>
              </Content>
            </Layout>
          </Layout>
        )
    }
}

export default Home
