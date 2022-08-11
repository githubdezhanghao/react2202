import {Spin} from "antd"
import React from 'react'
import PTS from 'prop-types'
import styled from "styled-components"
// 加载组件的状态显示在页面中间并传递一些参数展示不同效果
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
position: fixed;
`
export default function Loading(props) {
  return (
    <Main>
    <Spin tip={props.tip} size={props.size} spinning={props.spinning}></Spin>
    </Main>
  )
}
//prop类型约束
Loading.propTypes = {
    tip:PTS.string,
    size:PTS.string,
    spinning:PTS.bool
}
//默认值
Loading.defaultProps = {
    tip:'加载中...',
    size:'large',
    spinning:true
}