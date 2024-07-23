import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
       
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="./in.png" alt="" />
          </a>
          <a href="https://github.com/aarti251">
            <img src="./gt.png" alt="" />
          </a>
          <a href="mailto:aarti2531@gmail.com">
            <img src="./email.png" alt="" />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
