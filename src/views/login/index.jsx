import React, { Component } from "react";
import "../../assets/css/login.scss";
import { Tabs, Card } from "antd";
import Pass from './PasswordLogin'
const { TabPane } = Tabs;
export default class index extends Component {
  render() {
    return (
      <div className="login">
        <h1 style={{ color: '#fff' }}>客情分析和管理运营系统</h1>
        <Card className="center">
          <Tabs defaultActiveKey="1" centered tabBarGutter={100}>
            <TabPane tab="密码登录" key="1">
              <Pass></Pass>
            </TabPane>
            <TabPane tab="短信登录" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}
