import {
  Title,
  Input,
  Button,
  Text,
  Error,
  A,
} from "../../styled_components/bassic_styled";
import CommonError from "../modals/commonError";

import style from "./signup.module.css";

import { useReducer, useRef, useState } from "react";
import usehandaleChange from '../../hooks/inputHandaleChange';
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    case "password":
      return { ...state, password: action.value };
    case "confirmPassword":
      return { ...state, confirmPassword: action.value };
    default:
      return state;
  }
};

export default function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const password = useRef();
  const confirmPassword = useRef();
  const [error, setError] = useState({});
  const commonError = useRef();
  const [serverError,setServerError] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setError({ confirmPassword: { msg: "Password not match!" } });
    } else {
      const req = await fetch("http://localhost:4000/signup", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state),
      });
      const res = await req.json();
      if (res.success) {
       setTimeout(()=>{
            // eslint-disable-next-line no-restricted-globals
            location.href = '/login'
       },1000)
      } else if(res.serverError) {
        setServerError(res.serverError)
       commonError.current.style.display = 'block'
      }else{
        setError(res);
      }
    }
  };

  return (
    <div className={style.signupBox}>
      <CommonError ref={commonError}>{serverError}</CommonError>
      <form onSubmit={submitForm}>
        <Title style={{ textAlign: "center", marginBottom: "30px" }}>
          Signup
        </Title>
        <div className={style.formItem}>
          <label htmlFor="firstName">
            <Text>First Name</Text>
          </label>
          <Input
            type="text"
            id="firstName"
            onChange={(e) =>usehandaleChange(e,dispatch)}
            value={state.firstName}
            name="firstName"
            placeholder="Your first name"
          />
          <Error>{error.fname ? error.fname.msg : ""}</Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="lastName">
            <Text>Last Name</Text>
          </label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) =>usehandaleChange(e,dispatch)}
            value={state.lastName}
            placeholder="Your last name"
          />
          <Error>{error.lname ? error.lname.msg : ""}</Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="email">
            <Text>Email</Text>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={(e) => usehandaleChange(e,dispatch)}
            value={state.email}
            placeholder="Your email"
          />
          <Error>{error.email ? error.email.msg : ""}</Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="password">
            <Text>Password</Text>
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={(e) =>usehandaleChange(e,dispatch)}
            ref={password}
            value={state.password}
            placeholder="Your password"
          />
          <Error>{error.password ? error.password.msg : ""}</Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="confirmPassword">
            <Text>Confirm password</Text>
          </label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPassword}
            onChange={(e) => usehandaleChange(e,dispatch) }
            value={state.confirmPassword}
            placeholder="Re-type password"
          />
          <Error>
            {error.confirmPassword ? error.confirmPassword.msg : ""}
          </Error>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={style.formItem}>
            <Button type="submit">Submit</Button>
          </div>
          <Text>
            <A href="/login">I have alreay account</A>
          </Text>
        </div>
      </form>
    </div>
  );
}
