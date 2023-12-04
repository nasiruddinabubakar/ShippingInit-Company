import { useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./signUpForm";
import { postData } from "../utils/postData";
const registerReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_MAIL":
      return { ...state, mail: payload };

    case "SET_PASSWORD":
      return { ...state, password: payload };
    case "SET_PHONE":
      return { ...state, phone_no: payload };
    case "SET_ADDRESS":
      return { ...state, address: payload };

    default:
      return state;
  }
};

export const RegisterData = () => {
  const [isloading, setIsLoading] = useState(false);
  const [registerUser, dispatch] = useReducer(registerReducer, {
    name: "",
    mail: "",
    password: "",
    phone_no: "",
    address: "",
  });
  const [temp, setTemp] = useState("");

  function onsetTemp(e) {
    setTemp(e.target.value);
  }

  function onHandleName(e) {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  }
  function onHandleMail(e) {
    dispatch({ type: "SET_MAIL", payload: e.target.value });
  }
  function onHandlePassword(e) {
    if (temp === e.target.value)
      dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  };
  const validatePhone = (phone) => {
    const phoneNumberRegex = /^03[0-9]{2}[-\s]?[0-9]{7}$/;
    return phoneNumberRegex.test(phone);
  };
  function onHandlePhone(e) {
    dispatch({ type: "SET_PHONE", payload: e.target.value });
  }
  function onHandleAddress(e) {
    dispatch({ type: "SET_ADDRESS", payload: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    const notify = (text) => {
      toast.error(text, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast_message",
      });
    };
    console.log(validateEmail(registerUser.mail));
    if (
      validateEmail(registerUser.mail) === false ||
      validatePhone(registerUser.phone_no) === false
    ) {
      notify("Email or Phone is not valid");
      return;
    } else {
    }
    if (registerUser.password === "") {
      notify("Password Doesnt match");
      return;
    }
    try {
      const res = await postData(
        "http://127.0.0.1:5000/api/company/register",
        registerUser
      );
      console.log(res);

      if (res.status === "failed") {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
      if (res.status === "success") {
        toast.success("Account Created", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    } catch (error) {
      if (error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
      }
    }
  }
  return (
    <RegisterForm
      handleRegister={handleRegister}
      onHandleName={onHandleName}
      onHandleMail={onHandleMail}
      onsetTemp={onsetTemp}
      onHandlePassword={onHandlePassword}
      onHandlePhone={onHandlePhone}
      onHandleAddress={onHandleAddress}
    />
  );
};
