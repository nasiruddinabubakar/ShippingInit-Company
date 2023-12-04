import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "./app/features/company/companySlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
