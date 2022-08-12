import axios from "axios";
axios.interceptors.request.use((cfg) => {
  // cfg.baseURL = 'https://reactapi.iynn.cn'
  return cfg;
});
axios.interceptors.response.use((res) => {
  const { errNo } = res.data;
  if (
    errNo === 0 &&
    res.data.context.jwt &&
    res.data.context.expire &&
    res.data.context.acl
  ) {
    localStorage.setItem("jwt", res.data.context.jwt);
    localStorage.setItem("expire", res.data.context.expire);
    localStorage.setItem("acl", JSON.stringify(res.data.context.acl));
  }
  return res;
});

export default axios;
