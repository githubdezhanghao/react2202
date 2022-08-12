import React, { Component } from "react";
import {
  LockOutlined,
  UserOutlined,
  InsuranceTwoTone,
} from "@ant-design/icons";
import { Button,  Form, Input, Space, message } from "antd";
import Captcha from "../../components/Captcha";
import url from "../../config/url";
import req from "../../http/req";
import { withRouter } from "react-router-dom";
class PasswordLogin extends Component {
  state = {
    key: "",
  };
  onFinish = (values) => {
    values.key = this.state.key;
    console.log(values);
    req.post(url.Login, values).then((res) => {
      console.log(res);
      if (res.data.errNo === 0) {
        // alert('登录成功')
        message.success("登录成功", 1, () => {
          this.props.history.push("/dashboard");
        });
      } else {
        // let str = ''
        //map映射的方式
        let tmp = {100001:res.data.errText,100004:'用户名或密码错误'}
        // if(res.data.errNo === 100001){
        //   str = res.data.errText
        // }
        //  if(res.data.errNo === 100004){
        //   str = '用户名或密码错误'
        // }
        // alert('用户或密码错误')
        message.error(tmp[res.data.errNo], 1, () => {
          window.location.reload();
        });
      }
    });
  };
  getKey = (key) => {
    this.setState({ key });
  };
  render() {
    return (
      <Form
        name="normal_login"
        className="login-form"
        onFinish={this.onFinish}
        size="large"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            {
              min: 6,
              message: "密码长度必须6位以上",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          name="captcha"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <Space>
            <Input
              prefix={<InsuranceTwoTone className="site-form-item-icon" />}
              placeholder="验证码"
            />
            <Captcha>{this.getKey}</Captcha>
          </Space>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default withRouter(PasswordLogin);
