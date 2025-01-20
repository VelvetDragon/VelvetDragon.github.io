"use client";

import { useState } from "react";
import Image from "next/image";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import tryImage from "../public/me.jpg";

// Import local Lottie animation JSON files
import circleAnimation from "../public/circleAnimation.json";
import terai from "../public/terai.json";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    

    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} px-10 md:px-20 lg:px-40 overflow-x-hidden transition-colors duration-500 min-h-screen`}>

      <nav className="py-10 mb-12 flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold cursor-pointer" 
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Suwan Aryal
        </motion.h1>

        <ul className="flex items-center space-x-8">
          <li 
            className="cursor-pointer text-2xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <IoMoonOutline /> : <IoIosSunny />}
          </li>
          <li>
            <a
              className="bg-teal-400 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity"
              href="https://drive.google.com/file/d/1gQ0cR1JLRG5jLmr9ZrGNmbHiCq07jjLm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        {/* Background decorative animations */}
        <motion.div 
          className="absolute top-0 left-10 w-32 h-32 rounded-full opacity-70"
          initial={{ scale: 0.5, y: -100, opacity: 0 }}
          animate={{ scale: [0.5, 1.2, 1], y: 0, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <Lottie animationData={circleAnimation} loop />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-0 w-40 h-40 opacity-70"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: [-20, 20, -20], opacity: [1, 0.7, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Lottie animationData={circleAnimation} loop />
        </motion.div>

        <motion.h2 
          className="text-5xl font-extrabold md:text-6xl mb-4 z-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Suwan Aryal
        </motion.h2>

        <motion.p 
          className="text-md py-5 leading-8 md:text-xl max-w-xl mx-auto z-10 text-teal-300"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate about <span className="text-teal-200 font-semibold">Data Analysis</span> and <span className="text-teal-200 font-semibold">Machine Learning</span>. Always eager to learn and collaborate!
        </motion.p>

        <motion.div 
          className="relative rounded-full w-72 h-72 md:h-80 md:w-80 shadow-xl overflow-hidden mt-10 mb-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image className="object-cover" src={tryImage} alt="Me" fill />
          
        </motion.div>
        <motion.div 
          className="text-3xl md:text-5xl flex justify-center gap-4 md:gap-16 py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a
            href="https://www.instagram.com/s_.uwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.facebook.com/suwan.aryal.3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://github.com/VelvetDragon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <AiFillGithub />
          </a>
          <a
            href="mailto:aryalsuwan.2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition-colors"
          >
            <MdEmail />
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16 overflow-hidden">
        <motion.h3 
          className="text-4xl text-center font-extrabold mb-10"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div 
            className="bg-gray-800 text-center p-6 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Languages</h4>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Python","JavaScript","C++","C#","SQL"].map((skill) => (
                <motion.span 
                  key={skill} 
                  className="bg-teal-600 px-3 py-1 rounded-lg shadow-md text-sm text-white transform hover:rotate-1 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div 
            className="bg-gray-800 text-center p-6 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.1 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Frontend Technologies</h4>
            <div className="flex justify-center gap-2 flex-wrap">
              {["HTML","CSS","Tailwind","React","React Native"].map((tech) => (
                <motion.span 
                  key={tech} 
                  className="bg-teal-600 px-3 py-1 rounded-lg shadow-md text-sm text-white hover:rotate-1 hover:scale-105 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Data Analysis */}
          <motion.div 
            className="bg-gray-800 text-center p-6 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.2 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Data Analysis</h4>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Pandas","Numpy","Matplotlib","Seaborn","Plotly"].map((tool) => (
                <motion.span 
                  key={tool} 
                  className="bg-teal-600 px-3 py-1 rounded-lg shadow-md text-sm text-white hover:rotate-1 hover:scale-105 transition-transform"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Machine Learning */}
          <motion.div 
            className="bg-gray-800 text-center p-6 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.3 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Machine Learning</h4>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Scikit-Learn","TensorFlow","Keras"].map((ml) => (
                <motion.span 
                  key={ml} 
                  className="bg-teal-600 px-3 py-1 rounded-lg shadow-md text-sm text-white hover:rotate-1 hover:scale-105 transition-transform"
                >
                  {ml}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div 
            className="bg-gray-800 text-center p-6 rounded-xl relative overflow-hidden col-span-1 md:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay:0.4 }}
          >
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Tools</h4>
            <div className="flex justify-center gap-2 flex-wrap">
              {["Git","Firebase","Jupyter Notebook"].map((tool) => (
                <motion.span 
                  key={tool} 
                  className="bg-teal-600 px-3 py-1 rounded-lg shadow-md text-sm text-white hover:rotate-1 hover:scale-105 transition-transform"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <motion.h3 
          className="text-4xl py-1 mb-10 text-center font-bold"
          initial={{ opacity:0, y:20 }}
          whileInView={{opacity:1,y:0}}
          viewport={{ once: true }}
          transition={{ duration:0.8 }}
        >
          Projects
        </motion.h3>

        <div className="text-md py-5 leading-8 text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6 }}
              onClick={() => window.open('https://github.com/VelvetDragon/disney-films-emotion-NLP', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Emotional Disney</h4>
              <p className="text-gray-200">Honors Research Project on emotion detection in different Disney Films</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/disney-films-emotion-NLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.1 }}
              onClick={() => window.open('https://github.com/VelvetDragon/Churn-Analysis-and-Prediction', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Customer Churn Analysis & Prediction</h4>
              <p className="text-gray-200">Machine learning pipeline for predicting customer churn with Flask and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Churn-Analysis-and-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.2 }}
              onClick={() => window.open('https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Sentiment Analysis on Amazon Reviews</h4>
              <p className="text-gray-200">Sentiment analysis on product reviews using NLP techniques.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.3 }}
              onClick={() => window.open('https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Airlines Ticket Fare Prediction</h4>
              <p className="text-gray-200">Predictive model for airline ticket prices using regression algorithms.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.4 }}
              onClick={() => window.open('https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Password Strength Prediction</h4>
              <p className="text-gray-200">Predict password strength using NLP techniques and classification models.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              whileHover={{ scale:1.03 }}
              whileTap={{ scale:0.98 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.5 }}
              onClick={() => window.open('https://github.com/VelvetDragon/sales-insights', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Sales Insights Dashboard</h4>
              <p className="text-gray-200">Interactive dashboard to visualize sales data with Power BI and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-700 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/sales-insights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-teal-300 hover:scale-110 transition-transform"
                >
                  <AiFillGithub />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <footer className="py-10 text-center">
        <p className="text-sm text-gray-600 dark:text-white">
          © 2024 Suwan Aryal. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
