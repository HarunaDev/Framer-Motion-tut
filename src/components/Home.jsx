/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// import motion from framer-motion (if you want to animate an element, you have to make it a motion element)
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 
      initial={{ fontSize: "1em", opacity: 0 }}
      animate={{ fontSize: "3em", color: "red", x: 10, y: 10, opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
        initial={{ fontSize: "1em" }} 
        animate={{ color: "yellow", fontSize: "3em" }}
        transition={{ duration: .5 }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;