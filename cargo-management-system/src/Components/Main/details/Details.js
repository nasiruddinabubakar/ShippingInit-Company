import ShipDetail from "./ShipDetail";
import LoadRadial from "./LoadRadial";
import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getDetails } from "../../../app/features/company/companySlice";

function Details() {
  const [hoverValue, setHoverValue] = useState(1);

  const ships = [
    {
      id: 1003,
      name: "Cruiser WN3",
      route: [
        "Afghanistan",
        "Africa",
        "Japan",
        "America",
        "Srilanka",
        "North-Korea",
      ],
      load: 25,
      stop: 2,
    },
    {
      id: 1003,
      name: "Cruiser WN3",
      route: ["Sirilanka", "Madagascar", "Neitherland", "America"],
      load: 25,
      stop: 3,
    },
    {
      id: 1009,
      name: "Destroyer",
      route: ["Saudia Arabia", "Africa", "Japan", "America"],
      load: 85,
      stop: 2,
    },
    {
      id: 1408,
      name: "Corvette",
      route: ["Afghanistan", "Africa", "Japan", "America"],
      load: 25,
      stop: 1,
    },
    {
      id: 2416,
      name: "Allure of the Seas",
      route: ["Afghanistan", "Africa", "Japan", "America"],
      load: 65,
      stop: 3,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Afghanistan", "Africa", "Japan", "America"],
      load: 85,
      stop: 3,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
    {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
        {
      id: 1298,
      name: "Titanic",
      route: ["Pakistan", "Japan", "Australia", "Uzbekistan"],
      load: 85,
      stop: 2,
    },
  ];
  function handleRowHover(index) {
    setHoverValue(index);
    document.documentElement.style.setProperty(
      "--offset",
      472 - 472 * (ships[index].load / 100)
    );
  }
  useEffect(() => {
    handleRowHover(0);
  }, [0]);
  return (
    <div className="details">
      <div className="recentOrders">
        <div className="cardHeader">
          <h2>Ships On Route</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Current Country</td>
              <td>Arrival Country</td>
              <td>Load</td>
            </tr>
          </thead>
          <tbody>
            {ships.map((element, index) => {
              return (
                <ShipDetail
                  hoverValue={hoverValue}
                  id={index}
                  element={element}
                  handleRowHover={() => {
                    handleRowHover(index);
                  }}
                  stop={element.stop}
                />
              );
            })}
          </tbody>
          </table>
      </div>
      <LoadRadial ship={ships[hoverValue]} />
    </div>
  );
}

export default Details;
