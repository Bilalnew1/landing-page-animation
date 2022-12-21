import React from "react";
import "../../src/App.css";
import Cardnew from "../assets/5e8c95da940fcc4585f5cde9_Lab-8-James-Bond-Spyscape.jpg";
import { motion, rotate } from "framer-motion";

const nexttoherosection2 = (props) => {
  return (
    <>
      <div className="nextmain">
        {/* <div> */}
        <div className="paragraphnexttohero">
          <p className="paragraph3" style={{}}>
          SPYSCAPE
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
        <div className="identity1">
          <p className="identity-website1">WEBSITE</p>
        </div>
        {/* <div className="no-div"> */}
<div className="no1">
  02
</div>
        {/* </div> */}
        <div className="roundbutton1">
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

            <div className="buttontext1" style={{}}>
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
