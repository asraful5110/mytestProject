import {
  Title,
  Input,
  Button,
  Text,
  Error
} from "../../styled_components/bassic_styled";

import style from "./signup.module.css";

import { useReducer,useRef, useEffect} from "react";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fname":
      return { ...state, fname: action.value };
    case "lname":
      return { ...state, lname: action.value };
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
  const form = useRef();


  useEffect(()=>{
    form.current.onsubmit = (e)=>{
       if(state.password !== state.confirmPassword){
          return false;
       }
    }
  },[state.password,state.confirmPassword])
  return (
    <div className={style.signupBox}>
      <form action='http://localhost:4000/test' method="post" ref={form}>
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
            onChange={(e) => dispatch({ type: "fname", value: e.target.value })}
            value={state.fname}
            name="firstName"
            placeholder="Your first name"
          />
          <Error></Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="lastName">
            <Text>Last Name</Text>
          </label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => dispatch({ type: "lname", value: e.target.value })}
            value={state.lname}
            placeholder="Your last name"
          /><Error></Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="email">
            <Text>Email</Text>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={(e) => dispatch({ type: "email", value: e.target.value })}
            value={state.email}
            placeholder="Your email"
          />
          <Error></Error>
        </div>
        <div className={style.formItem}>
          <label htmlFor="password">
            <Text>Password</Text>
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={(e) =>
              dispatch({ type: "password", value: e.target.value })
            }
            ref={password}
            value={state.password}
            placeholder="Your password"
          />
          <Error></Error>
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
            onChange={(e) =>
              dispatch({ type: "confirmPassword", value: e.target.value })
            }
            value={state.confirmPassword}
            placeholder="Re-type password"
          />
          <Error></Error>
        </div>
        <div className={style.formItem}>
          <Button type="submit" style={{marginTop : '20px'}}>Submit</Button>
        </div>
      </form>
    </div>
  )

          }