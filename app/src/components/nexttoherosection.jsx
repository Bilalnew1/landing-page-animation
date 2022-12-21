import React from "react";
import "../../src/App.css";
import Cardnew from "../assets/5cf80fdbef558e53b4bd299a_5c1cfc3177d1f63e240f6332_Acupuncture-Clinique-St-Bruno-Lemoyne.jpg";
import { motion, rotate } from "framer-motion";

const nexttoherosection = (props) => {
  return (
    <>
      <div className="nextmain">
        {/* <div> */}
        <div className="paragraphnexttohero">
          <p className="paragraph3" style={{}}>
            OPTION
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
        <div className="identity">
          <p className="identity-website">IDENTITY + WEBSITE</p>
        </div>
        {/* <div className="no-div"> */}
<div className="no">
  01
</div>
        {/* </div> */}
        <div className="roundbutton ">
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

            <div className="buttontext" style={{}}>
              veiw project
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default nexttoherosection;
