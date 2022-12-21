import React from "react";
import "../../src/App.css";
import Cardnew from "../assets/60101e9f16632380d0f20c14_Salon-Beaute-St-Bruno-Vermeil-2.jpg";
import { motion, rotate } from "framer-motion";

const nexttoherosection2 = (props) => {
  return (
    <>
      <div className="nextmain">
        {/* <div> */}
        <div className="paragraphnexttohero">
          <p className="paragraph3" style={{}}>
          LE VERMEIL
          </p>
        </div>
        <div className="image2">
          <img
            style={{
              width: "920px",
              height: "500px",
              overflow: "hidden",
              marginLeft: "-133px",
            }}
            src={Cardnew}
            alt=""
          />
        </div>
        <div className="identity2">
          <p className="identity-website2">IDENTITY + WEBSITE
</p>
        </div>
        {/* <div className="no-div"> */}
<div className="no2">
  03
</div>
        {/* </div> */}
        <div className="roundbutton2">
          <motion.div
            className="circle"
            // style={{}}
            // whileHover={{ scale: 1.2, rotate: 360 }}
            // whileTap={{
            //   scale: Infinity,
            //   rotate: 360,
            //   borderRadius: "100%"
            // }}


            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            {/* <div className="round"> */}

            <div className="buttontext2" style={{}}>
              veiw project
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default nexttoherosection2;
