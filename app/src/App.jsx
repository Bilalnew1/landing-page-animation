import New from "./components/new";
import Nexttoherosection from "./components/nexttoherosection";
import Nexttoherosection2 from "./components/nexttoherosection2";
import Nexttoherosection3 from "./components/nexttoherosection3";
import Nexttoherosection4 from "./components/nexttoherosection4";
import Mousehover from "./components/footer";
import "./App.css"
// import Finalnew from "./template/final"
// import "../src/template/Style.css";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useFollowPointer } from "./use-follow-pointer";


function App() {
  return (
    <>
   <div className="main">

      <New />
      <Nexttoherosection/>
      {/* <br /><br /><br /> */}
     <Nexttoherosection2/> 
     <Nexttoherosection3/> 
     <Nexttoherosection4/> 
      <Mousehover/>
      <br />
      <br />
      <br />
      <br />

   </div>
{/* <Finalnew/> */}
    </>
  );
}

export default App;


// import "./styles.css";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import { useFollowPointer } from "./use-follow-pointer";

// export default function App() {
//   const ref = useRef(null);
//   const { x, y } = useFollowPointer(ref);

//   return (
//     <motion.div
//       ref={ref}
//       className="box"
//       animate={{ x, y }}
//       transition={{
//         type: "spring",
//         damping: 3,
//         stiffness: 50,
//         restDelta: 0.001
//       }}
//     />
//   );
// }
