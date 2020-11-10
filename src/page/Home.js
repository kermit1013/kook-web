import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  BarChartOutlined,
  MonitorOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Route, Link } from "react-router-dom";
import Initail from "../components/Initial";
import Prediction from "../components/Prediction";
import Analyze from "../components/Analyze";
import AreaPrediction from "../components/AreaPrediction"

const { Content } = Layout;

const centerStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <div className="logo" />
        <Menu
          style={centerStyle}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <HomeOutlined />
            <span>首頁</span>
            <Link to="/"></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <BarChartOutlined />
            <span>浪況預測</span>
            <Link to="/prediction"></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <MonitorOutlined />
            <span>浪點分析</span>
            <Link to="/analyze"></Link>
          </Menu.Item>
          <Menu.Item key="5">
            <ClockCircleOutlined />
            <span>時程規劃</span>
            <Link to="/analyze"></Link>
          </Menu.Item>
        </Menu>

        <Layout>
          {/* <Header style={{background: '#fff', paddingLeft: '20px'}}>
              </Header> */}
          <Content
            style={{
              margin: "24px 16px",
              padding: 12,
              background: "#fff",
              minHeight: 600,
            }}
          >
            <Route path="/" exact component={Initail}></Route>
            <Route path="/prediction" exact component={Prediction}></Route>
            <Route path="/analyze" exact component={Analyze}></Route>
            <Route path="/area-prediction"  exact component={AreaPrediction}></Route>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
