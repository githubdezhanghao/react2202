/*
    图片验证码
    1、服务端生成   返回方式是图片或者base64字符串
    2、客户端需要调用服务端接口生成验证码   并显示到页面
    3、点击图片加载新验证码
*/
import axios from "axios";
import React, { Component } from "react";
import PTS from 'prop-types'
export default class Captcha extends Component {
  state = {
    img: "",
    key: "",
  };
  static propsTypes = {
    height:PTS.string,
    height: PTS.string
  }
  static defaultProps = {
    height:'150',
    height: '40'
  }
  componentDidMount() {
    this.load();
  }
  load() {
    axios.get("https://reactapi.iynn.cn/captcha/api/math").then((res) => {
      const { img, key } = res.data;
      this.setState({ img, key });
    });
  }
  render() {
    const{height,width} = this.props
    const { img } = this.state;
    return (
      <div>
        <img
          src={img}
          alt=""
          onClick={() => this.load()}
          style={{ cursor: "point" }}
          width={width}
          height={height}
        />
      </div>
    );
  }
}
