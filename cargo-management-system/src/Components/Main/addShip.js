import react, { useReducer, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";
import styles from "../signup/signUp.module.css";
import { InputWithLabel } from "../Molecules/InputWithLabel";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const addShipReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };
    case "SET_CAPACITY":
      return { ...state, capacity: payload };

    case "SET_MODEL":
      return { ...state, model: payload };
    case "SET_PRICE":
      return { ...state, price: payload };
    case "SET_TERMINAL":
      return { ...state, terminal: payload };
    default:
      return state;
  }
};
export default function ComposedTextField() {
  const navigate = useNavigate();
  const companyID = useSelector((state) => state.companyID);
  const [addShip, dispatch] = useReducer(addShipReducer, {
    name: "",
    capacity: "",
    model: "",
    price: "",
    terminal: [],
    file: "",
  });
  const [switchValue, setSwitchValue] = useState(true);
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const [stops, setStops] = useState(2);
  function updateStops(value) {
    if (value) {
      setStops(stops + 1);
    } else {
      if (stops > 2) {
        setStops(stops - 1);
      }
    }
  }

  function onhandleName(e) {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  }
  function onhandleCapacity(e) {
    dispatch({ type: "SET_CAPACITY", payload: e.target.value });
  }
  function onhandleModel(e) {
    dispatch({ type: "SET_MODEL", payload: e.target.value });
  }
  function onhandlePrice(e) {
    dispatch({ type: "SET_PRICE", payload: e.target.value });
  }
  function onhandleTerminal(country, index) {
    console.log(country, index);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(addShip.model.length!==4){
      toast.error("Enter Valid year",{
        
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        
      })
      return;
    }
    if(!file){

      toast.error("Please Upload Ship image",{
        
        position: toast.POSITION.TOP_RIGHT,
        className: "toast_message",
      
    })
    return;
    }
    const data = new FormData(e.currentTarget);
    const terminalArray = [];
    for (let i = 1; i <= stops; i++) {
      terminalArray.push(data.get("input" + i));
    }
    console.log(terminalArray);
    dispatch({ type: "SET_TERMINAL", payload: terminalArray });
    console.log(addShip);
    console.log(addShip);
    const formData = new FormData();

    // Append ship details
    formData.append("name", addShip.name);
    formData.append("capacity", addShip.capacity);
    formData.append("model", addShip.model);
    formData.append("price", addShip.price);
    formData.append("terminal", terminalArray);

    // Append the file
    formData.append("image", file);

    console.log(formData);
    let ok = true;
    let falseTerminals = [];
    falseTerminals = terminalArray.map(async (element, index) => {
      const res = await fetch(
        "https://restcountries.com/v3.1/name/" + element + "?fullText=true"
      );
      const response = await res.json();
      console.log(response);
      if (response.status) {
        ok = false;
        console.log("res not ok");
        return {
          element,
          flag: 0,
        };
      } else {
        console.log("running");
        return {
          element,
          flag: 1,
        };
      }
    });

    const response = await Promise.all(falseTerminals);

    console.log(companyID);
    if (ok) {
      const res = await fetch("http://127.0.0.1:5000/api/ships/upload", {
        method: "POST",
        body: formData,
        headers: {
          companyID: localStorage.getItem("company_id"),
        },
      });
      const response = await res.json();
      if (response.status==="Success") {
        toast.success("Ship Added",{
          position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
        });
         navigate('/login');
      }
    } else {
      response.forEach((element, index) => {
        if (!element.flag) {
          toast.error("Terminal # " + index + 1 + " is not correct.");
        }
      });
    }
  };

  return (
    <form className={styles.addShip} onSubmit={handleSubmit}>
      <ToastContainer />
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Name"}
          type={"text"}
          placeholder={"Ship Name"}
          onChangeInput={onhandleName}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Conveying Capacity"}
          type={"number"}
          placeholder={"In Tonnes"}
          onChangeInput={onhandleCapacity}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Model"}
          type={"text"}
          placeholder={"2015"}
          onChangeInput={onhandleModel}
        />
      </div>
      <div className={styles.emailinput}>
        <InputWithLabel
          text={"Price per Tonne"}
          type={"text"}
          placeholder={"$50000"}
          onChangeInput={onhandlePrice}
        />
      </div>

      <div>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      <div>
        {switchValue ? (
          <>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                updateStops(1);
              }}
              sx={{ mt: 2 }}
            >
              Add Terminal
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ ml: 2, mt: 2 }}
              color="error"
              onClick={() => {
                updateStops(0);
              }}
            >
              Remove Terminal
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
      {switchValue ? (
        Array.from({ length: stops }, (_, index) => {
          return (
            <div className={styles.emailinput}>
              <label>{"Terminal # " + (index + 1)}</label>
              <input
                placeholder="Country Name"
                onChange={(e) => {
                  onhandleTerminal(e.target.value, index);
                }}
                name={"input" + (index + 1)}
              />
              {/* <InputWithLabel
                text={"Terminal # " + (index + 1)}
                type={"text"}
                placeholder={"Country Name"}
                onChangeInput={(e)=>{onhandleTerminal(e.target.value, index)}}
              /> */}
            </div>
          );
        })
      ) : (
        <></>
      )}

      {/* <Link to="/user/dashboard"> */}
      <button className={styles.addButton} type="submit">
        Add
      </button>
      {/* </Link> */}
      <ToastContainer />
    </form>
  );
}