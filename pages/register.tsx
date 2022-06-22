import LoginComponent from "../components/Login";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";

const Register = () => {
  <>
    <MetaComponent title={`Register | ${BRAND_NAME}`} />
    <LoginComponent />
  </>;
};

export default Register;
