import React from "react";
import "../../src/App.css";
import Cardnew from "../assets/5cf80fdbef558e53b4bd299a_5c1cfc3177d1f63e240f6332_Acupuncture-Clinique-St-Bruno-Lemoyne.jpg";
import { motion, rotate } from "framer-motion";

const nexttoherosection = (props) => {
  return (
    <>
      <div className="nextmain">
        {/* <div> */}
        <div className="paragraphnexttohero21">
          <p className="paragraph321" style={{}}>
          HEY! <br />
I GOT A NEW SITE</p>
          <p style={{fontSize:"50px"}}>And just like every sequel, it’s not as good as the first one. Check it out!</p>
        </div>
       
       
        {/* <div className="no-div"> */}

        {/* </div> */}
       
      </div>
    </>
  );
};

export default nexttoherosection;























































// import React from "react";
// import "../../src/App.css";

// import { motion, useViewportScroll, useTransform } from "framer-motion";

// function New() {
//   const { scrollYProgress } = useViewportScroll();
//   console.log(scrollYProgress);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

//   return (
//     <>
//        <div className="wrapper">
//         <motion.div
//           className="container"
//           style={{
//             scale,
//           }}
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 style={{ width: "50%" }}>I HELP BUSINESSES STAND OUT</h1>
//           <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita impedit quas officia omnis? Amet, qui. Consequuntur doloribus corrupti molestiae recusandae qui fugiat commodi aliquid nulla. Doloribus dignissimos blanditiis dolorum ipsa.</h1>

//           <motion.div
//             className="item"
//             style={{
//               scaleY: scrollYProgress,
//             }}
//           />
//           {/* <img style={{width:"280px" }} src="https://cdn.shopify.com/s/files/1/0418/6429/8657/files/3_ff4d19b8-ca86-412e-a1e1-8f9156cea6c4.jpg?v=1660827105" alt="" /> */}
//         </motion.div>

//         <div className="conatiner"></div>
//        </div> 



//     </>
//   );
// }

// export default New;
