/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// import motion from framer-motion (if you want to animate an element, you have to make it a motion element)
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className="home container">
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        initial={{ fontSize: "1em" }} 
        animate={{ color: "yellow", fontSize: "3em" }}
        transition={{ duration: .5 }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;