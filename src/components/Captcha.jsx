import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PTS from "prop-types";
import axios from "axios";
export default function Captcha(props) {
  const [img, setImg] = useState("");
  const load = () => {
    axios.get("https://reactapi.iynn.cn/captcha/api/math").then((res) => {
      const { img, key } = res.data;
      setImg(img);
      console.log(props);
      props.children(key)
    });
  };
  useEffect(() => {
    load();
    return () => {};
  }, []);
  const { height, width } = props;
  return (
    <div>
      <img
        src={img}
        alt=""
        onClick={load}
        style={{ cursor: "point"  ,boxShadow:'0 0 10px blue'}}
        width={width}
        height={height}
      />
    </div>
  );
}
Captcha.propsTypes = {
  height: PTS.string,
  height: PTS.string,
};
Captcha.defaultProps = {
  height: "150",
  height: "40",
};
