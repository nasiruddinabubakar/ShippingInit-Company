import styles from "./ShipInfo.module.css";
// import { Header } from "../../../UI/Header";
// import { easeIn, motion } from "framer-motion";
// import Opacity from "../../../framer/Opacity";
// import { Check } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addShip } from "../../../../features/orders/orderSlice";
import SpinnerFullPage from "../UI/spinnerFullPage";


export default () => {
  const [imageData, setImageData] = useState([]);
  const [shipDetails, setShipDetails] = useState([]);
//  let shipDetails = {};
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const id = params.id;
  console.log(id);
  useEffect(() => {
    async function getShips() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/api/ships/getships",
          {
            cache: "no-store", // Disable caching
            mode: "cors", // Enable cross-origin resource sharing
            headers: {
              shipID: id,
            },
          }
        );
        const data = await response.json();
        setShipDetails(data);
        const { image } = data;
       console.log("shipDetails.name",shipDetails.name);
        let uint8Array;
        if (image && image.data) {
             uint8Array = new Uint8Array(image.data);
        }

        const blob = new Blob([uint8Array], { type: "image/jpg" }); // or 'image/jpeg'

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setImageData(base64Data);
        };
        
        reader.readAsDataURL(blob);
        setIsLoading(false);
      } catch (Err) {
        setIsLoading(false);
        console.error("error occured ", Err);
      }
    }

    getShips();
  }, []);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  console.log(shipDetails);
  return (
    <>
      {isLoading ? (
        <SpinnerFullPage />
      ) : (
        <div className={styles.container}>
          {/* <Header /> */}
          <div className={styles.innercontainer}>
            <div className={styles.shipdetails}>
              <div className={styles.box}>
                <div className={styles.image}>
                  {/* <Opacity time={1}> */}
                    <img src={imageData} alt="Uploaded" />
                  {/* </Opacity> */}
                </div>
              </div>

              <div className={styles.box}>
                
                  <div style={{ borderRadius: "1.5rem" }}>
                    {" "}
                    <h2 className={styles.bar}>Ship Information</h2>
                  </div>
                  <div class="flx flex2">
                    <table class="aparams">
                      <div className="outer-table">
                        <div className="table-div">
                          <div className="">Ship Name : </div>
                          <div className="">{shipDetails.name}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Gross tonnage : </div>
                          <div className="">{shipDetails.capacity}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Price per tonne : </div>
                          <div className="">{shipDetails.price_per_tonne}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Current tonnage : </div>
                          <div className="">{shipDetails.currentWeight}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Build Year : </div>
                          <div className="">{shipDetails.build_year}</div>
                        </div>
                        <div className="table-div">
                          <div className="">Home Port : </div>
                          <div className="">{shipDetails.start_country}</div>
                        </div>
                      </div>
                    </table>
                  </div>
    
              </div>
            </div>
            

           
          </div>
        </div>
      )}
    </>
  );
};

export const VoyageDetails = () => {
  return (
    <div className="flx flex2">
      <table className="aparams">
        <tbody>
          <tr>
            <td className="n3">Predicted ETA</td>
            <td className="v3">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
