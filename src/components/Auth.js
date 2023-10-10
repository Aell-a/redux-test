import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useRef, useState } from "react";

const Auth = () => {
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const login = () => {
    const formValidity =
      emailRef.current.value.trim().length > 0 &&
      passwordRef.current.value.trim().length > 0;
    if (formValidity) {
      dispatch(authActions.login());
    } else {
      setError(true);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" id="password" />
          </div>
          <button onClick={login}>Login</button>
        </form>
        {error && <p>Enter a valid email & password</p>}
      </section>
    </main>
  );
};

export default Auth;
