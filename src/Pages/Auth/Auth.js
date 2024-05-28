import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";

import { DataContext } from "../../Components/DataProvider/Dataprovider";
import { Type } from "../../utility/Action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signUp: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);

  const authHandler = (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      //firebase auth
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            User: userInfo.user,
          });
          setLoading({ ...loading, signin: false });
          console.log(navStateData, "navstate")
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            User: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://letsdovideo.com/wp-content/uploads/2016/11/Amazon_Logo.jpg"
          alt=""
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sing In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontweight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}

        <form onSubmit={authHandler}>
          <div>
            <label htmlFor=""> Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor=""> password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signinButton}
          >
            {/* spinner conditions */}
            {loading.signin ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sing In"
            )}
          </button>
        </form>
        {/* agrement */}
        <p>
          by signing -in you agree to the Amazon Fake Clone conditions of use &
          sale.please see our privacy Notice , our cookies notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          type="submit"
          name=" signup"
          className={classes.login_registerbutton}
        >
          {/* spinning condition */}
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
