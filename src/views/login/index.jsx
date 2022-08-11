import React, { Component } from "react";
import "../../assets/css/login.scss";
import { Tabs, Card } from "antd";
const { TabPane } = Tabs;
export default class index extends Component {
  render() {
    return (
      <div className="login">
        <Card className="center">
          <TabPane tab="密码登录" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="短信登录" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Card>
      </div>
    );
  }
}
