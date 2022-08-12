import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from '@/components/Loading.jsx'
import Login from "@/views/login/index.jsx";
// const Login = lazy(() => import("@/views/login/index.jsx"));
const Dashboard = lazy(()=>import('@/views/dashboard/index.jsx'))
//导入路由相关组件
const Routes = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Suspense>
    </>
  );
};
export default Routes;
