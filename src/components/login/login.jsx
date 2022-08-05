import {
  Title,
  Input,
  Button,
  Text,
  A,
} from "../../styled_components/bassic_styled";

import styled from "./login.module.css";

import { useReducer, useState } from "react";
import usehandaleChange from "../../hooks/inputHandaleChange";

import { useCookies } from "react-cookie";

// define to the initila state
const initialState = {
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.value };
    case "password":
      return { ...state, password: action.value };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:4000/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
    });
    const res = await req.json();
     
    console.log(res.token)
  };

  return (
    <div className={styled.loginPage}>
      <form onSubmit={onSubmit} className={styled.loginForm}>
        <Title style={{ textAlign: "center" }}>Login your account</Title>
        <div className={styled.formItem}>
          <label htmlFor="username">
            <i className="far fa-user"></i>
          </label>
          <Input
            type="text"
            placeholder="Your username"
            onChange={(e) => usehandaleChange(e, dispatch)}
            id="username"
            name="username"
            value={state.username}
          />
        </div>
        <div className={styled.formItem}>
          <label htmlFor="password">
            <i className="far fa-key"></i>
          </label>
          <Input
            type="password"
            placeholder="Your password"
            onChange={(e) => usehandaleChange(e, dispatch)}
            id="password"
            name="password"
            value={state.password}
          />
        </div>
        <div className={styled.commonError}>
          <p>{error.message}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Button type="submit">Login</Button>

          <Text style={{ color: "var(--blue)", cursor: "pointer" }}>
            Forget password
          </Text>
          <Text>
            <A href="/signup">Signup</A>
          </Text>
        </div>
      </form>
    </div>
  );
}
