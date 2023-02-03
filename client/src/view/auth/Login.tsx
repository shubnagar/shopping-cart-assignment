import { useState } from "react";
import CommonInput from "../../components/common/CommonInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <p>Please log in</p>
      <form>
        <CommonInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <CommonInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Login;
