import LoginComponent from "../components/Login";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";

const Login = () => {
  return (
    <>
      <MetaComponent title={`Login | ${BRAND_NAME}`} />
      <LoginComponent />
    </>
  );
};

export default Login;
