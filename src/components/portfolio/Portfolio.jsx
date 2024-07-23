import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio website",
    img: "dhara.png",
   
   
   
    desc: "I've crafted a dynamic and engaging portfolio website using the power of React, Framer Motion, and Vite for the client.Intricate animations achieved using Framer Motion Optimized performance thanks to Vite .Specific React components or libraries use Respon.sive design for various screen sizesUnique design elements or features",
    button: "https://chimerical-longma-e38032.netlify.app/"
  },
 
  {
    id: 2,
    title: "Hospital Website",
    img: "hospital.png",
    desc: "By utilizing HTML, CSS, and JavaScript, i've created a digital platform that effectively communicates essential information about your hospital to patients, staff, and the community . this website made for the client",
    button: "https://venerable-peony-e8b3e9.netlify.app/"
  },
  {
    id: 3,
    title: "Hourse Booking Webssite",
    img: "hourse.png",
    desc: "I 've developed a dynamic and user-friendly real estate website using React.js for the interactive frontend and Node.js to power the backend server.User-friendly interface A clean and modern design with easy navigation, ensuring a pleasant user experience. Efficient data management: Node.js backend handles property data storage, retrieval, and updates, providing a robust foundation for the website.",
    button: "https://aarti251.github.io/hourse-booking/"
  },
  {
    id: 4,
    title: "Photography website",
    img: "photography.png",
    
    desc: "I've crafted an engaging photography website using the robust combination of Node.js and React. This platform showcases my portfolio in a visually appealing and interactive manner.This photography website effectively showcases my artistic vision and provides a platform to connect with potential clients and photography enthusiasts.",
    button: " https://aarti251.github.io/photograpy-website/"
  },
  {
    id: 5,
    title: "Hotel Website",
    img: "hotel.png",
    desc: "Designed with care using the latest in web development technologies—JavaScript, HTML, and CSS",
    button: "https://github.com/aarti251/hotel-website"
  },
  {
    id: 5,
    title: "University website",
    img: "university.png",
    desc: "I've created an informative and user-friendly university website using HTML, CSS, and JavaScript. This platform effectively showcases the university's identity, programs, and resources.",
    button: "https://aarti251.github.io/AR-University/"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 220]);

  return (
    <section >
      <div className="container" id="portfolio">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button className="btn"><a href= {item.button}>See Website <span>HERE</span></a></button>
           
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
  });
 // <motion.div style={{ scaleX }} className="progressBar"></motion.div>
 //<button><a href="https://github.com/aarti251/hotel-website">See Demo</a></button>
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Work Experience</h2>
        <hr className="styled-hr"/>

      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
